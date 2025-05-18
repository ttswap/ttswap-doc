export const siteData = JSON.parse("{\"base\":\"\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"logo.jpeg\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"TTswap document\",\"description\":\"TTswap is a dex , any one can trade\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"欢迎来到TTSwap\",\"description\":\"TTSWAP 是一个去中心化的代币交易平台，任何人都可以快速、安全地将一种代币兑换为另一种，无需依赖中心化交易所。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
