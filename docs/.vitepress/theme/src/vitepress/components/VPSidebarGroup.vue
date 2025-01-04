<script lang="ts" setup>
import { useData, useRouter } from 'vitepress'
import { MenuItemWithLink } from '../../core'
// import VPSidebarLink from './VPSidebarLink.vue'
import { useSidebar } from '../composables/sidebar'
import { isActive } from '../support/utils'
import { TreeNodeData } from 'element-plus/es/components/tree/src/tree.type'
const { page } = useData()
const { go } = useRouter()
const { sidebar } = useSidebar()
const updateActive = (item: MenuItemWithLink, node: TreeNodeData) => {
  const isAct = isActive(page.value.relativePath, item.link)
    ? 'active'
    : ''

  return `${isAct} ${
    (!node.isLeaf && [1, 2].includes(node.level)) ||
    (node.level === 1 && node.isLeaf)
      ? 'node-bold-level'
      : ''
  }`
}

const elTreeOpt = {
  children: 'items',
  label: 'text',
  isLeaf: 'isLeaf',
  class: updateActive
}

// function renderContent(h: Function, { data }: { data: MenuItemWithLink }) {
//   return h(VPSidebarLink, { item: data, link: data.link })
// }

function linkTo(data: MenuItemWithLink, node: TreeNodeData) {
  console.log(node.isLeaf, node.level, 'node')
  if (data.link) {
    go(data.link)
  }
}
</script>

<template>
  <el-tree
    :data="sidebar"
    node-key="link"
    :props="elTreeOpt"
    :default-expand-all="true"
    :highlight-current="true"
    :indent="10"
    @node-click="linkTo"
  ></el-tree>
</template>

<style scoped>
.el-tree {
  --el-color-primary: var(--vt-c-brand);
  --el-fill-color-blank: var(--vt-c-bg);
  --el-color-primary-light-9: var(--vt-c-bg);
  --el-tree-node-hover-bg-color: var(--vt-c-bg);
  /* color: var(--vt-c-text-1); */
  --el-tree-node-content-height: 32px;
  --el-tree-text-color: var(--vt-c-text-2);
  --el-tree-expand-icon-color: var(--vt-c-text-1);
  --el-font-size-base: 14px;
  --el-font-icon-size-base: 16px;
  --el-text-color-secondary: var(--vt-c-brand-text-1);
}
::v-deep .el-tree-node .el-tree-node__label {
  overflow: hidden;
  text-overflow: ellipsis;
}
::v-deep
  .el-tree-node:hover
  > .el-tree-node__content
  > .el-tree-node__label {
  transition: all 0.25s;
  color: var(--vt-c-text-1);
}
::v-deep
  .el-tree-node.active
  > .el-tree-node__content
  > .el-tree-node__label {
  font-weight: 600;
  color: var(--vt-c-brand);
  transition: color 0.25s;
}
::v-deep .node-bold-level > .el-tree-node__content > .el-tree-node__label {
  font-weight: 600;
  color: var(--vt-c-text-1);
  font-size: var(--el-font-icon-size-base);
}
::v-deep.el-tree .el-tree-node__content > .el-tree-node__expand-icon {
  font-size: var(--el-font-icon-size-base) !important;
}
</style>
