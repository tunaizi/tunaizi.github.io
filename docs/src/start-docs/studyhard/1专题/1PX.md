# 怎么画 1px 像素线

### 怎么画 1px 像素线，逻辑像素,物理像素的概念

- css 像素是没有实际大小的抽象单位，它是一个相对长度，相对于显示器的分辨率。
- 物理像素在设备中是固定的，由分辨率决定，代表设备实际拥有的像素点。Retina 2 倍屏幕说的就是物理像素。
- 逻辑像素是一个抽象概念。css 像素使用的就是逻辑像素。例如 retina 屏幕，1pxcss 像素等于 4 个物理像素。
- 实现真正的 1px 物理像素
- devicePixelRatio 可以获取设备物理像素分辨率与 CSS 像素分辨率的比率

  - ios8+ 可以支持 0.5px 写法，可以动态获取设备的 devicePixelRatio，统一增加 css hack,将 border-width 设置成 0.5px。
  - 伪类+transform
    - 使用伪类元素 before 或者 after 重做 border,并将 transform:scale(0.5)
  - viewport+rem

    - devicePixelRatio 为 2 时设置

    ```html
    <mata
      name="viewport"
      content="
        width=device-width, 
        initial-scale=0.5,maximum-scale=0.5, 
        minimum-scale=0.5, 
        user-scalable=no
      "
    />
    ```

    - devicePixelRatio 为 3 时设置

  ```html
  <mata
    name="viewport"
    content="
      width=device-width,
      initial-scale=0.33333333,
      maximum-scale=0.33333333, 
      minimum-scale=0.33333333, 
      user-scalable=no
    "
  />
  ```

  - border-image or background-image
    - 使用 2 倍的边框为 1px 的图，将 border-weidth 设置为 1px。

## 参考[https://mp.weixin.qq.com/s/IrV0-v3v5Cl969yFCI58Rg]
