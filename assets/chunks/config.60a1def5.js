import { o as tk, y as withBase, n as nj, z as useData, m as ij, A as rt, B as iB, C as rn } from "./framework.ccd34752.js";
const data = tk();
const pending = tk(false);
const load = async () => {
  if (!pending.value) {
    pending.value = true;
    data.value = {
      special: [],
      platinum: [
        {
          name: "Bit",
          url: "https://bit.dev",
          img: "bit.svg?v2",
          priority: true
        },
        {
          name: "VueMastery",
          url: "https://www.vuemastery.com/",
          img: "vuemastery.png"
        },
        {
          name: "VueSchool",
          url: "https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1",
          img: "vueschool.png"
        },
        {
          name: "Vehikl",
          url: "https://vehikl.com/",
          img: "vehikl.png"
        },
        {
          name: "Passionate People",
          url: "https://passionatepeople.io/",
          img: "passionate_people.png"
        },
        {
          name: "Storyblok",
          url: "https://www.storyblok.com",
          img: "storyblok.png"
        },
        {
          name: "Chrome Frameworks Fund",
          url: "https://opencollective.com/2021-frameworks-fund",
          img: "chrome_frameworks_fund.png"
        },
        {
          name: "HeroDevs",
          url: "https://www.herodevs.com/support/vue",
          img: "herodevs.png"
        },
        {
          name: "JavaScript Certification",
          url: "https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS",
          img: "javascript_certification.png?v2",
          description: "Certification of competence for the JavaScript language"
        }
      ],
      gold: [
        {
          name: "Tidelift",
          url: "https://tidelift.com/subscription/npm/vue",
          img: "tidelift.png"
        },
        {
          name: "Laravel",
          url: "https://laravel.com/",
          img: "laravel.png"
        },
        {
          name: "DevExpress",
          url: "https://js.devexpress.com/",
          img: "devexpress.png"
        },
        {
          name: "LY Corporation",
          url: "https://www.lycorp.co.jp/en/",
          img: "ly_corporation.png?v2"
        },
        {
          name: "Fenêtre Online Solutions",
          url: "https://www.fenetre.nl/",
          img: "fen_tre_online_solutions.svg"
        },
        {
          name: "Ant Design Vue",
          url: "https://antdv.com",
          img: "ant_design_vue.png"
        },
        {
          name: "Crisp",
          url: "https://crisp.chat/en/",
          img: "crisp.png"
        },
        {
          name: "Localazy",
          url: "https://localazy.com/blog/how-to-localize-vuejs-app-with-vue-i18n-and-localazy?utm_source=vuejs&utm_medium=banner&utm_campaign=sponsorships_vuejs&utm_content=logo",
          img: "localazy.svg"
        },
        {
          name: "uudetkasinot.com",
          url: "https://www.uudetkasinot.com",
          img: "uudetkasinot_com.png"
        },
        {
          name: "Fathom Analytics",
          url: "https://usefathom.com/",
          img: "fathom_analytics.svg"
        },
        {
          name: "Sentry",
          url: "https://sentry.io/for/vue?utm_source=vuejs.org&utm_medium=paid-community",
          img: "sentry.png"
        },
        {
          name: "Poprey.com",
          url: "https://poprey.com/",
          img: "poprey_com.png"
        },
        {
          name: "Famoid",
          url: "https://famoid.com/",
          img: "famoid.png"
        },
        {
          name: "Certible",
          url: "https://www.certible.com",
          img: "certible.svg"
        },
        {
          name: "FORTUNE GAMES",
          url: "https://www.fortunegames.com",
          img: "fortune_games.png"
        },
        {
          name: "TBDC - Agro Software",
          url: "http://tbdc.com.br/",
          img: "tbdc___agro_software.svg"
        },
        {
          name: "Quickbooks Tool Hub",
          url: "https://qbtoolhub.com/",
          img: "quickbooks_tool_hub.png"
        },
        {
          name: "it@M",
          url: " https://opensource.muenchen.de/software/vue.js.html",
          img: "it_m.png"
        },
        {
          name: "Blastup",
          url: "https://blastup.com/buy-instagram-likes",
          img: "blastup.png"
        },
        {
          name: "VueJobs",
          url: "https://vuejobs.com/?utm_source=vuejs.com&utm_campaign=sponsor",
          img: "vuejobs.png"
        },
        {
          name: "Huly",
          url: "https://huly.io",
          img: "huly.svg"
        },
        {
          name: "Automatenspieler",
          url: "https://automatenspieler.net/",
          img: "automatenspieler.png?v2"
        },
        {
          name: "Stormlikes",
          url: "https://stormlikes.com",
          img: "stormlikes.png"
        },
        {
          name: "Superviral",
          url: "https://superviral.io/",
          img: "superviral.png"
        },
        {
          name: "Goread.io",
          url: "https://goread.io/buy-instagram-followers",
          img: "goread_io.png"
        },
        {
          name: "Celebian",
          url: "https://celebian.com/buy-tiktok-followers",
          img: "celebian.png"
        },
        {
          name: "Skweezer.net",
          url: "https://skweezer.net/",
          img: "skweezer_net.png"
        },
        {
          name: "casinorevisor.com",
          url: "https://casinorevisor.com/",
          img: "casinorevisor_com.png"
        },
        {
          name: "Buzzoid - Buy Instagram Followers",
          url: "https://buzzoid.com/buy-instagram-followers/",
          img: "buzzoid___buy_instagram_followers.png"
        },
        {
          name: "Buy Instagram Followers Twicsy",
          url: "https://twicsy.com/buy-instagram-followers",
          img: "buy_instagram_followers_twicsy.png"
        },
        {
          name: "Famety - Buy Instagram Followers",
          url: "https://www.famety.com/",
          img: "famety___buy_instagram_followers.png"
        },
        {
          name: "LambdaTest",
          url: "https://lambdatest.com/",
          img: "lambdatest.svg"
        },
        {
          name: "Jspreadsheet",
          url: "https://jspreadsheet.com/",
          img: "jspreadsheet.png"
        }
      ],
      silver: [
        {
          name: "Free Bets US",
          url: "https://freebets.us",
          img: "free_bets_us.png"
        },
        {
          name: "Doximity",
          url: "https://technology.doximity.com/",
          img: "doximity.png"
        },
        {
          name: "Codesmith",
          url: "https://codesmith.io",
          img: "codesmith.png"
        },
        {
          name: "Optimizers",
          url: "https://www.optimizers.nl",
          img: "optimizers.png"
        },
        {
          name: "FORTUNE GAMES",
          url: "https://www.fortunegames.com",
          img: "fortune_games.png"
        },
        {
          name: "Indy",
          url: "https://www.indy.fr/",
          img: "indy.png"
        },
        {
          name: "Buy Instagram Followers from SocialWick",
          url: "https://www.socialwick.com/instagram/followers",
          img: "buy_instagram_followers_from_socialwick.png"
        },
        {
          name: "Social Followers",
          url: "https://www.socialfollowers.uk/buy-tiktok-followers/",
          img: "social_followers.png"
        },
        {
          name: "Outlook India",
          url: "https://www.outlookindia.com/outlook-spotlight/casinos-not-on-gamstop-uk-news-302214/",
          img: "outlook_india.png"
        },
        {
          name: "Route Planner and Route Optimizer - Route4Me",
          url: "https://route4me.com",
          img: "route_planner_and_route_optimizer___route4me.png"
        },
        {
          name: "Betwinner Partner",
          url: "https://betwinnerpartner.com/",
          img: "betwinner_partner.png"
        },
        {
          name: "Media Mister",
          url: "https://mediamister.com/",
          img: "media_mister.png"
        }
      ],
      bronze: [
        {
          name: "Derek Pollard",
          url: "https://polyglotengineer.com/derek.pollard",
          img: "derek_pollard.png"
        },
        {
          name: "BGASoft",
          url: "https://www.bgasoft.com",
          img: "bgasoft.png"
        },
        {
          name: "RStudio",
          url: "https://rstudio.com",
          img: "rstudio.png"
        },
        {
          name: "vuejs.de - German Vue Community",
          url: "https://vuejs.de",
          img: "vuejs_de___german_vue_community.svg"
        },
        {
          name: "Liip AG",
          url: "https://www.liip.ch/en",
          img: "liip_ag.png"
        },
        {
          name: "codefortynine",
          url: "https://codefortynine.com",
          img: "codefortynine.png"
        },
        {
          name: "Routr",
          url: "www.routr.com",
          img: "routr.png"
        },
        {
          name: "Arcanite",
          url: "https://arcanite.ch",
          img: "arcanite.png"
        }
      ],
      platinum_china: [
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        }
      ]
    };
  }
};
const hashRE = /#.*$/;
const extRE = /(index)?\.(md|html)$/;
const outboundRE = /^[a-z]+:/i;
function isExternal(path) {
  return outboundRE.test(path);
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { pathname, search, hash } = new URL(url, "http://vuejs.org");
  return withBase(
    pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, ".html")}${search}${hash}`
  );
}
const inBrowser = typeof window !== "undefined";
const hashRef = tk(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  } else {
    if (normalize(matchPath) !== currentPath) {
      return false;
    }
    const hashMatch = matchPath.match(hashRE);
    if (hashMatch) {
      return hashRef.value === hashMatch[0];
    }
    return true;
  }
}
function normalize(path) {
  return decodeURI(path).replace(hashRE, "").replace(extRE, "");
}
const configSymbol = Symbol("config");
function withConfigProvider(App) {
  return nj({
    name: "VPConfigProvider",
    setup(_, { slots }) {
      const { theme } = useData();
      const config = ij(() => resolveConfig(theme.value));
      rt(configSymbol, config);
      return () => iB(App, null, slots);
    }
  });
}
function useConfig() {
  return {
    config: rn(configSymbol)
  };
}
function resolveConfig(config) {
  var _a;
  return Object.assign(
    {
      appearance: true
    },
    config,
    {
      nav: (_a = config.nav) == null ? void 0 : _a.map(normalizeMenuItem),
      sidebar: config.sidebar && normalizeSideBar(config.sidebar)
    }
  );
}
function normalizeMenuItem(item) {
  if ("link" in item) {
    return Object.assign({}, item, {
      link: normalizeLink(item.link)
    });
  } else {
    return Object.assign({}, item, { items: item.items.map(normalizeMenuItem) });
  }
}
function normalizeSideBar(sidebar) {
  if (Array.isArray(sidebar)) {
    return sidebar.map(normalizeMenuItem);
  } else {
    const ret = {};
    for (const key in sidebar) {
      ret[key] = normalizeSideBar(sidebar[key]);
    }
    return ret;
  }
}
export {
  ensureStartingSlash as e,
  isActive as i,
  load as l,
  normalizeLink as n,
  useConfig as u,
  withConfigProvider as w
};
