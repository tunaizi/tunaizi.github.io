# hashchange 和 h5 history popstate

```js
  window.addEventListener('hashchange', () => {
    const path = window.location.hash.slice(1)
    const component = routeMap[path].component
    render(h) => h(component)
  })
```
