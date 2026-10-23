export const weatherApiUrl='https://api.open-meteo.com/v1/forecast?latitude=-23.6085346&longitude=-65.8645729&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_gusts_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&timezone=America%2FArgentina%2FJujuy&forecast_days=7&wind_speed_unit=kmh';
export function validateWeather(data:any):void{
 const c=data?.current,d=data?.daily,finite=(n:unknown)=>typeof n==='number'&&Number.isFinite(n);
 if(!c||!d||!['temperature_2m','apparent_temperature','relative_humidity_2m','wind_speed_10m','wind_gusts_10m','weather_code'].every(k=>finite(c[k])))throw new Error('Invalid current weather');
 if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(c.time??''))throw new Error('Missing model time');
 const stamp=Date.parse(c.time+'-03:00');if(!Number.isFinite(stamp)||Math.abs(Date.now()-stamp)>6*3600000)throw new Error('Outdated model time');
 if(!Array.isArray(d.time)||d.time.length<1||d.time.length>7||!d.time.every((s:unknown)=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&Number.isFinite(Date.parse(s))))throw new Error('Invalid daily dates');
 for(const k of ['weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max','uv_index_max'])if(!Array.isArray(d[k])||d[k].length!==d.time.length||!d[k].every(finite))throw new Error('Incomplete forecast');
 if(c.relative_humidity_2m<0||c.relative_humidity_2m>100||c.wind_speed_10m<0||c.wind_gusts_10m<0||d.precipitation_probability_max.some((n:number)=>n<0||n>100))throw new Error('Invalid model values');
}
const cache=((globalThis as any).__gsfWeatherCache??=new Map<string,{data:any;ts:number}>());
const key='salinas-grandes-v2',ttl=10*60*1000;
export async function fetchWeather():Promise<any|null>{
 const now=Date.now(),hit=cache.get(key);
 if(hit&&now-hit.ts<ttl){try{validateWeather(hit.data);return hit.data;}catch{cache.delete(key);}}
 try{const response=await fetch(weatherApiUrl,{signal:AbortSignal.timeout(5000),headers:{accept:'application/json'}});if(!response.ok)return null;const data=await response.json();validateWeather(data);cache.set(key,{data,ts:now});return data;}catch{return null;}
}
