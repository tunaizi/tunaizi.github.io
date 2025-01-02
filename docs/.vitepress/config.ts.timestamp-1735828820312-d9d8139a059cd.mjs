// .vitepress/config.ts
import { defineConfigWithTheme } from "file:///Users/tunaizi/Project/blog/docs/node_modules/vitepress/dist/node/index.js";
import baseConfig from "file:///Users/tunaizi/Project/blog/docs/node_modules/@vue/theme/src/vitepress/config/baseConfig.js";

// .vitepress/headerMdPlugin.ts
var headerPlugin = (md) => {
  md.renderer.rules.heading_open = (tokens, i, options, env, self) => {
    for (const child of tokens[i + 1].children) {
      if (child.type === "text" && child.content.endsWith("*")) {
        child.content = child.content.replace(/\s*\*+$/, "");
      }
    }
    return self.renderToken(tokens, i, options);
  };
  const render = md.render;
  md.render = (content, env) => {
    const res = render(content, env);
    if (env && env.headers) {
      processHeaders(env.headers);
    }
    return res;
  };
};
function processHeaders(headers) {
  for (const h of headers) {
    if (h.title.endsWith("*")) {
      if (h.title.endsWith("**")) {
        h.compositionOnly = true;
      } else {
        h.optionsOnly = true;
      }
      h.title = h.title.replace(/\s*\*+$/, "");
    }
    if (h.children) {
      processHeaders(h.children);
    }
  }
}

// .vitepress/i18n/index.ts
var i18n = {
  search: "\u641C\u7D22",
  menu: "\u83DC\u5355",
  toc: "\u672C\u9875\u76EE\u5F55",
  returnToTop: "\u8FD4\u56DE\u9876\u90E8",
  appearance: "\u5916\u89C2",
  previous: "\u524D\u4E00\u7BC7",
  next: "\u4E0B\u4E00\u7BC7",
  pageNotFound: "\u9875\u9762\u672A\u627E\u5230",
  deadLink: {
    before: "\u4F60\u6253\u5F00\u4E86\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u94FE\u63A5\uFF1A",
    after: "\u3002"
  },
  deadLinkReport: {
    before: "\u4E0D\u4ECB\u610F\u7684\u8BDD\u8BF7\u63D0\u4EA4\u5230",
    link: "\u8FD9\u91CC",
    after: "\uFF0C\u6211\u4EEC\u4F1A\u8DDF\u8FDB\u4FEE\u590D\u3002"
  },
  footerLicense: {
    before: "",
    after: ""
  },
  ariaAnnouncer: {
    before: "",
    after: "\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6BD5"
  },
  ariaDarkMode: "\u5207\u6362\u6DF1\u8272\u6A21\u5F0F",
  ariaSkipToContent: "\u76F4\u63A5\u8DF3\u5230\u5185\u5BB9",
  ariaToC: "\u5F53\u524D\u9875\u9762\u7684\u76EE\u5F55",
  ariaMainNav: "\u4E3B\u5BFC\u822A",
  ariaMobileNav: "\u79FB\u52A8\u7248\u5BFC\u822A",
  ariaSidebarNav: "\u4FA7\u8FB9\u680F\u5BFC\u822A"
};
var localeLinks = [
  {
    link: "https://vuejs.org",
    text: "English",
    repo: "https://github.com/vuejs/docs"
  },
  {
    link: "https://ja.vuejs.org",
    text: "\u65E5\u672C\u8A9E",
    repo: "https://github.com/vuejs-translations/docs-ja"
  },
  {
    link: "https://ua.vuejs.org",
    text: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
    repo: "https://github.com/vuejs-translations/docs-uk"
  },
  {
    link: "https://fr.vuejs.org",
    text: "Fran\xE7ais",
    repo: "https://github.com/vuejs-translations/docs-fr"
  },
  {
    link: "https://ko.vuejs.org",
    text: "\uD55C\uAD6D\uC5B4",
    repo: "https://github.com/vuejs-translations/docs-ko"
  },
  {
    link: "https://pt.vuejs.org",
    text: "Portugu\xEAs",
    repo: "https://github.com/vuejs-translations/docs-pt"
  },
  {
    link: "https://bn.vuejs.org",
    text: "\u09AC\u09BE\u0982\u09B2\u09BE",
    repo: "https://github.com/vuejs-translations/docs-bn"
  },
  {
    link: "https://it.vuejs.org",
    text: "Italiano",
    repo: "https://github.com/vuejs-translations/docs-it"
  },
  {
    link: "https://fa.vuejs.org",
    text: "\u0641\u0627\u0631\u0633\u06CC",
    repo: "https://github.com/vuejs-translations/docs-fa"
  },
  {
    link: "https://ru.vuejs.org",
    text: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    repo: "https://github.com/translation-gang/docs-ru"
  },
  {
    link: "https://cs.vuejs.org",
    text: "\u010Ce\u0161tina",
    repo: "https://github.com/vuejs-translations/docs-cs"
  },
  {
    link: "https://zh-hk.vuejs.org",
    text: "\u7E41\u9AD4\u4E2D\u6587",
    repo: "https://github.com/vuejs-translations/docs-zh-hk"
  },
  {
    link: "/translations/",
    text: "\u5E2E\u52A9\u6211\u4EEC\u7FFB\u8BD1\uFF01",
    isTranslationsDesc: true
  }
];
var i18n_default = {
  i18n,
  localeLinks
};

// .vitepress/algolia/index.ts
var algolia = {
  indexName: "vuejs_cn2",
  appId: "UURH1MHAF7",
  apiKey: "c23eb8e7895f42daeaf2bf6f63eb4bf6",
  searchParameters: {
    facetFilters: ["version:v3"]
  },
  placeholder: "\u641C\u7D22\u6587\u6863",
  translations: {
    button: {
      buttonText: "\u641C\u7D22"
    },
    modal: {
      searchBox: {
        resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
        resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
        cancelButtonText: "\u53D6\u6D88",
        cancelButtonAriaLabel: "\u53D6\u6D88"
      },
      startScreen: {
        recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
        noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
        saveRecentSearchButtonTitle: "\u4FDD\u5B58\u5230\u641C\u7D22\u5386\u53F2",
        removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
        favoriteSearchesTitle: "\u6536\u85CF",
        removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
      },
      errorScreen: {
        titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
        helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
      },
      footer: {
        selectText: "\u9009\u62E9",
        navigateText: "\u5207\u6362",
        closeText: "\u5173\u95ED",
        searchByText: "\u641C\u7D22\u4F9B\u5E94\u5546"
      },
      noResultsScreen: {
        noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
        suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
        reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8FD9\u4E2A\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
        reportMissingResultsLinkText: "\u5411\u6211\u4EEC\u53CD\u9988"
      }
    }
  }
};
var algolia_default = algolia;

// .vitepress/navigation/nav.ts
var nav = [
  // {
  // text: '文档',
  // activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
  // items: [
  //   { text: '深度指南', link: '/guide/introduction' },
  //   { text: '互动教程', link: '/tutorial/' },
  //   { text: '示例', link: '/examples/' },
  //   { text: '快速上手', link: '/guide/quick-start' },
  //   { text: '风格指南', link: '/style-guide/' },
  //   { text: '术语表', link: '/glossary/' },
  //   { text: '错误码参照表', link: '/error-reference/' },
  //   {
  //     text: 'Vue 2 文档',
  //     link: 'https://v2.cn.vuejs.org'
  //   },
  //   {
  //     text: '从 Vue 2 迁移',
  //     link: 'https://v3-migration.vuejs.org/'
  //   }
  // ]
  // },
  // {
  //   text: 'API',
  //   activeMatch: `^/api/`,
  //   link: '/api/'
  // },
  {
    text: "\u6240\u6709\u6587\u7AE0",
    link: "/start-docs/",
    activeMatch: `^/start-docs/`
  }
];

// .vitepress/navigation/start-docs.json
var start_docs_default = {
  "/start-docs/index.md/": [],
  "/start-docs/create-blog.md/": [],
  "/start-docs/studyhard/": [
    {
      text: "\u63A8\u8350\u9875\u5BFC\u822A",
      items: [],
      link: "/start-docs/studyhard/README"
    },
    {
      text: "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5",
      items: [
        {
          text: "\u94FE\u8868",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u94FE\u8868"
        },
        {
          text: "\u9012\u5F52\u548C\u5206\u6CBB",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u9012\u5F52\u548C\u5206\u6CBB"
        },
        {
          text: "# DFS \u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u548C BFS \u5E7F\u5EA6\u4F18\u5148\u904D\u5386",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u6DF1\u5EA6\u3001\u5E7F\u5EA6\u4F18\u5148\u904D\u5386"
        },
        {
          text: "\u6811&\u4E8C\u53C9\u6811&\u4E8C\u53C9\u641C\u7D22\u6811",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u6811"
        },
        {
          text: "\u6570\u7EC4-\u6570\u636E\u7ED3\u6784",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u6570\u7EC4"
        },
        {
          text: "\u6392\u5E8F\u7B97\u6CD5\u6C47\u603B",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u6392\u5E8F"
        },
        {
          text: "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u5806\u6808\u548C\u961F\u5217"
        },
        {
          text: "\u54C8\u5E0C\u8868 map&set",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u54C8\u5E0C\u8868"
        },
        {
          text: "\u52A8\u6001\u89C4\u5212\u548C\u8D2A\u5FC3\u7B97\u6CD5",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u52A8\u6001\u89C4\u5212\u548C\u8D2A\u5FC3\u7B97\u6CD5"
        },
        {
          text: "\u5FEB\u8BFB\u5165\u53E3",
          items: [],
          link: "/start-docs/studyhard/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/blog"
        }
      ],
      collapsed: false
    },
    {
      text: "\u524D\u7AEF\u57FA\u7840\u4F53\u7CFB",
      items: [
        {
          text: "\u524D\u7AEF\u57FA\u7840\u77E5\u8BC6\u4F53\u7CFB",
          items: [],
          link: "/start-docs/studyhard/\u524D\u7AEF\u57FA\u7840\u4F53\u7CFB/blog"
        }
      ],
      collapsed: false
    },
    {
      text: "z\u9762\u8BD5\u771F\u9898",
      items: [
        {
          text: "JS \u5E38\u7528\u903B\u8F91\u9898",
          items: [],
          link: "/start-docs/studyhard/z\u9762\u8BD5\u771F\u9898/\u5E38\u8003\u7BC7"
        },
        {
          text: "JS \u5E38\u7528\u65B9\u6CD5\u539F\u7406\u5B9E\u73B0",
          items: [],
          link: "/start-docs/studyhard/z\u9762\u8BD5\u771F\u9898/\u539F\u7406\u7BC7"
        },
        {
          text: "# \u5168\u90E8\u9762\u8BD5\u9898",
          items: [],
          link: "/start-docs/studyhard/z\u9762\u8BD5\u771F\u9898/questions"
        }
      ],
      collapsed: false
    },
    {
      text: "webpack",
      items: [
        {
          text: "webpack",
          items: [],
          link: "/start-docs/studyhard/webpack/blog"
        }
      ],
      collapsed: false
    },
    {
      text: "css",
      items: [
        {
          text: "CSS \u5E38\u89C1\u95EE\u9898",
          items: [],
          link: "/start-docs/studyhard/css/blog"
        }
      ],
      collapsed: false
    },
    {
      text: "cli",
      items: [
        {
          text: "\u5B66\u4E60\u5236\u4F5C\u9879\u76EECLI\u8F68\u8FF9",
          items: [],
          link: "/start-docs/studyhard/cli/blog"
        }
      ],
      collapsed: false
    },
    {
      text: "1\u4E13\u9898",
      items: [
        {
          text: "\u524D\u7AEF\u957F\u5217\u8868\u6E32\u67D3\u4F18\u5316",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u957F\u5217\u8868\u6E32\u67D3\u4F18\u5316"
        },
        {
          text: "# \u8BF7\u6C42\u573A\u666F\u9898\u76EE",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u8BF7\u6C42\u5E76\u884C\u4E32\u884C\u95EE\u9898\u53CA\u590D\u7528"
        },
        {
          text: "# \u5E38\u7528\u8BBE\u8BA1\u6A21\u5F0F",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u8BBE\u8BA1\u6A21\u5F0F"
        },
        {
          text: "\u89C2\u5BDF\u8005\u6A21\u5F0F\u548C\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u89C2\u5BDF\u8005\u6A21\u5F0F\u53CA\u53D1\u5E03\u8BA2\u9605\u8005\u6A21\u5F0F"
        },
        {
          text: "\u9632\u6296 And \u8282\u6D41",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u8282\u6D41-\u9632\u6296"
        },
        {
          text: "\u7EAF\u51FD\u6570",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u7EAF\u51FD\u6570\u4E0E\u526F\u4F5C\u7528\u51FD\u6570"
        },
        {
          text: "# es6\u4E2D\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570"
        },
        {
          text: "\u6A21\u5757\u5316",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u6A21\u5757\u5316\u53CA\u6253\u5305\u6A21\u5F0F"
        },
        {
          text: "\u68C0\u6D4B\u662F\u4E0D\u662F\u6570\u7EC4\u7684\u65B9\u5F0F",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u68C0\u6D4B\u6570\u7EC4\u7C7B\u578B\u7684\u51E0\u79CD\u65B9\u5F0F"
        },
        {
          text: "# \u67EF\u91CC\u5316 currying",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u67EF\u91CC\u5316"
        },
        {
          text: "# \u5355\u4F8B\u6A21\u5F0F",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u5355\u4F8B\u6A21\u5F0F\u548C\u5DE5\u5382\u6A21\u5F0F"
        },
        {
          text: "\u5E38\u89C1\u7684 Web \u653B\u51FB",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u524D\u7AEF\u7F51\u7EDC\u5B89\u5168"
        },
        {
          text: "\u4ECE\u4E00\u4E2A url \u5230\u9875\u9762\u5C55\u793A\u7684\u5168\u6D41\u7A0B",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/\u4ECEURL\u5230\u663E\u793A\u7F51\u9875\u7684\u5168\u8FC7\u7A0B"
        },
        {
          text: "Vuex / Redux",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/vuex\u6216redux"
        },
        {
          text: "hashchange \u548C h5 history popstate",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/vue-router\u6216react-router"
        },
        {
          text: "# setTimeout",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/setTimeout"
        },
        {
          text: "# JS\u4E0ENative\u901A\u4FE1",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/js\u4E0Enative\u901A\u4FE1"
        },
        {
          text: "class\u4E0E\u6784\u9020\u51FD\u6570",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/class\u4E0E\u51FD\u6570"
        },
        {
          text: "# bind & call & apply",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/bind&call&apply"
        },
        {
          text: "Promise/A+",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/Promise\u539F\u7406\u53CA\u5B9E\u73B0"
        },
        {
          text: "NPM\u5305\u7BA1\u7406\u673A\u5236",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/NPM\u5305\u7BA1\u7406"
        },
        {
          text: "JS\u5F15\u64CE\u7684\u4E24\u79CD\u67E5\u627E\u65B9\u5F0F",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/LHS\u548CRHS"
        },
        {
          text: "\u7EE7\u627F\u7684\u51E0\u79CD\u7C7B\u578B",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/JS\u7EE7\u627F"
        },
        {
          text: "this\u6307\u5411",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/JS\u7684this\u5173\u952E\u5B57"
        },
        {
          text: "Object",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/JS\u5BF9\u8C61\u62F7\u8D1D\u53CA\u6DF1\u62F7\u8D1D"
        },
        {
          text: "# \u5783\u573E\u56DE\u6536",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/JS\u5783\u573E\u56DE\u6536\u673A\u5236"
        },
        {
          text: "\u7BA1\u7406\u4F5C\u7528\u57DF",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/JS\u4F5C\u7528\u57DF"
        },
        {
          text: "new \u5173\u952E\u5B57",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/JS\u4E2D\u7684new\u5E72\u4E86\u4EC0\u4E48"
        },
        {
          text: "TCP/IP",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/HTTP(s)\u53CA\u7F13\u5B58\u673A\u5236"
        },
        {
          text: "# event bus",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/EventBus"
        },
        {
          text: "\u600E\u4E48\u753B 1px \u50CF\u7D20\u7EBF",
          items: [],
          link: "/start-docs/studyhard/1\u4E13\u9898/1PX"
        }
      ],
      collapsed: false
    }
  ]
};

// .vitepress/navigation/sidebar.ts
var sidebar = Object.assign(
  start_docs_default,
  {}
);

// .vitepress/navigation/index.ts
var nav2 = nav;
var sidebar2 = sidebar;

// .vitepress/autoSideBar.ts
import glob from "file:///Users/tunaizi/Project/blog/docs/node_modules/glob/dist/mjs/index.js";
import fs from "fs";
import path from "path";
import { normalizePath } from "file:///Users/tunaizi/Project/blog/docs/node_modules/vite/dist/node/index.js";
function writeTo(jsonString, writeToPath) {
  writeToPath && fs.writeFile(joinToCwd(writeToPath), jsonString, "utf8", (err) => {
    if (err)
      throw new Error(JSON.stringify(err));
  });
}
function joinToCwd(...str) {
  return path.posix.join(process.cwd(), ...str);
}
var titleCache = {};
function VitePluginAutoSidebar(options = {}) {
  const opts = normalizeOptions(options);
  return {
    enforce: "post",
    name: "VitePluginAutoSidebar",
    config(config) {
      var _a, _b;
      opts.mergeSidebar(getSidebarConfig(opts), config);
      if (opts.wrireToJson) {
        console.log(config.server);
        const cfg = {
          server: {
            watch: { ignore: [] }
          }
        };
        if (!Array.isArray((_b = (_a = config.server) == null ? void 0 : _a.watch) == null ? void 0 : _b.ignore)) {
          Object.assign(config, cfg);
        }
        config.server.watch.ignore.push(joinToCwd(opts.wrireToJson));
      }
      return config;
    },
    configureServer({ watcher, restart }) {
      const fsWatcher = watcher.add("*.md");
      fsWatcher.on(
        "all",
        (event, filePath) => {
          if (opts.wrireToJson && joinToCwd(opts.wrireToJson) === filePath) {
            console.log("\u63D2\u4EF6\u4ECE\u65B0\u8FD0\u884C\u3002\u3002\u3002\u3002");
            return;
          }
          if (event === "addDir")
            return;
          if (event === "unlinkDir")
            return;
          if (event === "add")
            return;
          if (event === "unlink") {
            restart();
            return;
          }
          if (event === "change") {
            const title = matchTitle(filePath);
            const route = getRoute(opts.root, filePath);
            if (!route || !title)
              return;
            if (title === titleCache[route])
              return;
            restart();
            return;
          }
        }
      );
    }
  };
}
function getSidebarConfig(opts) {
  const docsPath = opts.docs;
  const paths = glob.sync("**/*.md", {
    cwd: docsPath,
    ignore: opts.ignores
  });
  const basePath = path.relative(opts.root, docsPath);
  const sidebar3 = {};
  paths.forEach((fullPath) => {
    const segments = fullPath.split("/");
    const absolutePath = path.resolve(docsPath, fullPath);
    if (segments.length === 0)
      return;
    const topLevel = basePath ? `/${basePath}/${segments.shift()}/` : `/${segments.shift()}/`;
    if (topLevel.endsWith(".md"))
      return;
    if (!sidebar3[topLevel]) {
      sidebar3[topLevel] = [];
    }
    let currentLevel = sidebar3[topLevel];
    segments.forEach((segment) => {
      let curConfig = currentLevel.find((item) => item.text === segment);
      if (!curConfig) {
        const itemConfig = {
          text: "",
          items: []
        };
        if (segment.endsWith(".md")) {
          const route = getRoute(opts.root, absolutePath);
          itemConfig.text = matchTitle(absolutePath);
          itemConfig.link = route;
          titleCache[route] = itemConfig.text;
        } else {
          itemConfig.text = segment;
          itemConfig.collapsed = false;
          itemConfig.items = [];
        }
        currentLevel.push(itemConfig);
        curConfig = itemConfig;
      }
      currentLevel = curConfig.items || [];
    });
  });
  if (opts.sidebarResolved) {
    opts.sidebarResolved(sidebar3);
  }
  return sidebar3;
}
function matchTitle(p) {
  const content = fs.readFileSync(p, "utf-8");
  return ((content.match(/^#(.*)\n?/) || [])[1] || "").trim();
}
function desuffix(path3) {
  return path3.replace(/(\.md|\.md\/)$/, "");
}
function getRoute(root, absPath) {
  return desuffix("/" + path.posix.relative(root, absPath));
}
function normalizeOptions(options) {
  let root = joinToCwd(options.root || "");
  if (!root) {
    const files = glob.sync("**/.vitepress/config.*", {
      cwd: process.cwd(),
      dot: true,
      ignore: ["node_modules/**/*"]
    });
    if (files.length !== 1) {
      console.error("[WARNING] \u627E\u5230\u591A\u4E2A .vitepress/config \u914D\u7F6E\u6587\u4EF6", files);
    }
    root = path.posix.resolve(files[0], "../..");
  }
  return {
    root,
    docs: joinToCwd(options.docs || root),
    ignores: (options.ignores ?? []).map(normalizePath),
    wrireToJson: normalizePath(options.wrireToJson || ""),
    sidebarResolved: options.sidebarResolved ?? function() {
    },
    mergeSidebar: options.mergeSidebar ?? function(sidebar3, config) {
      const sidebarDefault = (
        // @ts-ignore
        config.vitepress.site.themeConfig.sidebar || {}
      );
      if (typeof sidebarDefault === "object") {
        writeTo(JSON.stringify(sidebar3, null, 2), options.wrireToJson);
        config.vitepress.site.themeConfig.sidebar = Object.assign(
          sidebarDefault,
          sidebar3
        );
      }
      return config;
    }
  };
}

// .vitepress/viteSetting.ts
var viteSetting_default = {
  define: {
    __VUE_OPTIONS_API__: false
  },
  optimizeDeps: {
    include: ["gsap", "dynamics.js"],
    exclude: ["@vue/repl"]
  },
  // @ts-ignore
  ssr: {
    external: ["@vue/repl"]
  },
  server: {
    host: true,
    fs: {
      // for when developing with locally linked theme
      // 用于在本地链接主题时进行开发
      allow: ["../.."]
    }
  },
  build: {
    chunkSizeWarningLimit: Infinity
  },
  json: {
    stringify: true
  },
  plugins: [
    {
      name: "vite-plugin-vitepress-start",
      config(config, env) {
        const isDev = env.mode === "development";
        config.base = isDev ? "/" : "/blog";
        return config;
      }
    },
    VitePluginAutoSidebar({
      root: "/src/",
      docs: "/src/start-docs/",
      wrireToJson: ".vitepress/navigation/start-docs.json"
    })
  ]
};

// .vitepress/inlined-scripts/index.ts
import fs2 from "fs";
import path2 from "path";
var __vite_injected_original_dirname = "/Users/tunaizi/Project/blog/docs/.vitepress/inlined-scripts";
var inlinedScripts = [
  [
    "script",
    {},
    fs2.readFileSync(
      path2.resolve(__vite_injected_original_dirname, "./restorePreference.js"),
      "utf-8"
    )
  ],
  [
    "script",
    {},
    fs2.readFileSync(path2.resolve(__vite_injected_original_dirname, "./uwu.js"), "utf-8")
  ]
  // [
  //   'script',
  //   { // 添加广告 万维广告联盟
  //     async: 'true',
  //     src: 'https://cdn.wwads.cn/js/makemoney.js'
  //   },
  // ]
  // [
  //   'script',
  //   {
  //     src: 'https://cdn.usefathom.com/script.js',
  //     'data-site': 'ZPMMDSYA',
  //     'data-spa': 'auto',
  //     defer: ''
  //   }
  // ],
  // [
  //   'script',
  //   {
  //     src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
  //     async: 'true'
  //   }
  // ]
];

// .vitepress/config.ts
var config_default = defineConfigWithTheme({
  extends: baseConfig,
  sitemap: {
    hostname: "https://cn.vuejs.org"
  },
  lang: "zh-CN",
  title: "BLOG",
  description: "",
  srcDir: "src",
  srcExclude: ["tutorial/**/description.md"],
  head: [
    ["meta", { name: "theme-color", content: "#f72424" }],
    ["meta", { property: "og:url", content: "https://vuejs.org/" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Vue.js" }],
    // [
    //   'meta',
    //   {
    //     property: 'og:description',
    //     content: 'dffd'
    //   }
    // ],
    // [
    //   'meta',
    //   {
    //     property: 'og:image',
    //     content: 'https://vuejs.org/images/logo.png'
    //   }
    // ],
    [
      "link",
      {
        rel: "icon",
        href: "/images/logo.png"
      }
    ],
    ["meta", { name: "twitter:site", content: "@vuejs" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    // [
    //   'link',
    //   {
    //     rel: 'preconnect',
    //     href: 'https://sponsors.vuejs.org'
    //   }
    // ],
    ...inlinedScripts
  ],
  themeConfig: {
    nav: nav2,
    sidebar: sidebar2,
    ...i18n_default,
    algolia: algolia_default,
    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },
    socialLinks: [{ icon: "github", link: "https://github.com/tunaizi/" }],
    editLink: {
      repo: "tunaizi/blog",
      text: "\u5728 github \u4E0A\u7F16\u8F91\u672C\u9875"
    },
    footer: {
      license: {
        text: "\u7248\u6743\u58F0\u660E",
        link: "Sdfsdfds"
      },
      copyright: (
        // '本中文文档采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议  (CC BY-NC-SA 4.0) 进行许可。'
        "dfgdfg----sdfgsf"
      )
    }
  },
  markdown: {
    theme: "github-dark",
    config(md) {
      md.use(headerPlugin);
    }
  },
  vite: viteSetting_default
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiLCAiLnZpdGVwcmVzcy9oZWFkZXJNZFBsdWdpbi50cyIsICIudml0ZXByZXNzL2kxOG4vaW5kZXgudHMiLCAiLnZpdGVwcmVzcy9hbGdvbGlhL2luZGV4LnRzIiwgIi52aXRlcHJlc3MvbmF2aWdhdGlvbi9uYXYudHMiLCAiLnZpdGVwcmVzcy9uYXZpZ2F0aW9uL3N0YXJ0LWRvY3MuanNvbiIsICIudml0ZXByZXNzL25hdmlnYXRpb24vc2lkZWJhci50cyIsICIudml0ZXByZXNzL25hdmlnYXRpb24vaW5kZXgudHMiLCAiLnZpdGVwcmVzcy9hdXRvU2lkZUJhci50cyIsICIudml0ZXByZXNzL3ZpdGVTZXR0aW5nLnRzIiwgIi52aXRlcHJlc3MvaW5saW5lZC1zY3JpcHRzL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWdXaXRoVGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnXG5pbXBvcnQgdHlwZSB7IENvbmZpZyBhcyBUaGVtZUNvbmZpZyB9IGZyb20gJ0B2dWUvdGhlbWUnXG5pbXBvcnQgYmFzZUNvbmZpZyBmcm9tICdAdnVlL3RoZW1lL2NvbmZpZydcbmltcG9ydCB7IGhlYWRlclBsdWdpbiB9IGZyb20gJy4vaGVhZGVyTWRQbHVnaW4nXG5pbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nXG5pbXBvcnQgYWxnb2xpYSBmcm9tICcuL2FsZ29saWEnXG5pbXBvcnQgeyBuYXYsIHNpZGViYXIgfSBmcm9tICcuL25hdmlnYXRpb24nXG5pbXBvcnQgdml0ZVNldHRpZyBmcm9tICcuL3ZpdGVTZXR0aW5nJ1xuaW1wb3J0IHsgaW5saW5lZFNjcmlwdHMgfSBmcm9tICcuL2lubGluZWQtc2NyaXB0cydcbi8vIGltcG9ydCB7IHRleHRBZFBsdWdpbiB9IGZyb20gJy4vdGV4dEFkTWRQbHVnaW4nXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZ1dpdGhUaGVtZTxUaGVtZUNvbmZpZz4oe1xuICBleHRlbmRzOiBiYXNlQ29uZmlnLFxuICBzaXRlbWFwOiB7XG4gICAgaG9zdG5hbWU6ICdodHRwczovL2NuLnZ1ZWpzLm9yZydcbiAgfSxcbiAgbGFuZzogJ3poLUNOJyxcbiAgdGl0bGU6ICdCTE9HJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBzcmNEaXI6ICdzcmMnLFxuICBzcmNFeGNsdWRlOiBbJ3R1dG9yaWFsLyoqL2Rlc2NyaXB0aW9uLm1kJ10sXG4gIGhlYWQ6IFtcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjZjcyNDI0JyB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogJ2h0dHBzOi8vdnVlanMub3JnLycgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiAnd2Vic2l0ZScgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogJ1Z1ZS5qcycgfV0sXG4gICAgLy8gW1xuICAgIC8vICAgJ21ldGEnLFxuICAgIC8vICAge1xuICAgIC8vICAgICBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJyxcbiAgICAvLyAgICAgY29udGVudDogJ2RmZmQnXG4gICAgLy8gICB9XG4gICAgLy8gXSxcbiAgICAvLyBbXG4gICAgLy8gICAnbWV0YScsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHByb3BlcnR5OiAnb2c6aW1hZ2UnLFxuICAgIC8vICAgICBjb250ZW50OiAnaHR0cHM6Ly92dWVqcy5vcmcvaW1hZ2VzL2xvZ28ucG5nJ1xuICAgIC8vICAgfVxuICAgIC8vIF0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAge1xuICAgICAgICByZWw6ICdpY29uJyxcbiAgICAgICAgaHJlZjogJy9pbWFnZXMvbG9nby5wbmcnXG4gICAgICB9XG4gICAgXSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0d2l0dGVyOnNpdGUnLCBjb250ZW50OiAnQHZ1ZWpzJyB9XSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAnc3VtbWFyeScgfV0sXG4gICAgLy8gW1xuICAgIC8vICAgJ2xpbmsnLFxuICAgIC8vICAge1xuICAgIC8vICAgICByZWw6ICdwcmVjb25uZWN0JyxcbiAgICAvLyAgICAgaHJlZjogJ2h0dHBzOi8vc3BvbnNvcnMudnVlanMub3JnJ1xuICAgIC8vICAgfVxuICAgIC8vIF0sXG4gICAgLi4uaW5saW5lZFNjcmlwdHNcbiAgXSxcblxuICB0aGVtZUNvbmZpZzoge1xuICAgIG5hdixcbiAgICBzaWRlYmFyLFxuICAgIC4uLmkxOG4sXG4gICAgYWxnb2xpYSxcbiAgICAvLyBjYXJib25BZHM6IHtcbiAgICAvLyAgIGNvZGU6ICdDRUJEVDI3WScsXG4gICAgLy8gICBwbGFjZW1lbnQ6ICd2dWVqc29yZydcbiAgICAvLyB9LFxuXG4gICAgc29jaWFsTGlua3M6IFt7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3R1bmFpemkvJyB9XSxcblxuICAgIGVkaXRMaW5rOiB7XG4gICAgICByZXBvOiAndHVuYWl6aS9ibG9nJyxcbiAgICAgIHRleHQ6ICdcdTU3MjggZ2l0aHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NjcyQ1x1OTg3NSdcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBsaWNlbnNlOiB7XG4gICAgICAgIHRleHQ6ICdcdTcyNDhcdTY3NDNcdTU4RjBcdTY2MEUnLFxuICAgICAgICBsaW5rOiAnU2Rmc2RmZHMnXG4gICAgICB9LFxuICAgICAgY29weXJpZ2h0OlxuICAgICAgICAvLyAnXHU2NzJDXHU0RTJEXHU2NTg3XHU2NTg3XHU2ODYzXHU5MUM3XHU3NTI4IFx1NzdFNVx1OEJDNlx1NTE3MVx1NEVBQlx1N0Y3Mlx1NTQwRC1cdTk3NUVcdTU1NDZcdTRFMUFcdTYwMjdcdTRGN0ZcdTc1MjgtXHU3NkY4XHU1NDBDXHU2NUI5XHU1RjBGXHU1MTcxXHU0RUFCIDQuMCBcdTU2RkRcdTk2NDVcdThCQjhcdTUzRUZcdTUzNEZcdThCQUUgIChDQyBCWS1OQy1TQSA0LjApIFx1OEZEQlx1ODg0Q1x1OEJCOFx1NTNFRlx1MzAwMidcbiAgICAgICAgJ2RmZ2RmZy0tLS1zZGZnc2YnXG4gICAgfVxuICB9LFxuXG4gIG1hcmtkb3duOiB7XG4gICAgdGhlbWU6ICdnaXRodWItZGFyaycsXG4gICAgY29uZmlnKG1kKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIG1kLnVzZShoZWFkZXJQbHVnaW4pXG4gICAgICAvLyAudXNlKHRleHRBZFBsdWdpbilcbiAgICB9XG4gIH0sXG5cbiAgdml0ZTogdml0ZVNldHRpZ1xufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9oZWFkZXJNZFBsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdHVuYWl6aS9Qcm9qZWN0L2Jsb2cvZG9jcy8udml0ZXByZXNzL2hlYWRlck1kUGx1Z2luLnRzXCI7LyoqXG4gKiBBIG1hcmtkb3duLWl0IHBsdWdpbiB0byBzdXBwb3J0IGN1c3RvbSBoZWFkZXIgbWV0YWRhdGFcbiAqIEhlYWRlcnMgdGhhdCBlbmQgd2l0aCAqIGFyZSBPcHRpb25zIEFQSSBvbmx5XG4gKiBIZWFkZXJzIHRoYXQgZW5kIHdpdGggKiogYXJlIENvbXBvc2l0aW9uIEFQSSBvbmx5XG4gKiBUaGlzIHBsdWdpbiBzdHJpcHMgdGhlIG1hcmtlcnMgYW5kIGF1Z21lbnRzIHRoZSBleHRyYWN0ZWQgaGVhZGVyIGRhdGEsXG4gKiB3aGljaCBjYW4gYmUgdGhlbiB1c2VkIGJ5IHRoZSB0aGVtZSB0byBmaWx0ZXIgaGVhZGVycy5cbiAqXG4gKiBUT0RPOiB3ZSB3aWxsIGxpa2VseSBhbHNvIG5lZWQgc3BlY2lhbCBzeW50YXggZm9yIHByZXNlcnZpbmcgdGhlIHNhbWUgYW5jaG9yXG4gKiBsaW5rcyBhY3Jvc3MgdHJhbnNsYXRpb25zIHNpbWlsYXIgdG8gdGhlIG9uZSBhdFxuICogaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy9kb2NzLWNuL3RyZWUvbWFpbi8udml0ZXByZXNzL21hcmtkb3duLWl0LWN1c3RvbS1hbmNob3JcbiAqL1xuXG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tICdtYXJrZG93bi1pdCdcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ3ZpdGVwcmVzcydcblxuZXhwb3J0IGludGVyZmFjZSBBdWdtZW50ZWRIZWFkZXIgZXh0ZW5kcyBIZWFkZXIge1xuICBjb21wb3NpdGlvbk9ubHk/OiBib29sZWFuXG4gIG9wdGlvbnNPbmx5PzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgaGVhZGVyUGx1Z2luID0gKG1kOiBNYXJrZG93bkl0KSA9PiB7XG4gIG1kLnJlbmRlcmVyLnJ1bGVzLmhlYWRpbmdfb3BlbiA9ICh0b2tlbnMsIGksIG9wdGlvbnMsIGVudiwgc2VsZikgPT4ge1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdG9rZW5zW2kgKyAxXS5jaGlsZHJlbiEpIHtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSAndGV4dCcgJiYgY2hpbGQuY29udGVudC5lbmRzV2l0aCgnKicpKSB7XG4gICAgICAgIGNoaWxkLmNvbnRlbnQgPSBjaGlsZC5jb250ZW50LnJlcGxhY2UoL1xccypcXCorJC8sICcnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZi5yZW5kZXJUb2tlbih0b2tlbnMsIGksIG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCByZW5kZXIgPSBtZC5yZW5kZXJcbiAgbWQucmVuZGVyID0gKGNvbnRlbnQsIGVudikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHJlbmRlcihjb250ZW50LCBlbnYpXG5cbiAgICBpZiAoZW52ICYmIGVudi5oZWFkZXJzKSB7XG4gICAgICBwcm9jZXNzSGVhZGVycyhlbnYuaGVhZGVycylcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcnMoaGVhZGVyczogQXVnbWVudGVkSGVhZGVyW10pIHtcbiAgZm9yIChjb25zdCBoIG9mIGhlYWRlcnMpIHtcbiAgICBpZiAoaC50aXRsZS5lbmRzV2l0aCgnKicpKSB7XG4gICAgICBpZiAoaC50aXRsZS5lbmRzV2l0aCgnKionKSkge1xuICAgICAgICBoLmNvbXBvc2l0aW9uT25seSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGgub3B0aW9uc09ubHkgPSB0cnVlXG4gICAgICB9XG4gICAgICBoLnRpdGxlID0gaC50aXRsZS5yZXBsYWNlKC9cXHMqXFwqKyQvLCAnJylcbiAgICB9XG4gICAgaWYgKGguY2hpbGRyZW4pIHtcbiAgICAgIHByb2Nlc3NIZWFkZXJzKGguY2hpbGRyZW4pXG4gICAgfVxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3MvaTE4blwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9pMThuL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3MvaTE4bi9pbmRleC50c1wiO2ltcG9ydCB0eXBlIHsgQ29uZmlnIGFzIFRoZW1lQ29uZmlnIH0gZnJvbSAnQHZ1ZS90aGVtZSdcbmNvbnN0IGkxOG46IFRoZW1lQ29uZmlnWydpMThuJ10gPSB7XG4gIHNlYXJjaDogJ1x1NjQxQ1x1N0QyMicsXG4gIG1lbnU6ICdcdTgzRENcdTUzNTUnLFxuICB0b2M6ICdcdTY3MkNcdTk4NzVcdTc2RUVcdTVGNTUnLFxuICByZXR1cm5Ub1RvcDogJ1x1OEZENFx1NTZERVx1OTg3Nlx1OTBFOCcsXG4gIGFwcGVhcmFuY2U6ICdcdTU5MTZcdTg5QzInLFxuICBwcmV2aW91czogJ1x1NTI0RFx1NEUwMFx1N0JDNycsXG4gIG5leHQ6ICdcdTRFMEJcdTRFMDBcdTdCQzcnLFxuICBwYWdlTm90Rm91bmQ6ICdcdTk4NzVcdTk3NjJcdTY3MkFcdTYyN0VcdTUyMzAnLFxuICBkZWFkTGluazoge1xuICAgIGJlZm9yZTogJ1x1NEY2MFx1NjI1M1x1NUYwMFx1NEU4Nlx1NEUwMFx1NEUyQVx1NEUwRFx1NUI1OFx1NTcyOFx1NzY4NFx1OTRGRVx1NjNBNVx1RkYxQScsXG4gICAgYWZ0ZXI6ICdcdTMwMDInXG4gIH0sXG4gIGRlYWRMaW5rUmVwb3J0OiB7XG4gICAgYmVmb3JlOiAnXHU0RTBEXHU0RUNCXHU2MTBGXHU3Njg0XHU4QkREXHU4QkY3XHU2M0QwXHU0RUE0XHU1MjMwJyxcbiAgICBsaW5rOiAnXHU4RkQ5XHU5MUNDJyxcbiAgICBhZnRlcjogJ1x1RkYwQ1x1NjIxMVx1NEVFQ1x1NEYxQVx1OERERlx1OEZEQlx1NEZFRVx1NTkwRFx1MzAwMidcbiAgfSxcbiAgZm9vdGVyTGljZW5zZToge1xuICAgIGJlZm9yZTogJycsXG4gICAgYWZ0ZXI6ICcnXG4gIH0sXG4gIGFyaWFBbm5vdW5jZXI6IHtcbiAgICBiZWZvcmU6ICcnLFxuICAgIGFmdGVyOiAnXHU1REYyXHU3RUNGXHU1MkEwXHU4RjdEXHU1QjhDXHU2QkQ1J1xuICB9LFxuICBhcmlhRGFya01vZGU6ICdcdTUyMDdcdTYzNjJcdTZERjFcdTgyNzJcdTZBMjFcdTVGMEYnLFxuICBhcmlhU2tpcFRvQ29udGVudDogJ1x1NzZGNFx1NjNBNVx1OERGM1x1NTIzMFx1NTE4NVx1NUJCOScsXG4gIGFyaWFUb0M6ICdcdTVGNTNcdTUyNERcdTk4NzVcdTk3NjJcdTc2ODRcdTc2RUVcdTVGNTUnLFxuICBhcmlhTWFpbk5hdjogJ1x1NEUzQlx1NUJGQ1x1ODIyQScsXG4gIGFyaWFNb2JpbGVOYXY6ICdcdTc5RkJcdTUyQThcdTcyNDhcdTVCRkNcdTgyMkEnLFxuICBhcmlhU2lkZWJhck5hdjogJ1x1NEZBN1x1OEZCOVx1NjgwRlx1NUJGQ1x1ODIyQSdcbn1cblxuZXhwb3J0IGNvbnN0IGxvY2FsZUxpbmtzOiBUaGVtZUNvbmZpZ1snbG9jYWxlTGlua3MnXSA9IFtcbiAge1xuICAgIGxpbms6ICdodHRwczovL3Z1ZWpzLm9yZycsXG4gICAgdGV4dDogJ0VuZ2xpc2gnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvZG9jcydcbiAgfSxcbiAge1xuICAgIGxpbms6ICdodHRwczovL2phLnZ1ZWpzLm9yZycsXG4gICAgdGV4dDogJ1x1NjVFNVx1NjcyQ1x1OEE5RScsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy10cmFuc2xhdGlvbnMvZG9jcy1qYSdcbiAgfSxcbiAge1xuICAgIGxpbms6ICdodHRwczovL3VhLnZ1ZWpzLm9yZycsXG4gICAgdGV4dDogJ1x1MDQyM1x1MDQzQVx1MDQ0MFx1MDQzMFx1MDQ1N1x1MDQzRFx1MDQ0MVx1MDQ0Q1x1MDQzQVx1MDQzMCcsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy10cmFuc2xhdGlvbnMvZG9jcy11aydcbiAgfSxcbiAge1xuICAgIGxpbms6ICdodHRwczovL2ZyLnZ1ZWpzLm9yZycsXG4gICAgdGV4dDogJ0ZyYW5cdTAwRTdhaXMnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMtdHJhbnNsYXRpb25zL2RvY3MtZnInXG4gIH0sXG4gIHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9rby52dWVqcy5vcmcnLFxuICAgIHRleHQ6ICdcdUQ1NUNcdUFENkRcdUM1QjQnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMtdHJhbnNsYXRpb25zL2RvY3Mta28nXG4gIH0sXG4gIHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9wdC52dWVqcy5vcmcnLFxuICAgIHRleHQ6ICdQb3J0dWd1XHUwMEVBcycsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy10cmFuc2xhdGlvbnMvZG9jcy1wdCdcbiAgfSxcbiAge1xuICAgIGxpbms6ICdodHRwczovL2JuLnZ1ZWpzLm9yZycsXG4gICAgdGV4dDogJ1x1MDlBQ1x1MDlCRVx1MDk4Mlx1MDlCMlx1MDlCRScsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy10cmFuc2xhdGlvbnMvZG9jcy1ibidcbiAgfSxcbiAge1xuICAgIGxpbms6ICdodHRwczovL2l0LnZ1ZWpzLm9yZycsXG4gICAgdGV4dDogJ0l0YWxpYW5vJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzLXRyYW5zbGF0aW9ucy9kb2NzLWl0J1xuICB9LFxuICB7XG4gICAgbGluazogJ2h0dHBzOi8vZmEudnVlanMub3JnJyxcbiAgICB0ZXh0OiAnXHUwNjQxXHUwNjI3XHUwNjMxXHUwNjMzXHUwNkNDJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzLXRyYW5zbGF0aW9ucy9kb2NzLWZhJ1xuICB9LFxuICB7XG4gICAgbGluazogJ2h0dHBzOi8vcnUudnVlanMub3JnJyxcbiAgICB0ZXh0OiAnXHUwNDIwXHUwNDQzXHUwNDQxXHUwNDQxXHUwNDNBXHUwNDM4XHUwNDM5JyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyYW5zbGF0aW9uLWdhbmcvZG9jcy1ydSdcbiAgfSxcbiAge1xuICAgIGxpbms6ICdodHRwczovL2NzLnZ1ZWpzLm9yZycsXG4gICAgdGV4dDogJ1x1MDEwQ2VcdTAxNjF0aW5hJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzLXRyYW5zbGF0aW9ucy9kb2NzLWNzJ1xuICB9LFxuICB7XG4gICAgbGluazogJ2h0dHBzOi8vemgtaGsudnVlanMub3JnJyxcbiAgICB0ZXh0OiAnXHU3RTQxXHU5QUQ0XHU0RTJEXHU2NTg3JyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzLXRyYW5zbGF0aW9ucy9kb2NzLXpoLWhrJ1xuICB9LFxuICB7XG4gICAgbGluazogJy90cmFuc2xhdGlvbnMvJyxcbiAgICB0ZXh0OiAnXHU1RTJFXHU1MkE5XHU2MjExXHU0RUVDXHU3RkZCXHU4QkQxXHVGRjAxJyxcbiAgICBpc1RyYW5zbGF0aW9uc0Rlc2M6IHRydWVcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGkxOG4sXG4gIGxvY2FsZUxpbmtzXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3MvYWxnb2xpYVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9hbGdvbGlhL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3MvYWxnb2xpYS9pbmRleC50c1wiO2ltcG9ydCB0eXBlIHsgQ29uZmlnIGFzIFRoZW1lQ29uZmlnIH0gZnJvbSAnQHZ1ZS90aGVtZSdcbmNvbnN0IGFsZ29saWE6IFRoZW1lQ29uZmlnWydhbGdvbGlhJ10gPSB7XG4gIGluZGV4TmFtZTogJ3Z1ZWpzX2NuMicsXG4gIGFwcElkOiAnVVVSSDFNSEFGNycsXG4gIGFwaUtleTogJ2MyM2ViOGU3ODk1ZjQyZGFlYWYyYmY2ZjYzZWI0YmY2JyxcbiAgc2VhcmNoUGFyYW1ldGVyczoge1xuICAgIGZhY2V0RmlsdGVyczogWyd2ZXJzaW9uOnYzJ11cbiAgfSxcbiAgcGxhY2Vob2xkZXI6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxuICB0cmFuc2xhdGlvbnM6IHtcbiAgICBidXR0b246IHtcbiAgICAgIGJ1dHRvblRleHQ6ICdcdTY0MUNcdTdEMjInXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgc2VhcmNoQm94OiB7XG4gICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6ICdcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYnLFxuICAgICAgICByZXNldEJ1dHRvbkFyaWFMYWJlbDogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdcdTUzRDZcdTZEODgnLFxuICAgICAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICdcdTUzRDZcdTZEODgnXG4gICAgICB9LFxuICAgICAgc3RhcnRTY3JlZW46IHtcbiAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogJ1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXG4gICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiAnXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RkREXHU1QjU4XHU1MjMwXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRFQ0VcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcdTRFMkRcdTc5RkJcdTk2NjQnLFxuICAgICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6ICdcdTY1MzZcdTg1Q0YnLFxuICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RUNFXHU2NTM2XHU4NUNGXHU0RTJEXHU3OUZCXHU5NjY0J1xuICAgICAgfSxcbiAgICAgIGVycm9yU2NyZWVuOiB7XG4gICAgICAgIHRpdGxlVGV4dDogJ1x1NjVFMFx1NkNENVx1ODNCN1x1NTNENlx1N0VEM1x1Njc5QycsXG4gICAgICAgIGhlbHBUZXh0OiAnXHU0RjYwXHU1M0VGXHU4MEZEXHU5NzAwXHU4OTgxXHU2OEMwXHU2N0U1XHU0RjYwXHU3Njg0XHU3RjUxXHU3RURDXHU4RkRFXHU2M0E1J1xuICAgICAgfSxcbiAgICAgIGZvb3Rlcjoge1xuICAgICAgICBzZWxlY3RUZXh0OiAnXHU5MDA5XHU2MkU5JyxcbiAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJyxcbiAgICAgICAgY2xvc2VUZXh0OiAnXHU1MTczXHU5NUVEJyxcbiAgICAgICAgc2VhcmNoQnlUZXh0OiAnXHU2NDFDXHU3RDIyXHU0RjlCXHU1RTk0XHU1NTQ2J1xuICAgICAgfSxcbiAgICAgIG5vUmVzdWx0c1NjcmVlbjoge1xuICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcbiAgICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiAnXHU0RjYwXHU1M0VGXHU0RUU1XHU1QzFEXHU4QkQ1XHU2N0U1XHU4QkUyJyxcbiAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0OiAnXHU0RjYwXHU4QkE0XHU0RTNBXHU4RkQ5XHU0RTJBXHU2N0U1XHU4QkUyXHU1RTk0XHU4QkU1XHU2NzA5XHU3RUQzXHU2NzlDXHVGRjFGJyxcbiAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ1x1NTQxMVx1NjIxMVx1NEVFQ1x1NTNDRFx1OTk4OCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGFsZ29saWFcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9uYXZpZ2F0aW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdHVuYWl6aS9Qcm9qZWN0L2Jsb2cvZG9jcy8udml0ZXByZXNzL25hdmlnYXRpb24vbmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3MvbmF2aWdhdGlvbi9uYXYudHNcIjtpbXBvcnQgdHlwZSB7IENvbmZpZyBhcyBUaGVtZUNvbmZpZyB9IGZyb20gJ0B2dWUvdGhlbWUnXG5cbmV4cG9ydCBjb25zdCBuYXY6IFRoZW1lQ29uZmlnWyduYXYnXSA9IFtcbiAgLy8ge1xuICAvLyB0ZXh0OiAnXHU2NTg3XHU2ODYzJyxcbiAgLy8gYWN0aXZlTWF0Y2g6IGBeLyhndWlkZXxzdHlsZS1ndWlkZXxjb29rYm9va3xleGFtcGxlcykvYCxcbiAgLy8gaXRlbXM6IFtcbiAgLy8gICB7IHRleHQ6ICdcdTZERjFcdTVFQTZcdTYzMDdcdTUzNTcnLCBsaW5rOiAnL2d1aWRlL2ludHJvZHVjdGlvbicgfSxcbiAgLy8gICB7IHRleHQ6ICdcdTRFOTJcdTUyQThcdTY1NTlcdTdBMEInLCBsaW5rOiAnL3R1dG9yaWFsLycgfSxcbiAgLy8gICB7IHRleHQ6ICdcdTc5M0FcdTRGOEInLCBsaW5rOiAnL2V4YW1wbGVzLycgfSxcbiAgLy8gICB7IHRleHQ6ICdcdTVGRUJcdTkwMUZcdTRFMEFcdTYyNEInLCBsaW5rOiAnL2d1aWRlL3F1aWNrLXN0YXJ0JyB9LFxuICAvLyAgIHsgdGV4dDogJ1x1OThDRVx1NjgzQ1x1NjMwN1x1NTM1NycsIGxpbms6ICcvc3R5bGUtZ3VpZGUvJyB9LFxuICAvLyAgIHsgdGV4dDogJ1x1NjcyRlx1OEJFRFx1ODg2OCcsIGxpbms6ICcvZ2xvc3NhcnkvJyB9LFxuICAvLyAgIHsgdGV4dDogJ1x1OTUxOVx1OEJFRlx1NzgwMVx1NTNDMlx1NzE2N1x1ODg2OCcsIGxpbms6ICcvZXJyb3ItcmVmZXJlbmNlLycgfSxcbiAgLy8gICB7XG4gIC8vICAgICB0ZXh0OiAnVnVlIDIgXHU2NTg3XHU2ODYzJyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL3YyLmNuLnZ1ZWpzLm9yZydcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIHRleHQ6ICdcdTRFQ0UgVnVlIDIgXHU4RkMxXHU3OUZCJyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL3YzLW1pZ3JhdGlvbi52dWVqcy5vcmcvJ1xuICAvLyAgIH1cbiAgLy8gXVxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGV4dDogJ0FQSScsXG4gIC8vICAgYWN0aXZlTWF0Y2g6IGBeL2FwaS9gLFxuICAvLyAgIGxpbms6ICcvYXBpLydcbiAgLy8gfSxcbiAge1xuICAgIHRleHQ6ICdcdTYyNDBcdTY3MDlcdTY1ODdcdTdBRTAnLFxuICAgIGxpbms6ICcvc3RhcnQtZG9jcy8nLFxuICAgIGFjdGl2ZU1hdGNoOiBgXi9zdGFydC1kb2NzL2BcbiAgfVxuXVxuIiwgIntcbiAgXCIvc3RhcnQtZG9jcy9pbmRleC5tZC9cIjogW10sXG4gIFwiL3N0YXJ0LWRvY3MvY3JlYXRlLWJsb2cubWQvXCI6IFtdLFxuICBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC9cIjogW1xuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIlx1NjNBOFx1ODM1MFx1OTg3NVx1NUJGQ1x1ODIyQVwiLFxuICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC9SRUFETUVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1XCIsXG4gICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlx1OTRGRVx1ODg2OFwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkL1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENS9cdTk0RkVcdTg4NjhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiXHU5MDEyXHU1RjUyXHU1NDhDXHU1MjA2XHU2Q0JCXCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1L1x1OTAxMlx1NUY1Mlx1NTQ4Q1x1NTIwNlx1NkNCQlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCIjIERGUyBcdTZERjFcdTVFQTZcdTRGMThcdTUxNDhcdTkwNERcdTUzODZcdTU0OEMgQkZTIFx1NUU3Rlx1NUVBNlx1NEYxOFx1NTE0OFx1OTA0RFx1NTM4NlwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkL1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENS9cdTZERjFcdTVFQTZcdTMwMDFcdTVFN0ZcdTVFQTZcdTRGMThcdTUxNDhcdTkwNERcdTUzODZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiXHU2ODExJlx1NEU4Q1x1NTNDOVx1NjgxMSZcdTRFOENcdTUzQzlcdTY0MUNcdTdEMjJcdTY4MTFcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC9cdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTRFMEVcdTdCOTdcdTZDRDUvXHU2ODExXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlx1NjU3MFx1N0VDNC1cdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC9cdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTRFMEVcdTdCOTdcdTZDRDUvXHU2NTcwXHU3RUM0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlx1NjM5Mlx1NUU4Rlx1N0I5N1x1NkNENVx1NkM0N1x1NjAzQlwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkL1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENS9cdTYzOTJcdTVFOEZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1L1x1NTgwNlx1NjgwOFx1NTQ4Q1x1OTYxRlx1NTIxN1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJcdTU0QzhcdTVFMENcdTg4NjggbWFwJnNldFwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkL1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENS9cdTU0QzhcdTVFMENcdTg4NjhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiXHU1MkE4XHU2MDAxXHU4OUM0XHU1MjEyXHU1NDhDXHU4RDJBXHU1RkMzXHU3Qjk3XHU2Q0Q1XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1L1x1NTJBOFx1NjAwMVx1ODlDNFx1NTIxMlx1NTQ4Q1x1OEQyQVx1NUZDM1x1N0I5N1x1NkNENVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJcdTVGRUJcdThCRkJcdTUxNjVcdTUzRTNcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC9cdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTRFMEVcdTdCOTdcdTZDRDUvYmxvZ1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNvbGxhcHNlZFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiXHU1MjREXHU3QUVGXHU1N0ZBXHU3ODQwXHU0RjUzXHU3Q0ZCXCIsXG4gICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlx1NTI0RFx1N0FFRlx1NTdGQVx1Nzg0MFx1NzdFNVx1OEJDNlx1NEY1M1x1N0NGQlwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkL1x1NTI0RFx1N0FFRlx1NTdGQVx1Nzg0MFx1NEY1M1x1N0NGQi9ibG9nXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY29sbGFwc2VkXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCJ6XHU5NzYyXHU4QkQ1XHU3NzFGXHU5ODk4XCIsXG4gICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIkpTIFx1NUUzOFx1NzUyOFx1OTAzQlx1OEY5MVx1OTg5OFwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkL3pcdTk3NjJcdThCRDVcdTc3MUZcdTk4OTgvXHU1RTM4XHU4MDAzXHU3QkM3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIkpTIFx1NUUzOFx1NzUyOFx1NjVCOVx1NkNENVx1NTM5Rlx1NzQwNlx1NUI5RVx1NzNCMFwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkL3pcdTk3NjJcdThCRDVcdTc3MUZcdTk4OTgvXHU1MzlGXHU3NDA2XHU3QkM3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIiMgXHU1MTY4XHU5MEU4XHU5NzYyXHU4QkQ1XHU5ODk4XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvelx1OTc2Mlx1OEJENVx1NzcxRlx1OTg5OC9xdWVzdGlvbnNcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjb2xsYXBzZWRcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGV4dFwiOiBcIndlYnBhY2tcIixcbiAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwid2VicGFja1wiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkL3dlYnBhY2svYmxvZ1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNvbGxhcHNlZFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiY3NzXCIsXG4gICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIkNTUyBcdTVFMzhcdTg5QzFcdTk1RUVcdTk4OThcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC9jc3MvYmxvZ1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNvbGxhcHNlZFwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiY2xpXCIsXG4gICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlx1NUI2Nlx1NEU2MFx1NTIzNlx1NEY1Q1x1OTg3OVx1NzZFRUNMSVx1OEY2OFx1OEZGOVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkL2NsaS9ibG9nXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY29sbGFwc2VkXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRleHRcIjogXCIxXHU0RTEzXHU5ODk4XCIsXG4gICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlx1NTI0RFx1N0FFRlx1OTU3Rlx1NTIxN1x1ODg2OFx1NkUzMlx1NjdEM1x1NEYxOFx1NTMxNlwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvXHU5NTdGXHU1MjE3XHU4ODY4XHU2RTMyXHU2N0QzXHU0RjE4XHU1MzE2XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIiMgXHU4QkY3XHU2QzQyXHU1NzNBXHU2NjZGXHU5ODk4XHU3NkVFXCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvMVx1NEUxM1x1OTg5OC9cdThCRjdcdTZDNDJcdTVFNzZcdTg4NENcdTRFMzJcdTg4NENcdTk1RUVcdTk4OThcdTUzQ0FcdTU5MERcdTc1MjhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiIyBcdTVFMzhcdTc1MjhcdThCQkVcdThCQTFcdTZBMjFcdTVGMEZcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJcdTg5QzJcdTVCREZcdTgwMDVcdTZBMjFcdTVGMEZcdTU0OENcdTUzRDFcdTVFMDNcdThCQTJcdTk2MDVcdTZBMjFcdTVGMEZcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L1x1ODlDMlx1NUJERlx1ODAwNVx1NkEyMVx1NUYwRlx1NTNDQVx1NTNEMVx1NUUwM1x1OEJBMlx1OTYwNVx1ODAwNVx1NkEyMVx1NUYwRlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJcdTk2MzJcdTYyOTYgQW5kIFx1ODI4Mlx1NkQ0MVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvXHU4MjgyXHU2RDQxLVx1OTYzMlx1NjI5NlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJcdTdFQUZcdTUxRkRcdTY1NzBcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L1x1N0VBRlx1NTFGRFx1NjU3MFx1NEUwRVx1NTI2Rlx1NEY1Q1x1NzUyOFx1NTFGRFx1NjU3MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCIjIGVzNlx1NEUyRFx1N0JBRFx1NTkzNFx1NTFGRFx1NjU3MFx1NEUwRVx1NjY2RVx1OTAxQVx1NTFGRFx1NjU3MFx1NzY4NFx1NTMzQVx1NTIyQlwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvXHU3QkFEXHU1OTM0XHU1MUZEXHU2NTcwXHU0RTBFXHU2NjZFXHU5MDFBXHU1MUZEXHU2NTcwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlx1NkEyMVx1NTc1N1x1NTMxNlwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvXHU2QTIxXHU1NzU3XHU1MzE2XHU1M0NBXHU2MjUzXHU1MzA1XHU2QTIxXHU1RjBGXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlx1NjhDMFx1NkQ0Qlx1NjYyRlx1NEUwRFx1NjYyRlx1NjU3MFx1N0VDNFx1NzY4NFx1NjVCOVx1NUYwRlwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvXHU2OEMwXHU2RDRCXHU2NTcwXHU3RUM0XHU3QzdCXHU1NzhCXHU3Njg0XHU1MUUwXHU3OUNEXHU2NUI5XHU1RjBGXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIiMgXHU2N0VGXHU5MUNDXHU1MzE2IGN1cnJ5aW5nXCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvMVx1NEUxM1x1OTg5OC9cdTY3RUZcdTkxQ0NcdTUzMTZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiIyBcdTUzNTVcdTRGOEJcdTZBMjFcdTVGMEZcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L1x1NTM1NVx1NEY4Qlx1NkEyMVx1NUYwRlx1NTQ4Q1x1NURFNVx1NTM4Mlx1NkEyMVx1NUYwRlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJcdTVFMzhcdTg5QzFcdTc2ODQgV2ViIFx1NjUzQlx1NTFGQlwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvXHU1MjREXHU3QUVGXHU3RjUxXHU3RURDXHU1Qjg5XHU1MTY4XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlx1NEVDRVx1NEUwMFx1NEUyQSB1cmwgXHU1MjMwXHU5ODc1XHU5NzYyXHU1QzU1XHU3OTNBXHU3Njg0XHU1MTY4XHU2RDQxXHU3QTBCXCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvMVx1NEUxM1x1OTg5OC9cdTRFQ0VVUkxcdTUyMzBcdTY2M0VcdTc5M0FcdTdGNTFcdTk4NzVcdTc2ODRcdTUxNjhcdThGQzdcdTdBMEJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiVnVleCAvIFJlZHV4XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvMVx1NEUxM1x1OTg5OC92dWV4XHU2MjE2cmVkdXhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiaGFzaGNoYW5nZSBcdTU0OEMgaDUgaGlzdG9yeSBwb3BzdGF0ZVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvdnVlLXJvdXRlclx1NjIxNnJlYWN0LXJvdXRlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCIjIHNldFRpbWVvdXRcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L3NldFRpbWVvdXRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiIyBKU1x1NEUwRU5hdGl2ZVx1OTAxQVx1NEZFMVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvanNcdTRFMEVuYXRpdmVcdTkwMUFcdTRGRTFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiY2xhc3NcdTRFMEVcdTY3ODRcdTkwMjBcdTUxRkRcdTY1NzBcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L2NsYXNzXHU0RTBFXHU1MUZEXHU2NTcwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIiMgYmluZCAmIGNhbGwgJiBhcHBseVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvYmluZCZjYWxsJmFwcGx5XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlByb21pc2UvQStcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L1Byb21pc2VcdTUzOUZcdTc0MDZcdTUzQ0FcdTVCOUVcdTczQjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiTlBNXHU1MzA1XHU3QkExXHU3NDA2XHU2NzNBXHU1MjM2XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvMVx1NEUxM1x1OTg5OC9OUE1cdTUzMDVcdTdCQTFcdTc0MDZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiSlNcdTVGMTVcdTY0Q0VcdTc2ODRcdTRFMjRcdTc5Q0RcdTY3RTVcdTYyN0VcdTY1QjlcdTVGMEZcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L0xIU1x1NTQ4Q1JIU1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJcdTdFRTdcdTYyN0ZcdTc2ODRcdTUxRTBcdTc5Q0RcdTdDN0JcdTU3OEJcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L0pTXHU3RUU3XHU2MjdGXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcInRoaXNcdTYzMDdcdTU0MTFcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L0pTXHU3Njg0dGhpc1x1NTE3M1x1OTUyRVx1NUI1N1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJPYmplY3RcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L0pTXHU1QkY5XHU4QzYxXHU2MkY3XHU4RDFEXHU1M0NBXHU2REYxXHU2MkY3XHU4RDFEXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIiMgXHU1NzgzXHU1NzNFXHU1NkRFXHU2NTM2XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhcnQtZG9jcy9zdHVkeWhhcmQvMVx1NEUxM1x1OTg5OC9KU1x1NTc4M1x1NTczRVx1NTZERVx1NjUzNlx1NjczQVx1NTIzNlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJcdTdCQTFcdTc0MDZcdTRGNUNcdTc1MjhcdTU3REZcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L0pTXHU0RjVDXHU3NTI4XHU1N0RGXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIm5ldyBcdTUxNzNcdTk1MkVcdTVCNTdcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4L0pTXHU0RTJEXHU3Njg0bmV3XHU1RTcyXHU0RTg2XHU0RUMwXHU0RTQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlRDUC9JUFwiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvSFRUUChzKVx1NTNDQVx1N0YxM1x1NUI1OFx1NjczQVx1NTIzNlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCIjIGV2ZW50IGJ1c1wiLFxuICAgICAgICAgIFwiaXRlbXNcIjogW10sXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N0YXJ0LWRvY3Mvc3R1ZHloYXJkLzFcdTRFMTNcdTk4OTgvRXZlbnRCdXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiXHU2MDBFXHU0RTQ4XHU3NTNCIDFweCBcdTUwQ0ZcdTdEMjBcdTdFQkZcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9zdGFydC1kb2NzL3N0dWR5aGFyZC8xXHU0RTEzXHU5ODk4LzFQWFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNvbGxhcHNlZFwiOiBmYWxzZVxuICAgIH1cbiAgXVxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9uYXZpZ2F0aW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdHVuYWl6aS9Qcm9qZWN0L2Jsb2cvZG9jcy8udml0ZXByZXNzL25hdmlnYXRpb24vc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdHVuYWl6aS9Qcm9qZWN0L2Jsb2cvZG9jcy8udml0ZXByZXNzL25hdmlnYXRpb24vc2lkZWJhci50c1wiO2ltcG9ydCB0eXBlIHsgQ29uZmlnIGFzIFRoZW1lQ29uZmlnIH0gZnJvbSAnQHZ1ZS90aGVtZSdcbmltcG9ydCBzdGFydERvY3NKc29uIGZyb20gJy4vc3RhcnQtZG9jcy5qc29uJ1xuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBPYmplY3QuYXNzaWduKFxuICBzdGFydERvY3NKc29uLFxuICB7fVxuKSBhcyBUaGVtZUNvbmZpZ1snc2lkZWJhciddXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3MvbmF2aWdhdGlvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9uYXZpZ2F0aW9uL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3MvbmF2aWdhdGlvbi9pbmRleC50c1wiO2ltcG9ydCB0eXBlIHsgQ29uZmlnIGFzIFRoZW1lQ29uZmlnIH0gZnJvbSAnQHZ1ZS90aGVtZSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IG5hdiBhcyBuYXYxIH0gZnJvbSAnLi9uYXYnXG5pbXBvcnQgeyBzaWRlYmFyIGFzIHNpZGViYXIxIH0gZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IHsgY29weU5hdiwgY29weVNpZGViYXIgfSBmcm9tICcuL2NvcHknXG5cbi8vIGV4cG9ydCBjb25zdCBuYXYgPSBfLmNvbmNhdChuYXYxLCBjb3B5TmF2KSBhcyBUaGVtZUNvbmZpZ1snbmF2J11cbi8vIGV4cG9ydCBjb25zdCBzaWRlYmFyID0gXy5hc3NpZ24oXG4vLyAgIHNpZGViYXIxLFxuLy8gICBjb3B5U2lkZWJhclxuLy8gKSBhcyBUaGVtZUNvbmZpZ1snc2lkZWJhciddXG5cbmV4cG9ydCBjb25zdCBuYXYgPSBuYXYxIGFzIFRoZW1lQ29uZmlnWyduYXYnXVxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBzaWRlYmFyMSBhcyBUaGVtZUNvbmZpZ1snc2lkZWJhciddXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3MvYXV0b1NpZGVCYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy9hdXRvU2lkZUJhci50c1wiO2ltcG9ydCBnbG9iIGZyb20gJ2dsb2InXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgUGx1Z2luLCBVc2VyQ29uZmlnLCBWaXRlRGV2U2VydmVyLCBub3JtYWxpemVQYXRoIH0gZnJvbSAndml0ZSdcblxuaW50ZXJmYWNlIFNpZGViYXJJdGVtIHtcbiAgdGV4dDogc3RyaW5nXG4gIGxpbms/OiBzdHJpbmdcbiAgaXRlbXM/OiBTaWRlYmFySXRlbVtdXG4gIGNvbGxhcHNlZD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFNpZGViYXJDb25maWcge1xuICBba2V5OiBzdHJpbmddOiBTaWRlYmFySXRlbVtdXG59XG5cbmludGVyZmFjZSBQbHVnaW5PcHRpb25zIHtcbiAgcm9vdD86IHN0cmluZ1xuICBkb2NzPzogc3RyaW5nXG4gIGlnbm9yZXM/OiBzdHJpbmdbXVxuICBzaWRlYmFyUmVzb2x2ZWQ/OiAoc2lkZWJhcjogU2lkZWJhckNvbmZpZykgPT4gdm9pZFxuICBtZXJnZVNpZGViYXI/OiAoc2lkZWJhcjogU2lkZWJhckNvbmZpZywgY29uZmlnOiBVc2VyQ29uZmlnKSA9PiBVc2VyQ29uZmlnXG4gIHdyaXJlVG9Kc29uPzogc3RyaW5nXG59XG5cbnR5cGUgTm9ybWFsaXplZE9wdGlvbnMgPSBSZXF1aXJlZDxQbHVnaW5PcHRpb25zPlxuXG5mdW5jdGlvbiB3cml0ZVRvKGpzb25TdHJpbmc6IHN0cmluZywgd3JpdGVUb1BhdGg/OiBzdHJpbmcpIHtcbiAgd3JpdGVUb1BhdGggJiZcbiAgICBmcy53cml0ZUZpbGUoam9pblRvQ3dkKHdyaXRlVG9QYXRoKSwganNvblN0cmluZywgJ3V0ZjgnLCAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyKSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBqb2luVG9Dd2QoLi4uc3RyOiBzdHJpbmdbXSkge1xuICByZXR1cm4gcGF0aC5wb3NpeC5qb2luKHByb2Nlc3MuY3dkKCksIC4uLnN0cilcbn1cblxuY29uc3QgdGl0bGVDYWNoZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbmZ1bmN0aW9uIFZpdGVQbHVnaW5BdXRvU2lkZWJhcihvcHRpb25zOiBQbHVnaW5PcHRpb25zID0ge30pOiBQbHVnaW4ge1xuICBjb25zdCBvcHRzID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKVxuICByZXR1cm4ge1xuICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICBuYW1lOiAnVml0ZVBsdWdpbkF1dG9TaWRlYmFyJyxcbiAgICBjb25maWcoY29uZmlnOiBVc2VyQ29uZmlnKSB7XG4gICAgICBvcHRzLm1lcmdlU2lkZWJhcihnZXRTaWRlYmFyQ29uZmlnKG9wdHMpLCBjb25maWcpXG4gICAgICBpZiAob3B0cy53cmlyZVRvSnNvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhjb25maWcuc2VydmVyKVxuICAgICAgICBjb25zdCBjZmcgPSB7XG4gICAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICB3YXRjaDogeyBpZ25vcmU6IFtdIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb25maWcuc2VydmVyPy53YXRjaD8uaWdub3JlKSkge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBjZmcpXG4gICAgICAgIH1cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbmZpZy5zZXJ2ZXIud2F0Y2guaWdub3JlLnB1c2goam9pblRvQ3dkKG9wdHMud3JpcmVUb0pzb24pKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH0sXG4gICAgY29uZmlndXJlU2VydmVyKHsgd2F0Y2hlciwgcmVzdGFydCB9OiBWaXRlRGV2U2VydmVyKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhqb2luVG9Dd2Qob3B0cy5kb2NzLCAnKiovKi5tZCcpKVxuXG4gICAgICBjb25zdCBmc1dhdGNoZXIgPSB3YXRjaGVyLmFkZCgnKi5tZCcpXG4gICAgICBmc1dhdGNoZXIub24oXG4gICAgICAgICdhbGwnLFxuICAgICAgICAoXG4gICAgICAgICAgZXZlbnQ6ICdhZGQnIHwgJ2FkZERpcicgfCAnY2hhbmdlJyB8ICd1bmxpbmsnIHwgJ3VubGlua0RpcicsXG4gICAgICAgICAgZmlsZVBhdGg6IHN0cmluZ1xuICAgICAgICApID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBvcHRzLndyaXJlVG9Kc29uICYmXG4gICAgICAgICAgICBqb2luVG9Dd2Qob3B0cy53cmlyZVRvSnNvbikgPT09IGZpbGVQYXRoXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnXHU2M0QyXHU0RUY2XHU0RUNFXHU2NUIwXHU4RkQwXHU4ODRDXHUzMDAyXHUzMDAyXHUzMDAyXHUzMDAyJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQgPT09ICdhZGREaXInKSByZXR1cm5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09ICd1bmxpbmtEaXInKSByZXR1cm5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09ICdhZGQnKSByZXR1cm5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09ICd1bmxpbmsnKSB7XG4gICAgICAgICAgICByZXN0YXJ0KClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQgPT09ICdjaGFuZ2UnKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IG1hdGNoVGl0bGUoZmlsZVBhdGgpXG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGdldFJvdXRlKG9wdHMucm9vdCwgZmlsZVBhdGgpXG4gICAgICAgICAgICBpZiAoIXJvdXRlIHx8ICF0aXRsZSkgcmV0dXJuXG4gICAgICAgICAgICBpZiAodGl0bGUgPT09IHRpdGxlQ2FjaGVbcm91dGVdKSByZXR1cm5cbiAgICAgICAgICAgIHJlc3RhcnQoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNpZGViYXJDb25maWcob3B0czogTm9ybWFsaXplZE9wdGlvbnMpOiBTaWRlYmFyQ29uZmlnIHtcbiAgY29uc3QgZG9jc1BhdGggPSBvcHRzLmRvY3NcbiAgY29uc3QgcGF0aHMgPSBnbG9iLnN5bmMoJyoqLyoubWQnLCB7XG4gICAgY3dkOiBkb2NzUGF0aCxcbiAgICBpZ25vcmU6IG9wdHMuaWdub3Jlc1xuICB9KVxuICBjb25zdCBiYXNlUGF0aCA9IHBhdGgucmVsYXRpdmUob3B0cy5yb290LCBkb2NzUGF0aClcbiAgY29uc3Qgc2lkZWJhcjogU2lkZWJhckNvbmZpZyA9IHt9XG5cbiAgcGF0aHMuZm9yRWFjaCgoZnVsbFBhdGgpID0+IHtcbiAgICBjb25zdCBzZWdtZW50cyA9IGZ1bGxQYXRoLnNwbGl0KCcvJylcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwYXRoLnJlc29sdmUoZG9jc1BhdGgsIGZ1bGxQYXRoKVxuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDApIHJldHVyblxuICAgIGNvbnN0IHRvcExldmVsID0gYmFzZVBhdGhcbiAgICAgID8gYC8ke2Jhc2VQYXRofS8ke3NlZ21lbnRzLnNoaWZ0KCl9L2BcbiAgICAgIDogYC8ke3NlZ21lbnRzLnNoaWZ0KCl9L2BcbiAgICBpZiAodG9wTGV2ZWwuZW5kc1dpdGgoJy5tZCcpKSByZXR1cm5cbiAgICBpZiAoIXNpZGViYXJbdG9wTGV2ZWxdKSB7XG4gICAgICBzaWRlYmFyW3RvcExldmVsXSA9IFtdXG4gICAgfVxuICAgIGxldCBjdXJyZW50TGV2ZWwgPSBzaWRlYmFyW3RvcExldmVsXVxuICAgIHNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQpID0+IHtcbiAgICAgIGxldCBjdXJDb25maWcgPSBjdXJyZW50TGV2ZWwuZmluZCgoaXRlbSkgPT4gaXRlbS50ZXh0ID09PSBzZWdtZW50KVxuICAgICAgaWYgKCFjdXJDb25maWcpIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbmZpZzogU2lkZWJhckl0ZW0gPSB7XG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlZ21lbnQuZW5kc1dpdGgoJy5tZCcpKSB7XG4gICAgICAgICAgY29uc3Qgcm91dGUgPSBnZXRSb3V0ZShvcHRzLnJvb3QsIGFic29sdXRlUGF0aClcbiAgICAgICAgICBpdGVtQ29uZmlnLnRleHQgPSBtYXRjaFRpdGxlKGFic29sdXRlUGF0aClcbiAgICAgICAgICBpdGVtQ29uZmlnLmxpbmsgPSByb3V0ZVxuICAgICAgICAgIHRpdGxlQ2FjaGVbcm91dGVdID0gaXRlbUNvbmZpZy50ZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbUNvbmZpZy50ZXh0ID0gc2VnbWVudFxuICAgICAgICAgIGl0ZW1Db25maWcuY29sbGFwc2VkID0gZmFsc2VcbiAgICAgICAgICBpdGVtQ29uZmlnLml0ZW1zID0gW11cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TGV2ZWwucHVzaChpdGVtQ29uZmlnKVxuICAgICAgICBjdXJDb25maWcgPSBpdGVtQ29uZmlnXG4gICAgICB9XG4gICAgICBjdXJyZW50TGV2ZWwgPSBjdXJDb25maWcuaXRlbXMgfHwgW11cbiAgICB9KVxuICB9KVxuICBpZiAob3B0cy5zaWRlYmFyUmVzb2x2ZWQpIHtcbiAgICBvcHRzLnNpZGViYXJSZXNvbHZlZChzaWRlYmFyKVxuICB9XG4gIHJldHVybiBzaWRlYmFyXG59XG4vLyBmdW5jdGlvbiBnZXRTaWRlYmFyQ29uZmlnMShvcHRzOiBOb3JtYWxpemVkT3B0aW9ucyk6IFNpZGViYXJDb25maWcge1xuLy8gICBjb25zdCBkb2NzUGF0aCA9IG9wdHMuZG9jc1xuLy8gICBjb25zdCBwYXRocyA9IGdsb2Iuc3luYygnKiovKi5tZCcsIHtcbi8vICAgICBjd2Q6IGRvY3NQYXRoLFxuLy8gICAgIGlnbm9yZTogb3B0cy5pZ25vcmVzXG4vLyAgIH0pXG4vLyAgIGNvbnN0IGJhc2VQYXRoID0gYC8ke3BhdGgucG9zaXgucmVsYXRpdmUob3B0cy5yb290LCBkb2NzUGF0aCl9L2Bcbi8vICAgbGV0IGJhc2VJdGVtOiBTaWRlYmFySXRlbSA9IHtcbi8vICAgICBpdGVtczogW10sXG4vLyAgICAgdGV4dDogYmFzZVBhdGgsXG4vLyAgICAgbGluazogYmFzZVBhdGhcbi8vICAgfVxuLy8gICBjb25zdCBzaWRlYmFyOiBTaWRlYmFyQ29uZmlnID0ge31cblxuLy8gICBwYXRocy5mb3JFYWNoKChmdWxsUGF0aCkgPT4ge1xuLy8gICAgIGNvbnN0IHNlZ21lbnRzID0gZnVsbFBhdGguc3BsaXQoJy8nKVxuLy8gICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHBhdGgucG9zaXgucmVzb2x2ZShkb2NzUGF0aCwgZnVsbFBhdGgpXG4vLyAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4vLyAgICAgbGV0IHRvcExldmVsID0gYmFzZVBhdGhcbi8vICAgICAgID8gYCR7YmFzZVBhdGh9JHtzZWdtZW50cy5zaGlmdCgpfS9gXG4vLyAgICAgICA6IGAvJHtzZWdtZW50cy5zaGlmdCgpfWBcblxuLy8gICAgIGlmICh0b3BMZXZlbC5lbmRzV2l0aCgnLm1kLycpKSB7XG4vLyAgICAgICB0b3BMZXZlbCA9IHRvcExldmVsLnJlcGxhY2UoL1xcLyQvLCAnJylcbi8vICAgICAgIGlmICh0b3BMZXZlbC5lbmRzV2l0aCgnaW5kZXgubWQvJykpIHtcbi8vICAgICAgICAgYmFzZUl0ZW0ubGluayA9IGRlc3VmZml4KHRvcExldmVsKVxuLy8gICAgICAgICB0b3BMZXZlbCA9IGJhc2VQYXRoXG4vLyAgICAgICB9XG4vLyAgICAgICBpZiAoYmFzZVBhdGggIT09IHRvcExldmVsICYmIHRvcExldmVsLnN0YXJ0c1dpdGgoYmFzZVBhdGgpKSB7XG4vLyAgICAgICAgIGlmICghKGJhc2VQYXRoIGluIHNpZGViYXIpKSBzaWRlYmFyW2Jhc2VQYXRoXSA9IFtiYXNlSXRlbV1cbi8vICAgICAgICAgYmFzZUl0ZW0uaXRlbXMgPSBiYXNlSXRlbS5pdGVtcyB8fCBbXVxuLy8gICAgICAgICBiYXNlSXRlbS5pdGVtcy5wdXNoKHtcbi8vICAgICAgICAgICB0ZXh0OiB0b3BMZXZlbC5yZXBsYWNlKC8oXFwubWR8aW5kZXhcXC5tZCkkLywgJycpLFxuLy8gICAgICAgICAgIGxpbms6IGRlc3VmZml4KHRvcExldmVsKSxcbi8vICAgICAgICAgICBpdGVtczogW11cbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgdG9wTGV2ZWwgPSB0b3BMZXZlbC5yZXBsYWNlKC8oXFwubWR8aW5kZXhcXC5tZCkkLywgJycpXG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBzaWRlYmFyW2Jhc2VQYXRoXSA9IFtiYXNlSXRlbV1cbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgYmFzZUl0ZW0uaXRlbXMgPSBiYXNlSXRlbS5pdGVtcyB8fCBbXVxuLy8gICAgIGlmICghc2lkZWJhclt0b3BMZXZlbF0pIHtcbi8vICAgICAgIHNpZGViYXJbdG9wTGV2ZWxdID0gW11cbi8vICAgICB9XG4vLyAgICAgbGV0IGN1cnJlbnRMZXZlbDogU2lkZWJhckl0ZW1bXSA9IHNpZGViYXJbdG9wTGV2ZWxdXG4vLyAgICAgc2VnbWVudHMuZm9yRWFjaCgoc2VnbWVudCkgPT4ge1xuLy8gICAgICAgbGV0IGN1ckNvbmZpZyA9IGN1cnJlbnRMZXZlbC5maW5kKChpdGVtKSA9PiBpdGVtLnRleHQgPT09IHNlZ21lbnQpXG4vLyAgICAgICBpZiAoIWN1ckNvbmZpZykge1xuLy8gICAgICAgICBjb25zdCBpdGVtQ29uZmlnOiBTaWRlYmFySXRlbSA9IHtcbi8vICAgICAgICAgICB0ZXh0OiAnJyxcbi8vICAgICAgICAgICBpdGVtczogW11cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoc2VnbWVudC5lbmRzV2l0aCgnLm1kJykpIHtcbi8vICAgICAgICAgICBjb25zdCByb3V0ZSA9IGdldFJvdXRlKG9wdHMucm9vdCwgYWJzb2x1dGVQYXRoKVxuLy8gICAgICAgICAgIGl0ZW1Db25maWcudGV4dCA9IG1hdGNoVGl0bGUoYWJzb2x1dGVQYXRoKVxuLy8gICAgICAgICAgIGl0ZW1Db25maWcubGluayA9IHJvdXRlXG4vLyAgICAgICAgICAgdGl0bGVDYWNoZVtyb3V0ZV0gPSBpdGVtQ29uZmlnLnRleHRcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBpdGVtQ29uZmlnLnRleHQgPSBzZWdtZW50XG4vLyAgICAgICAgICAgaXRlbUNvbmZpZy5jb2xsYXBzZWQgPSBmYWxzZVxuLy8gICAgICAgICAgIGl0ZW1Db25maWcuaXRlbXMgPSBbXVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGN1cnJlbnRMZXZlbC5wdXNoKGl0ZW1Db25maWcpXG4vLyAgICAgICAgIGN1ckNvbmZpZyA9IGl0ZW1Db25maWdcbi8vICAgICAgIH1cbi8vICAgICAgIGN1cnJlbnRMZXZlbCA9IGN1ckNvbmZpZy5pdGVtcyB8fCBbXVxuLy8gICAgIH0pXG4vLyAgIH0pXG4vLyAgIGlmIChvcHRzLnNpZGViYXJSZXNvbHZlZCkge1xuLy8gICAgIG9wdHMuc2lkZWJhclJlc29sdmVkKHNpZGViYXIpXG4vLyAgIH1cblxuLy8gICBmb3IgKGNvbnN0IGtleSBpbiBzaWRlYmFyKSB7XG4vLyAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KGtleSkpIHtcbi8vICAgICAgIGxldCBpdGVtID0gc2lkZWJhcltrZXldXG4vLyAgICAgICBpZiAoa2V5ICE9PSBiYXNlUGF0aCkge1xuLy8gICAgICAgICBiYXNlSXRlbS5pdGVtcyA9IGJhc2VJdGVtLml0ZW1zPy5jb25jYXQoaXRlbSlcbi8vICAgICAgICAgZGVsZXRlIHNpZGViYXJba2V5XVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4gc2lkZWJhclxuLy8gfVxuXG5mdW5jdGlvbiBtYXRjaFRpdGxlKHA6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocCwgJ3V0Zi04JylcbiAgcmV0dXJuICgoY29udGVudC5tYXRjaCgvXiMoLiopXFxuPy8pIHx8IFtdKVsxXSB8fCAnJykudHJpbSgpXG59XG5cbmZ1bmN0aW9uIGRlc3VmZml4KHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoLyhcXC5tZHxcXC5tZFxcLykkLywgJycpXG59XG5mdW5jdGlvbiBnZXRSb3V0ZShyb290OiBzdHJpbmcsIGFic1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBkZXN1ZmZpeCgnLycgKyBwYXRoLnBvc2l4LnJlbGF0aXZlKHJvb3QsIGFic1BhdGgpKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPcHRpb25zKG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMpOiBOb3JtYWxpemVkT3B0aW9ucyB7XG4gIGxldCByb290ID0gam9pblRvQ3dkKG9wdGlvbnMucm9vdCB8fCAnJylcbiAgaWYgKCFyb290KSB7XG4gICAgY29uc3QgZmlsZXMgPSBnbG9iLnN5bmMoJyoqLy52aXRlcHJlc3MvY29uZmlnLionLCB7XG4gICAgICBjd2Q6IHByb2Nlc3MuY3dkKCksXG4gICAgICBkb3Q6IHRydWUsXG4gICAgICBpZ25vcmU6IFsnbm9kZV9tb2R1bGVzLyoqLyonXVxuICAgIH0pXG4gICAgaWYgKGZpbGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1dBUk5JTkddIFx1NjI3RVx1NTIzMFx1NTkxQVx1NEUyQSAudml0ZXByZXNzL2NvbmZpZyBcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjYnLCBmaWxlcylcbiAgICB9XG4gICAgcm9vdCA9IHBhdGgucG9zaXgucmVzb2x2ZShmaWxlc1swXSwgJy4uLy4uJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHJvb3QsXG4gICAgZG9jczogam9pblRvQ3dkKG9wdGlvbnMuZG9jcyB8fCByb290KSxcbiAgICBpZ25vcmVzOiAob3B0aW9ucy5pZ25vcmVzID8/IFtdKS5tYXAobm9ybWFsaXplUGF0aCksXG4gICAgd3JpcmVUb0pzb246IG5vcm1hbGl6ZVBhdGgob3B0aW9ucy53cmlyZVRvSnNvbiB8fCAnJyksXG4gICAgc2lkZWJhclJlc29sdmVkOiBvcHRpb25zLnNpZGViYXJSZXNvbHZlZCA/PyBmdW5jdGlvbiAoKSB7fSxcbiAgICBtZXJnZVNpZGViYXI6XG4gICAgICBvcHRpb25zLm1lcmdlU2lkZWJhciA/P1xuICAgICAgZnVuY3Rpb24gKHNpZGViYXI6IFNpZGViYXJDb25maWcsIGNvbmZpZzogVXNlckNvbmZpZykge1xuICAgICAgICBjb25zdCBzaWRlYmFyRGVmYXVsdCA9XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNvbmZpZy52aXRlcHJlc3Muc2l0ZS50aGVtZUNvbmZpZy5zaWRlYmFyIHx8IHt9XG4gICAgICAgIGlmICh0eXBlb2Ygc2lkZWJhckRlZmF1bHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgd3JpdGVUbyhKU09OLnN0cmluZ2lmeShzaWRlYmFyLCBudWxsLCAyKSwgb3B0aW9ucy53cmlyZVRvSnNvbilcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY29uZmlnLnZpdGVwcmVzcy5zaXRlLnRoZW1lQ29uZmlnLnNpZGViYXIgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgc2lkZWJhckRlZmF1bHQsXG4gICAgICAgICAgICBzaWRlYmFyXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWdcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBWaXRlUGx1Z2luQXV0b1NpZGViYXIgYXMgZGVmYXVsdCB9XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3Mvdml0ZVNldHRpbmcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3R1bmFpemkvUHJvamVjdC9ibG9nL2RvY3MvLnZpdGVwcmVzcy92aXRlU2V0dGluZy50c1wiO2ltcG9ydCB7IFVzZXJDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXG5pbXBvcnQgQXV0b1NpZGViYXIgZnJvbSAnLi9hdXRvU2lkZUJhcidcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmaW5lOiB7XG4gICAgX19WVUVfT1BUSU9OU19BUElfXzogZmFsc2VcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogWydnc2FwJywgJ2R5bmFtaWNzLmpzJ10sXG4gICAgZXhjbHVkZTogWydAdnVlL3JlcGwnXVxuICB9LFxuICAvLyBAdHMtaWdub3JlXG4gIHNzcjoge1xuICAgIGV4dGVybmFsOiBbJ0B2dWUvcmVwbCddXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IHRydWUsXG4gICAgZnM6IHtcbiAgICAgIC8vIGZvciB3aGVuIGRldmVsb3Bpbmcgd2l0aCBsb2NhbGx5IGxpbmtlZCB0aGVtZVxuICAgICAgLy8gXHU3NTI4XHU0RThFXHU1NzI4XHU2NzJDXHU1NzMwXHU5NEZFXHU2M0E1XHU0RTNCXHU5ODk4XHU2NUY2XHU4RkRCXHU4ODRDXHU1RjAwXHU1M0QxXG4gICAgICBhbGxvdzogWycuLi8uLiddXG4gICAgfVxuICB9LFxuICBidWlsZDoge1xuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogSW5maW5pdHlcbiAgfSxcbiAganNvbjoge1xuICAgIHN0cmluZ2lmeTogdHJ1ZVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3ZpdGUtcGx1Z2luLXZpdGVwcmVzcy1zdGFydCcsXG4gICAgICBjb25maWcoY29uZmlnLCBlbnYpIHtcbiAgICAgICAgY29uc3QgaXNEZXYgPSBlbnYubW9kZSA9PT0gJ2RldmVsb3BtZW50J1xuICAgICAgICBjb25maWcuYmFzZSA9IGlzRGV2ID8gJy8nIDogJy9ibG9nJ1xuICAgICAgICByZXR1cm4gY29uZmlnXG4gICAgICB9XG4gICAgfSxcbiAgICBBdXRvU2lkZWJhcih7XG4gICAgICByb290OiAnL3NyYy8nLFxuICAgICAgZG9jczogJy9zcmMvc3RhcnQtZG9jcy8nLFxuICAgICAgd3JpcmVUb0pzb246ICcudml0ZXByZXNzL25hdmlnYXRpb24vc3RhcnQtZG9jcy5qc29uJ1xuICAgIH0pXG4gIF1cbn0gYXMgVXNlckNvbmZpZ1sndml0ZSddXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy90dW5haXppL1Byb2plY3QvYmxvZy9kb2NzLy52aXRlcHJlc3MvaW5saW5lZC1zY3JpcHRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdHVuYWl6aS9Qcm9qZWN0L2Jsb2cvZG9jcy8udml0ZXByZXNzL2lubGluZWQtc2NyaXB0cy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdHVuYWl6aS9Qcm9qZWN0L2Jsb2cvZG9jcy8udml0ZXByZXNzL2lubGluZWQtc2NyaXB0cy9pbmRleC50c1wiO2ltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBIZWFkQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuZXhwb3J0IGNvbnN0IGlubGluZWRTY3JpcHRzOiBIZWFkQ29uZmlnW10gPSBbXG4gIFtcbiAgICAnc2NyaXB0JyxcbiAgICB7fSxcbiAgICBmcy5yZWFkRmlsZVN5bmMoXG4gICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9yZXN0b3JlUHJlZmVyZW5jZS5qcycpLFxuICAgICAgJ3V0Zi04J1xuICAgIClcbiAgXSxcbiAgW1xuICAgICdzY3JpcHQnLFxuICAgIHt9LFxuICAgIGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi91d3UuanMnKSwgJ3V0Zi04JylcbiAgXVxuXG4gIC8vIFtcbiAgLy8gICAnc2NyaXB0JyxcbiAgLy8gICB7IC8vIFx1NkRGQlx1NTJBMFx1NUU3Rlx1NTQ0QSBcdTRFMDdcdTdFRjRcdTVFN0ZcdTU0NEFcdTgwNTRcdTc2REZcbiAgLy8gICAgIGFzeW5jOiAndHJ1ZScsXG4gIC8vICAgICBzcmM6ICdodHRwczovL2Nkbi53d2Fkcy5jbi9qcy9tYWtlbW9uZXkuanMnXG4gIC8vICAgfSxcbiAgLy8gXVxuXG4gIC8vIFtcbiAgLy8gICAnc2NyaXB0JyxcbiAgLy8gICB7XG4gIC8vICAgICBzcmM6ICdodHRwczovL2Nkbi51c2VmYXRob20uY29tL3NjcmlwdC5qcycsXG4gIC8vICAgICAnZGF0YS1zaXRlJzogJ1pQTU1EU1lBJyxcbiAgLy8gICAgICdkYXRhLXNwYSc6ICdhdXRvJyxcbiAgLy8gICAgIGRlZmVyOiAnJ1xuICAvLyAgIH1cbiAgLy8gXSxcbiAgLy8gW1xuICAvLyAgICdzY3JpcHQnLFxuICAvLyAgIHtcbiAgLy8gICAgIHNyYzogJ2h0dHBzOi8vdnVlc2Nob29sLmlvL2Jhbm5lci5qcz9hZmZpbGlhdGU9dnVlanMmdHlwZT10b3AnLFxuICAvLyAgICAgYXN5bmM6ICd0cnVlJ1xuICAvLyAgIH1cbiAgLy8gXVxuXVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5UyxTQUFTLDZCQUE2QjtBQUUvVSxPQUFPLGdCQUFnQjs7O0FDa0JoQixJQUFNLGVBQWUsQ0FBQyxPQUFtQjtBQUM5QyxLQUFHLFNBQVMsTUFB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Q1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFRO0FBQUEsTUFDUixPQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBUTtBQUFBLE1BQ1IsT0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBUTtBQUFBLE1BQ1IsT0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQVE7QUFBQSxNQUNSLE9BQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFRO0FBQUEsTUFDUixPQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBUTtBQUFBLE1BQ1IsT0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE9BQVMsQ0FBQztBQUFBLFVBQ1YsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixPQUFTLENBQUM7QUFBQSxVQUNWLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsT0FBUyxDQUFDO0FBQUEsVUFDVixNQUFRO0FB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O0FBQUEsRUFDVCxTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsWUFBWSxDQUFDLDRCQUE0QjtBQUFBLEVBQ3pDLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLE1BQU0sZUFBZSxTQUFTLFVBQVUsQ0FBQztBQUFBLElBQ3BELENBQUMsUUFBUSxFQUFFLFVBQVUsVUFBVSxTQUFTLHFCQUFxQixDQUFDO0FBQUEsSUFDOUQsQ0FBQyxRQUFRLEVBQUUsVUFBVSxXQUFXLFNBQVMsVUFBVSxDQUFDO0FBQUEsSUFDcEQsQ0FBQyxRQUFRLEVBQUUsVUFBVSxZQUFZLFNBQVMsU0FBUyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZXBEO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsU0FBUyxTQUFTLENBQUM7QUFBQSxJQUNwRCxDQUFDLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixTQUFTLFVBQVUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRckQsR0FBRztBQUFBLEVBQ0w7QUFBQSxFQUVBLGFBQWE7QUFBQSxJQUNYLEtBQUFDO0FBQUEsSUFDQSxTQUFBQztBQUFBLElBQ0EsR0FBRztBQUFBLElBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTUEsYUFBYSxDQUFDLEVBQUUsTUFBTSxVQUFVLE1BQU0sOEJBQThCLENBQUM7QUFBQSxJQUVyRSxVQUFVO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBRUEsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUE7QUFBQSxRQUVFO0FBQUE7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUFBLEVBRUEsVUFBVTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsT0FBTyxJQUFJO0FBRVQsU0FBRyxJQUFJLFlBQVk7QUFBQSxJQUVyQjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogWyJuYXYiLCAic2lkZWJhciIsICJzaWRlYmFyIiwgInBhdGgiLCAiZnMiLCAicGF0aCIsICJmcyIsICJwYXRoIiwgIm5hdiIsICJzaWRlYmFyIl0KfQo=
