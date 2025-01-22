# Vuex / Redux

-   状态管理的思路： 把组件之间需要共享的状态抽离出来，遵循一定的约定，统一管理，让状态的变化可以预测。
    -   思路 1： 全局对象。容易造成数据更改导致相关依赖变化错乱，不可预测
    -   思路 2： action。通过 dispatch 派发行为 action
-   redux 实现思路： 发布订阅模式 在 dispatch 中调用 reduce 方法
    -   redux 的异步更新实现：发送两个 action,在请求前和请求后都发送 action 来更新。
-   Vuex,更改对象，利用 vue 的数据响应式原理来更新
    -   mutation 用来做同步事务
    -   action 用来做异步事务
-   redux: view -> dispatch -> actions -> reducer -> state 变化 -> view 变化
-   vuex: view -> commit -> mutations -> state 变化 -> view 变化
    view -> dispatch -> actions -> mutations -> state 变化 -> view 变化

## vuex 的 mutation 和 redux 的 reducer 为什么不能做异步操作

-   因为更改 state 的函数必须是纯函数，纯函数既是统一输入就会统一输出，没有任何副作用；如果是异步则会引入额外的副作用，导致更改后的 state 不可预测；

## 手写 redux 的及 compose 函数

```js
function compose(...funcs) {
	if (funcs.length === 0) {
		return arg => arg;
	}
	if (funcs.length === 1) {
		return funcs[0];
	}

	return funcs.reduce(
		(a, b) =>
			(...args) =>
				a(b(...args)),
	);
}
```

## vuex 与 redux 的区别

-   更新页面的机制不同
    -   vue 里，vuex 中 store 的数据也是响应式的，通过 vue 的响应式机制来更新页面
    -   redux 里，通过发布订阅模式，在数据更新后，循环执行回调函数

### 参考链接

-   [https://zhuanlan.zhihu.com/p/53599723] Vuex、Flux、Redux、Redux-saga、Dva、MobX
