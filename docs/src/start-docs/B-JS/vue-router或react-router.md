# hashchange 和 h5 history popstate

```js
window.addEventListener('hashchange', () => {
  const path = window.location.hash.slice(1)
  const component = routeMap[path].component
  render((h) => h(component))
})
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Hashchange Example</title>
  </head>
  <body>
    <div id="app"></div>
    <script>
      const routeMap = {
        '/': { component: Home },
        '/about': { component: About },
        '/contact': { component: Contact }
      }

      function Home() {
        return '<h1>Home</h1>'
      }

      function About() {
        return '<h1>About</h1>'
      }

      function Contact() {
        return '<h1>Contact</h1>'
      }

      function render(component) {
        document.getElementById('app').innerHTML = component()
      }

      function navigate(path) {
        window.location.hash = path
      }

      window.addEventListener('hashchange', () => {
        const path = window.location.hash.slice(1) || '/'
        const component = routeMap[path].component
        render(component)
      })

      // 初始渲染
      window.addEventListener('load', () => {
        const path = window.location.hash.slice(1) || '/'
        const component = routeMap[path].component
        render(component)
      })
    </script>
    <a href="#/">Home</a>
    <a href="#/about">About</a>
    <a href="#/contact">Contact</a>
  </body>
</html>
```

## history API

HTML5 提供了 history API，允许开发者操作浏览器的历史记录，而不需要使用 hash。popstate 事件在浏览器的历史记录发生变化时触发。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>History API Example</title>
  </head>
  <body>
    <div id="app"></div>
    <script>
      const routeMap = {
        '/': { component: Home },
        '/about': { component: About },
        '/contact': { component: Contact }
      }

      function Home() {
        return '<h1>Home</h1>'
      }

      function About() {
        return '<h1>About</h1>'
      }

      function Contact() {
        return '<h1>Contact</h1>'
      }

      function render(component) {
        document.getElementById('app').innerHTML = component()
      }

      function navigate(path) {
        window.history.pushState({}, '', path)
        render(routeMap[path].component)
      }

      window.addEventListener('popstate', () => {
        const path = window.location.pathname
        const component = routeMap[path].component
        render(component)
      })

      // 初始渲染
      window.addEventListener('load', () => {
        const path = window.location.pathname
        const component = routeMap[path].component
        render(component)
      })
    </script>
    <a href="#" onclick="navigate('/')">Home</a>
    <a href="#" onclick="navigate('/about')">About</a>
    <a href="#" onclick="navigate('/contact')">Contact</a>
  </body>
</html>
```

## 总结

hashchange:

使用 # 来分隔 URL 的路径部分。
不会触发浏览器的历史记录。
适合简单的应用，但对 SEO 和分享不太友好。
popstate:

使用标准的 URL 格式。
会触发浏览器的历史记录。
适合复杂的应用，对 SEO 和分享更友好。

## 框架中应用

1. **hashchange 事件**:

   - **用法**: 在 URL 的 `hash` 部分发生变化时触发。
   - **示例**: 提供了一个简单的 HTML 示例，展示如何使用 `hashchange` 事件来实现路由。
   - **特点**: 使用 `#` 来分隔 URL 的路径部分，不会触发浏览器的历史记录，适合简单的应用，但对 SEO 和分享不太友好。

2. **h5 history API 和 popstate 事件**:

   - **用法**: 在浏览器的历史记录发生变化时触发。
   - **示例**: 提供了一个简单的 HTML 示例，展示如何使用 `history` API 和 `popstate` 事件来实现路由。
   - **特点**: 使用标准的 URL 格式，会触发浏览器的历史记录，适合复杂的应用，对 SEO 和分享更友好。

3. **区别**:

   - **URL 格式**: `hashchange` 使用 `#`，`popstate` 使用标准路径。
   - **浏览器历史记录**: `hashchange` 不会触发历史记录，`popstate` 会触发历史记录。
   - **SEO 和分享**: `hashchange` 不适合 SEO 和分享，`popstate` 适合 SEO 和分享。

4. **在 vue-router 中的应用**:

   - **hash 模式**: 使用 `createWebHashHistory`。
   - **history 模式**: 使用 `createWebHistory`。

5. **在 react-router 中的应用**:
   - **hash 模式**: 使用 `BrowserRouter`。
   - **history 模式**: 使用 `BrowserRouter`。
