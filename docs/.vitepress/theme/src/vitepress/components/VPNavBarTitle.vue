<template>
  <a class="VPNavBarTitle" href="/">
    <slot name="navbar-title">
      <img
        class="logo"
        width="24"
        height="24"
        src="/images/logo.png"
        alt="logo.png"
      />
      <span class="text">BLOG</span>
    </slot>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
