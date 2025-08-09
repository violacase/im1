import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { routeConfigs } from '@/config/routes'

export const useTranslatedRoutes = () => {
  const { t } = useI18n()

  const navItems = computed(() => {
    return routeConfigs
      .filter((route) => route.showInNav)
      .map((route) => ({
        label: t(route.labelKey),
        href: route.path,
        icon: route.icon,
        badge: route.badgeKey ? t(route.badgeKey) : null,
      }))
  })

  const getTranslatedRoute = (routeName: string) => {
    const route = routeConfigs.find((r) => r.name === routeName)

    if (!route) return null

    return {
      ...route,
      label: t(route.labelKey),
      title: t(route.titleKey),
      badge: route.badgeKey ? t(route.badgeKey) : null,
    }
  }

  return {
    navItems,
    getTranslatedRoute,
  }
}
