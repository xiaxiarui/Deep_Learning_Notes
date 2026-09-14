import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
 
// 左侧边栏组件
const left: Component.ComponentId[] = [
  Component.PageTitle(),
  Component.Search(), // 搜索组件
  Component.Darkmode(), // 深色模式切换
  Component.Explorer({ // 文件目录浏览器
    title: "📁 目录",
    folderClickBehavior: "collapse",
    folderDefaultState: "collapsed",
    useSavedState: true,
    mapFn: (node) => {
      // 自定义文件夹图标
      if (node.file !== undefined) {
        return {
          ...node,
          displayName: node.displayName ?? node.file.name,
        }
      }
      return node
    },
  }),
  Component.DesktopOnly(Component.RecentNotes({ // 最近笔记（仅桌面端）
    title: "最近更新",
    limit: 5,
    linkToMore: "tags/" as any,
  })),
  Component.DesktopOnly(Component.TagList({ // 标签列表（仅桌面端）
    title: "标签",
    limit: 10,
  })),
  Component.Graph({ // 知识图谱
    title: "知识图谱",
    localGraph: {
      drag: true,
      zoom: true,
      depth: -1,
      scale: 1.1,
      repelForce: 0.5,
      centerForce: 0.3,
      linkDistance: 30,
      linkStrength: 0.9,
      fontSize: 0.6,
      opacityScale: 1,
    },
    globalGraph: {
      drag: true,
      zoom: true,
      depth: -1,
      scale: 1,
      repelForce: 0.5,
      centerForce: 0.3,
      linkDistance: 30,
      linkStrength: 0.9,
      fontSize: 0.6,
      opacityScale: 1,
    },
  }),
]
 
// 右侧边栏组件（文章目录）
const right: Component.ComponentId[] = [
  Component.DesktopOnly(Component.TableOfContents({ // 文章目录（仅桌面端）
    title: "📑 目录",
  })),
  Component.DesktopOnly(Component.Backlinks({ // 反向链接（仅桌面端）
    title: "反向链接",
  })),
  Component.MobileOnly(Component.TableOfContents({ // 移动端目录
    title: "📑 目录",
  })),
  Component.MobileOnly(Component.Backlinks({ // 移动端反向链接
    title: "反向链接",
  })),
]
 
// 顶部组件
const header: Component.ComponentId[] = []
 
// 底部组件
const footer: Component.ComponentId[] = [
  Component.Footer({
    links: {
      "GitHub": "https://github.com/xiaxiarui/Deep_Learning_Notes", // 替换为你的仓库地址
    },
  }),
]
 
export const sharedPageComponents: SharedLayout = {
  left,
  right,
  header,
  footer,
}
 
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [],
  right: [],
}
 
export const defaultListPageLayout: PageLayout = defaultContentPageLayout