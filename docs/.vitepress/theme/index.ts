import './styles/index.css'
import { h, App } from 'vue'
import { VPTheme } from './src'
import { Router, SiteData } from 'vitepress'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
import SecurityUpdateBtn from './components/SecurityUpdateBtn.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
import SponsorsAside from './components/SponsorsAside.vue'
// import VueSchoolLink from './components/VueSchoolLink.vue'
// import WwAds from './components/WwAds.vue'
import VPNavBarTitle from './components/VPNavBarTitle.vue'

// import Banner from './components/Banner.vue'
// import TextAd from './components/TextAd.vue'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      // banner: () => h(Banner),
      'navbar-title': () => h(VPNavBarTitle),
      'sidebar-top': () => h(PreferenceSwitch),
      'sidebar-bottom': () => h(SecurityUpdateBtn),
      'aside-mid': () => h(SponsorsAside)
      // 'aside-bottom': () => h(WwAds),
      // 'edit-link': () => 'sdddd'
    })
  },
  enhanceApp({
    app,
    router,
    siteData
  }: {
    app: App
    router: Router
    siteData: SiteData
  }) {
    console.log(router, siteData)

    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    // app.component('VueSchoolLink', VueSchoolLink)
    // app.component('TextAd', TextAd)
  }
})
