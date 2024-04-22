/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Crypto Arsenal',
  tagline: 'Documentation & Guides',
  url: 'https://docs.crypto-arsenal.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Crypto-Arsenal', // Usually your GitHub org/user name.
  projectName: 'public', // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 300, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    async function tailwindPlugin(context, options) {
      return {
        name: 'tailwind-plugin',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins = [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
          ];
          return postcssOptions;
        },
      };
    },
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],
  themeConfig: {
    // announcementBar: {
    //   id: 'support_us',
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: false,
    // },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    tableOfContents: {
      minHeadingLevel: 3,
      maxHeadingLevel: 5,
    },
    docs: {
      sidebar: {
        hideable: false
      }
    },
    navbar: {
      style: 'dark',
      title: 'Crypto Arsenal',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Developer 👩🏻‍💻',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'developer/get-started/python/hello-world',
              label: 'Python 🐍',
            },
            {
              type: 'docSidebar',
              sidebarId: 'tradingview',
              label: 'TradingView 🔭',
            },
          ]
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'trader',
          label: 'Trader 🤖',
        },
        { to: '/blog', label: 'Blog ✍️', position: 'left' },
        // {
        //   href: 'https://help.crypto-arsenal.io/en/',
        //   label: 'Help',
        //   position: 'left',
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://crypto-arsenal.io/',
          label: 'App',
          position: 'right',
        },
        {
          href: 'https://status.crypto-arsenal.io/',
          label: 'Status',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              href: 'https://help.crypto-arsenal.io/en/',
              label: 'Help',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussion',
              href: 'https://github.com/Crypto-Arsenal/public/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/x8TTVEnG',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/TG_Crypto_Arsenal',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MCryptoarsenal',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@crypto.arsenal.mrkt',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Crypto-Arsenal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crypto Arsenal, Inc. Built with ❤️ & ☕`,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['zh-tw', 'en'],
  },

  presets: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Crypto-Arsenal/public/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Crypto-Arsenal/public/edit/master/blog/',
          // routeBasePath: '/',
          path: 'blog',
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Crypto Arsenal`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingID: 'G-JRERR47R34',
          // Optional fields.
          anonymizeIP: false, // Should IPs be anonymized?
        },
        googleAnalytics: {
          trackingID: 'G-JRERR47R34',
          // Optional fields.
          anonymizeIP: false, // Should IPs be anonymized?
        },
      },
    ],
  ],
};
