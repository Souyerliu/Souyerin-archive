// cannot use path alias here because unocss can not resolve it
import { defineConfig } from "./toolkit/themeConfig.ts";

export default defineConfig({
  siteName: "Souyer's Archive",
  locale: "zh-CN",
  nav: [
    { href: "/", text: "首页", icon: "i-ri-home-line" },
    {
      text: "文章",
      href: "/random/",
      icon: "i-ri-quill-pen-fill",
      dropbox: {
        enable: true,
        items: [
          { href: "/categories/", text: "分类", icon: "i-ri-book-shelf-fill" },
          { href: "/tags/", text: "标签", icon: "i-ri-price-tag-3-fill" },
          { href: "/archives/", text: "归档", icon: "i-ri-archive-line" },
        ],
      },
    },
    {
      text: "主站",
      href: "https://souyerin.top",
      icon: "i-ri-external-link-line",
    },
  ],
  brand: {
    title: "Souyer's Archive",
    subtitle: "Souyer的博客存档",
    logo: "",
  },
  cover: {
    enable: true,
    preload: true,
    advancedCarousel: false,
    fixedCover: { enable: true, url: "/images/bg.webp" },
    nextGradientCover: false,
  },
  sidebar: {
    author: "Souyer",
    description: "日日进化中！",
    social: {
      github: { url: "https://github.com/Souyerliu", icon: "i-ri-github-fill" },
      bilibili: {
        url: "https://space.bilibili.com/474896469",
        icon: "i-ri-bilibili-fill",
      },
      netease: {
        url: "https://music.163.com/#/user/home?id=1478960573",
        icon: "i-ri-netease-cloud-music-line",
      },
      email: { url: "mailto:zsy142857@126.com", icon: "i-ri-mail-line" },
    },
  },
  footer: {
    since: 2025,
    icon: { name: "sakura rotate", color: "var(--color-pink)" },
    count: true,
    powered: true,
    icp: {
      enable: false,
      icpnumber: "萌ICP备20260616号",
      icpurl: "https://icp.gov.moe/?keyword=20260616",
    },
  },
  tagCloud: {
    startColor: "var(--grey-6)",
    endColor: "var(--color-blue)",
  },
  widgets: {
    randomPosts: true,
    recentComments: true,
    recentCommentsLimit: 10,
    recentCommentsSiteRole: "archive",
  },
  comments: {
    enable: true,
    waline: {
      serverURL: "https://souyerincomments.dpdns.org",
      lang: "zh-CN",
      dark: 'html[data-theme="dark"]',
      emoji: [
        "https://fastly.jsdelivr.net/npm/@waline/emojis@1.1.0/weibo",
        "https://fastly.jsdelivr.net/npm/@waline/emojis@1.1.0/alus",
        "https://fastly.jsdelivr.net/npm/@waline/emojis@1.1.0/bilibili",
        "https://fastly.jsdelivr.net/npm/@waline/emojis@1.1.0/qq",
        "https://fastly.jsdelivr.net/npm/@waline/emojis@1.1.0/tieba",
        "https://fastly.jsdelivr.net/npm/@waline/emojis@1.1.0/tw-emoji",
      ],
    },
  },
  home: {
    selectedCategories: [
      { name: "CS70", cover: "/images/penguin_and_pigeon.png" },
      { name: "人工智能导论", cover: "/images/cover.jpg" },
      { name: "CS61A", cover: "/images/61A-header.png" },
      { name: "数学", cover: "/images/mathchalkboard.jpg" },
      { name: "DATA8", cover: "/images/valentine_logo.png" },
      { name: "CS127", cover: "/images/EECS127.webp" },
    ],
    pageSize: 10,
    // 首页及分页文章卡片优先显示本地数据库中的 AI 摘要
    excerptSource: "ai",
    title: { behavior: "default", customTitle: "" },
  },
  layout: {
    mode: "three-column",
    rightSidebar: {
      order: ["announcement", "search", "calendar", "recentMoments", "randomPosts", "tagCloud"],
      announcement: true,
      search: true,
      calendar: true,
      recentMoments: true,
      randomPosts: true,
      tagCloud: true,
    },
  },
  friends: {
    title: "友链",
    description: "卡片式展示，支持站点预览与主题色点缀。",
    comments: false,
    links: [
      {
        url: "https://astro.build/",
        title: "Astro",
        desc: "全站体验轻快的静态站点框架，适合内容型站点与博客。",
        author: "Astro Team",
        avatar: "https://avatars.githubusercontent.com/u/44914786?s=200&v=4",
        color: "var(--color-orange)",
        siteImage: "https://astro.build/assets/press/astro-logo-dark.svg",
      },
      {
        url: "https://svelte.dev/",
        title: "Svelte",
        desc: "编译时框架，现代与简洁，组件写起来很顺手。",
        author: "Svelte Team",
        avatar: "https://avatars.githubusercontent.com/u/23617963?s=200&v=4",
        color: "var(--color-red)",
      },
    ],
  },
  copyright: {
    license: "CC-BY-NC-SA-4.0",
    show: true,
  },
});
