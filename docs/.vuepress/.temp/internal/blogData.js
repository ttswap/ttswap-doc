export const blogPostData = [{"path":"/zh/activity/activity1.html","title":"activity1","categoryList":[{"id":"69a256","sort":10001,"name":"activity"}],"createTime":"2025/05/18 13:45:20","lang":"zh-CN","excerpt":""},{"path":"/user/qmqn9qxf/","title":"README copy 2","categoryList":[{"id":"9cfefe","sort":10000,"name":"en"},{"id":"8b51ca","sort":10001,"name":"activity"}],"createTime":"2025/05/18 13:45:20","lang":"zh-CN","excerpt":""},{"path":"/zh/activity/activity3.html","title":"activity3","categoryList":[{"id":"69a256","sort":10001,"name":"activity"}],"createTime":"2025/05/17 14:18:10","lang":"zh-CN","excerpt":""},{"path":"/zh/activity/activity2.html","title":"activity2","categoryList":[{"id":"69a256","sort":10001,"name":"activity"}],"createTime":"2025/05/17 14:18:10","lang":"zh-CN","excerpt":""},{"path":"/en/activity/activity3.html","title":"activity3","categoryList":[{"id":"9cfefe","sort":10000,"name":"en"},{"id":"8b51ca","sort":10001,"name":"activity"}],"createTime":"2025/05/17 14:18:10","lang":"zh-CN","excerpt":""},{"path":"/user/cb9eumi6/","title":"activity3","categoryList":[{"id":"9cfefe","sort":10000,"name":"en"},{"id":"8b51ca","sort":10001,"name":"activity"}],"createTime":"2025/05/17 14:18:10","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
