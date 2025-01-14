# JS 常用逻辑题

## 字符串取反

```js
function processString(s) {
  return s
    .split('')
    .map((char) => {
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    })
    .join('')
}
```

## 实现一个字符串匹配算法

### 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置

```js
function find(S, T) {
  if (S.length < T.length) return -1
  for (let i = 0; i < S.length - T.length; i++) {
    if (S.subStr(i, T.length) === T) return i
  }
  return -1
}
```

## 打印出 1 - 10000 之间的所有对称数 例如 121、1331 等

```js
function print(max) {
  return [...new Array(max).keys()].filter((item) => {
    item = item++
    return (
      item.toString().length > 1 &&
      item === Number(item.toString().split('').reverse().join(''))
    )
  })
}
print(1000)
```

## 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

```js
function move(nums) {
  let length = nums.length
  let j = 0
  for (let i = 0; i < length - j; i++) {
    if (nums[i] === 0) {
      nums.push(0)
      nums.splice(i, 1)
      i--
      j++
    }
  }
  return nums
}
let nums = [0, 1, 0, 3, 12]
console.log(move(nums))
```

## 请实现一个 add 函数，满足以下功能 add(1),add(1)(2),add(1,2)(3)(4)

```js
function add() {
  let args = [...arguments]
  let fn = function () {
    let fn_args = [...arguments]
    return add.apply(null, args.concat(fn_args))
  }
  fn.toString = function () {
    return args.reduce((a, b) => a + b)
  }
  return fn
}
add(1, 2)(3)(4)
```

## 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

```js
function convert(num) {
  let num1 = num / 10
  let num2 = num % 10
  if (num1 < 1) {
    return num
  } else {
    num1 = Math.floor(num1)
    return `${num2}${convert(num1)}`
  }
}
convert(198320)
```

## 常用正则

- trim: /(^\s*)|(\s*$)/g
- 数字 /^[0-9]\*$/
- n 位数字 /^\d{n}$/
- 手机号 /^1[3-9]\d{9}$/
- 邮箱 /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

## 找出字符串中连续出现最多的字符和个数

```js
  'abcaakjbb' => {'a':2,'b':2}
  'abbkejsbcccwqaa' => {'c':3}

  const arr = str.match(/(\w)\1*/g);  // str.match(/(\w)\1+/g)
  const maxLen = Math.max(...arr.map(s => s.length));
  const result = arr.reduce((pre, curr) => {
    if (curr.length === maxLen) {
      pre[curr[0]] = curr.length;
    }
    return pre;
  }, {});

  console.log(result);
```

## 金额格式化

- 将 100000000000 格式化为 100,000,000.000 每三位进行分割

```js
// 德国以 . 分割金钱, 转到德国当地格式化方案即可
;(10000000000).toLocaleString('de-DE')

// 寻找字符空隙加 .
'10000000000'.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

// 寻找数字并在其后面加 .
'10000000000'.replace(/(\d)(?=(\d{3})+\b)/g, '$1.')
```

## 编程题，写个程序把 entry 转换成如下对象

```js
var entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}
var output = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

function convert(entry) {
  const res = Object.create(null)
  for (let key in entry) {
    const keys = key.split('.')
    if (keys.length == 1) {
      res[key] = entry[key]
    } else {
      keys.reduce((prev, curr, index) => {
        if (index === keys.length - 1) {
          return (prev[curr] = entry[key])
        } else {
          prev[curr] = prev[curr] || {}
          return prev[curr]
        }
      }, res)
    }
  }
  return res
}
```

## 编程题，写个程序把 entry 转换成如下对象

```js
var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}
var output = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}
```

```js
function convert(entry) {
  const res = Object.create(null)
  const noop = (obj, prefix = '', result = {}) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let keyName = `${prefix}${key}`
        if (typeof obj[key] === 'object') {
          noop(obj[key], keyName + '.', result)
        } else {
          result[keyName] = obj[key]
        }
      }
    }
  }
  noop(entry, '', res)
  return res
}
```

## 统计 1 ~ n 整数中出现 1 的次数？

```js
// 统计400w中，1出现的次数
function countOne(n) {
  var factor = 1
  let count = 0
  let next = parseInt(n / factor)
  while (next !== 0) {
    var lower = n - next * factor
    var curr = next % 10
    var high = parseInt(n / (10 * factor))

    if (curr === 0) {
      count += high * factor
    } else if (curr === 1) {
      count += high * factor + lower + 1
    } else {
      count += (high + 1) * factor
    }

    factor *= 10
    next = parseInt(n / factor)
  }
  return count
}
```

## 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度

```js
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
]
let result = convert2(list)
function convert2(array) {
  let res = []
  let map = array.reduce(
    (prev, curr) => ((prev[curr.id] = curr), prev),
    {}
  )
  console.log(map)
  for (let item of list) {
    if (item.parentId === 0) {
      res.push(item)
      continue
    } else if (item.parentId in map) {
      let parent = map[item.parentId]
      parent.children = parent.children || []
      parent.children.push(item)
    }
  }
  return res
}
console.log(result)
```
