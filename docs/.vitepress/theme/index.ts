import './styles/index.css'
import { h, App } from 'vue'
import { VPTheme } from './src'
import { Router, SiteData } from 'vitepress'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
// import SecurityUpdateBtn from './components/SecurityUpdateBtn.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference,
  useAppearance
} from './components/preferences'
import SponsorsAside from './components/SponsorsAside.vue'
// import VueSchoolLink from './components/VueSchoolLink.vue'
// import WwAds from './components/WwAds.vue'
import SvgPreview from '../components/SvgPreview.vue'
import replCodeLink from '../replCodeLink'

// import Banner from './components/Banner.vue'
// import TextAd from './components/TextAd.vue'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      // banner: () => h(Banner),
      'sidebar-top': () => h(PreferenceSwitch),
      // 'sidebar-bottom': () => h(SecurityUpdateBtn),
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
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    app.provide('appearance', useAppearance())
    app.component('SvgPreview', SvgPreview)
    replCodeLink(router)
    // app.component('VueSchoolLink', VueSchoolLink)
    // app.component('TextAd', TextAd)
  }
})
