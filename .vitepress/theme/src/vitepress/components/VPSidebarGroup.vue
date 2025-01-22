<script lang="ts" setup>
import { useData, useRouter } from 'vitepress'
import { MenuItemWithLink } from '../../core'
import {
  ComponentPublicInstance,
  inject,
  nextTick,
  VNode,
  VNodeRef
} from 'vue'
// import VPSidebarLink from './VPSidebarLink.vue'
import { useSidebar } from '../composables/sidebar'
import { isActive } from '../support/utils'
import { TreeNodeData } from 'element-plus/es/components/tree/src/tree.type'

const { page } = useData()
const { go } = useRouter()
const { sidebar } = useSidebar()
const closeSideBar = inject('close-sidebar') as () => void

const updateActive = (item: any, node: TreeNodeData) => {
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

// 定义一个条件类型来提取 ref 的类型
type ExtractRefType<T> = T extends (
  ref: infer R,
  refs: Record<string, any>
) => void
  ? R
  : never

// 使用 ExtractRefType 提取 VNodeRef 中的 ref 类型
type RefType = ExtractRefType<VNodeRef>

function renderContent(
  h: (
    type: string,
    opt: { class: string; ref: VNodeRef },
    children?: string
  ) => VNode,
  { data }: { data: MenuItemWithLink }
) {
  return h(
    'span',
    {
      class: 'el-tree-node__label',
      ref: (el: RefType) => {
        if (el && el instanceof HTMLElement) {
          const isAct = isActive(page.value.relativePath, data.link)
          isAct &&
            el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
    },
    data.text
  )
}

function linkTo(data: MenuItemWithLink, node: TreeNodeData) {
  if (data.link) {
    closeSideBar()
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
    :render-content="renderContent"
  ></el-tree>
</template>

<style scoped>
.el-tree {
  --el-color-primary: var(--vt-c-brand);
  --el-fill-color-blank: transparent;
  --el-color-primary-light-9: var(--vt-c-bg);
  --el-tree-node-hover-bg-color: var(--vt-c-bg);
  --el-tree-node-content-height: 32px;
  --el-tree-text-color: var(--vt-c-text-2);
  --el-tree-expand-icon-color: var(--vt-c-text-1);
  --el-font-size-base: 14px;
  --el-font-icon-size-base: 16px;
  --el-text-color-secondary: var(--vt-c-brand-text-1);
}
:deep(.el-tree-node .el-tree-node__label) {
  overflow: hidden;
  text-overflow: ellipsis;
}
:deep(
    .el-tree-node:hover > .el-tree-node__content > .el-tree-node__label
  ) {
  transition: all 0.25s;
  color: var(--vt-c-text-1);
}
:deep(
    .el-tree-node.active > .el-tree-node__content > .el-tree-node__label
  ) {
  font-weight: 600;
  color: var(--vt-c-brand);
  transition: color 0.25s;
}
:deep(.node-bold-level > .el-tree-node__content > .el-tree-node__label) {
  font-weight: 600;
  color: var(--vt-c-text-1);
  font-size: var(--el-font-icon-size-base);
}
:deep(.el-tree .el-tree-node__content > .el-tree-node__expand-icon) {
  font-size: var(--el-font-icon-size-base) !important;
}
</style>
