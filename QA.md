# 发布前核验记录

## 页面与语言

已在临时预览中打开西班牙语首页、英语首页与英语 Cookie 页面。西班牙语首页以西班牙语为默认界面，并提供 `EN` 入口；英语首页以英语呈现导航、按钮、信息区、FAQ 与页脚，并提供 `ES` 返回入口。Cookie 内容通过 `/en/cookies` 独立路由打开，非弹窗形式，包含保存偏好与拒绝非必要 Cookie 的按钮。

## 实体关联与内容

首页清晰关联 Salinas Grandes、RN 52、Departamento de Cochinoca、Jujuy、Purmamarca 和 Cuesta de Lipán，并提供指向 Jujuy Turismo、Ministerio de Cultura y Turismo de Jujuy 与 Visit Argentina 的权威来源链接。页面包含 TouristAttraction / LocalBusiness 和 FAQPage JSON-LD，未虚构评论、商户推荐或具体服务保证。

## 图像

页面引用项目存储中的已归档图片。两张 Wikimedia Commons 照片有对应的作者、来源与许可证记录，详见 `NOTICE.md`。标志与 favicon 使用相同的安第斯太阳、盐原地平线与矿物色彩概念。

## 2026 年 8 月域名与出行功能更新

`SITE_URL` 已配置为 `https://greatsaltflat.com`。生产构建生成 `sitemap-index.xml` 和 `sitemap-0.xml`，全部公开 URL 使用该域名且没有 `lastmod` 字段。西班牙语与英语首页均生成 canonical、双向 hreflang、Open Graph URL 和对应的描述；英语版额外提供面向 “Salinas Grandes weather / RN 52 / Puna travel guide” 的分享标题、摘要和关键词。

实时天气模块直接读取 Open-Meteo 的 Salinas Grandes 固定坐标。已确认接口返回本地时区、气温、体感、风速、阵风、能见度及当日气温与降水概率；页面具备加载中、网络错误、重试和无 JavaScript 降级提示。出行核验区明确指向 Jujuy Turismo、Jujuy 官方旅游门户和当地向导，避免把参考费用或一般路线说明当作实时道路通告。

在最终构建预览中，西班牙语天气模块成功呈现来自实时接口的数据：晴朗、4 °C、体感 0 °C、风速 6 km/h、阵风 7 km/h、降水概率 0%、能见度 48.9 km，以及当天 0–20 °C 的预报范围。模块同时呈现道路核验提醒、数据来源和失败后可重试的降级路径。

## 英语消歧义与国际对比更新

生产预览中的 `/en/` 页面已显示 “Clarification: Which ‘Great Salt Flat’ is This?” 横幅、指向 Bonneville Salt Flats 官方 BLM 页面的链接，以及 Salinas Grandes、Bonneville Salt Flats 与 Salar de Uyuni 的四维比较表。自动审计确认以下英语关键词出现在页面标题、H2/H3 或正文中：`Great Salt Flat Argentina`、`Salinas Grandes vs Salar de Uyuni` 和 `Utah Great Salt Lake Desert vs Argentina Salt Flat`。

表格在桌面端采用四列布局；CSS 在窄屏断点将每行转换为带地区标签的纵向比较，避免横向信息丢失。西班牙语首页不输出消歧义或比较模块，保持当地语言页面的原有访问导向。`pnpm check` 与 `pnpm build` 通过。

## 国际盐沼 FAQ 更新

英语对比表下方已增加五项原生折叠 FAQ，分别覆盖 Purmamarca 出发、三地天气对通行的影响、盐沼驾车规则、高海拔行程准备，以及本站天气模块的适用范围。浏览器验证确认模块位于比较表及两项要点说明之后，FAQPage JSON-LD 含五个问题，并且首项通过原生点击事件可正确展开。`pnpm check` 和生产构建已通过。
