import type { Component } from 'vue'

export interface NavItem {
  label: string
  href: string
  icon: Component
  badge?: string | null
}
