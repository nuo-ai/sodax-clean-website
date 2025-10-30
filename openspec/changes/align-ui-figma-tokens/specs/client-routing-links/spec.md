## ADDED Requirements

#### Scenario: Internal links use next/link
Given internal navigation within the site (e.g., header, footer, landing link lists)
When rendering links to internal routes (non-external, non-mailto, non-tel)
Then these links MUST be implemented with next/link rather than raw anchor elements to avoid full page refreshes
And event handlers such as closing the mobile menu on click MUST continue to function when using next/link.

Validation
- Code search returns zero results for internal raw anchors: `<a href="/(?!http|mailto|tel)`
- Header and Footer source show `import Link from 'next/link'` and usage of `<Link href="...">`
- Manual check in the running app indicates navigation does not cause full page reloads


---

新增需求

场景：内部链接使用 next/link
给定站点内部的导航（例如：页眉、页脚、首页链接列表）
当渲染指向内部路由的链接时（非外部、非mailto、非tel链接）
那么这些链接必须使用 next/link 而非原生锚点元素来实现，以避免整页刷新
并且，诸如点击时关闭移动端菜单等事件处理器，在使用 next/link 时必须继续正常工作。

验证

代码搜索返回的内部原生锚点结果为零：<a href="/(?!http|mailto|tel)"
页眉和页脚的源码显示 import Link from 'next/link' 并使用了 <Link href="...">
在运行的应用中手动检查表明，导航不会导致整页重新加载