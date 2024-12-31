const ls = [
  ['', 'start-docs', 'create-blog.md'],
  ['', 'start-docs', 'index.md'],
  ['', 'start-docs', 'studyhard', 'README.md'],
  ['', 'start-docs', 'studyhard', 'cli', 'blog.md'],
  ['', 'start-docs', 'studyhard', 'css', 'blog.md'],
  ['', 'start-docs', 'studyhard', 'webpack', 'blog.md'],
  ['', 'start-docs', 'studyhard', '专题', '1PX.md'],
  ['', 'start-docs', 'studyhard', '专题', 'EventBus.md'],
  ['', 'start-docs', 'studyhard', '专题', 'HTTP(s)及缓存机制.md'],
  ['', 'start-docs', 'studyhard', '专题', 'JS中的new干了什么.md'],
  ['', 'start-docs', 'studyhard', '专题', 'JS作用域.md'],
  ['', 'start-docs', 'studyhard', '专题', 'JS垃圾回收机制.md'],
  ['', 'start-docs', 'studyhard', '专题', 'JS对象拷贝及深拷贝.md'],
  ['', 'start-docs', 'studyhard', '专题', 'JS的this关键字.md'],
  ['', 'start-docs', 'studyhard', '专题', 'JS继承.md'],
  ['', 'start-docs', 'studyhard', '专题', 'LHS和RHS.md'],
  ['', 'start-docs', 'studyhard', '专题', 'NPM包管理.md'],
  ['', 'start-docs', 'studyhard', '专题', 'Promise原理及实现.md'],
  ['', 'start-docs', 'studyhard', '专题', 'bind&call&apply.md'],
  ['', 'start-docs', 'studyhard', '专题', 'class与函数.md'],
  ['', 'start-docs', 'studyhard', '专题', 'js与native通信.md'],
  ['', 'start-docs', 'studyhard', '专题', 'setTimeout.md'],
  ['', 'start-docs', 'studyhard', '专题', 'vue-router或react-router.md'],
  ['', 'start-docs', 'studyhard', '专题', 'vuex或redux.md'],
  ['', 'start-docs', 'studyhard', '专题', '从URL到显示网页的全过程.md'],
  ['', 'start-docs', 'studyhard', '专题', '前端网络安全.md'],
  ['', 'start-docs', 'studyhard', '专题', '单例模式和工厂模式.md'],
  ['', 'start-docs', 'studyhard', '专题', '柯里化.md'],
  ['', 'start-docs', 'studyhard', '专题', '检测数组类型的几种方式.md'],
  ['', 'start-docs', 'studyhard', '专题', '模块化及打包模式.md'],
  ['', 'start-docs', 'studyhard', '专题', '箭头函数与普通函数.md'],
  ['', 'start-docs', 'studyhard', '专题', '纯函数与副作用函数.md'],
  ['', 'start-docs', 'studyhard', '专题', '节流-防抖.md'],
  ['', 'start-docs', 'studyhard', '专题', '观察者模式及发布订阅者模式.md'],
  ['', 'start-docs', 'studyhard', '专题', '设计模式.md'],
  ['', 'start-docs', 'studyhard', '专题', '请求并行串行问题及复用.md'],
  ['', 'start-docs', 'studyhard', '专题', '长列表渲染优化.md'],
  ['', 'start-docs', 'studyhard', '前端基础体系', 'blog.md'],
  ['', 'start-docs', 'studyhard', '数据结构与算法', 'blog.md'],
  [
    '',
    'start-docs',
    'studyhard',
    '数据结构与算法',
    '动态规划和贪心算法.md'
  ],
  ['', 'start-docs', 'studyhard', '数据结构与算法', '哈希表.md'],
  ['', 'start-docs', 'studyhard', '数据结构与算法', '堆栈和队列.md'],
  ['', 'start-docs', 'studyhard', '数据结构与算法', '排序.md'],
  ['', 'start-docs', 'studyhard', '数据结构与算法', '数组.md'],
  ['', 'start-docs', 'studyhard', '数据结构与算法', '树.md'],
  [
    '',
    'start-docs',
    'studyhard',
    '数据结构与算法',
    '深度、广度优先遍历.md'
  ],
  ['', 'start-docs', 'studyhard', '数据结构与算法', '递归和分治.md'],
  ['', 'start-docs', 'studyhard', '数据结构与算法', '链表.md'],
  ['', 'start-docs', 'studyhard', '面试编程真题汇总', 'questions.md'],
  ['', 'start-docs', 'studyhard', '面试编程真题汇总', '原理篇.md'],
  ['', 'start-docs', 'studyhard', '面试编程真题汇总', '常考篇.md']
]

function parse(ar) {
  const root = { text: 'root', items: [] }

  ar.forEach(([fileName, ...pathSegments]) => {
    let current = root
    const fullPath = pathSegments.reduce((acc, segment, index) => {
      if (index === 0) {
        return `/${segment}`
      }
      return `${acc}/${segment}`
    }, '')

    pathSegments.forEach((segment) => {
      let child = current.items.find((item) => item.text === segment)
      if (!child) {
        const link = fullPath.split(segment)[0] + segment
        child = {
          // id: segment,
          items: [],
          link,
          text: segment
        }

        current.items.push(child)
      }
      current = child
    })

    // Add the file as a child of the last segment
    if (fileName) {
      current.items.push({
        // id: fileName,
        text: fileName,
        link: `${fullPath}/${fileName}`
      })
    }
  })

  return root.items[0].items
}

const result = parse(ls)
console.log(result)
