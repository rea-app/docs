/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Réa.' /* title for your website */,
  tagline: 'Tout savoir sur les fonctionnalités de Réa.',
  url: 'https://docs.rea-app.fr' /* your website url */,
  cname: 'docs.rea-app.fr' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'rea-app',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  algolia: {
    apiKey: 'e15978ba4a41ad5f231bddcdf8d1e525',
    indexName: 'rea-app',
    placeholder: 'Rechercher' 
  },

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // {doc: 'documentation', label: 'Documentation'},
    // {page: 'help', label: 'Aide'},
  ],
  disableHeaderTitle: true,

  /* path to images for header/footer */
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo_150.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#007bff',
    // primaryColor: '#00bfff',
    secondaryColor: '#ff1c68',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    '© ' +
    new Date().getFullYear() +
    ' Réa.',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ["https://player.vimeo.com/api/player.js"],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/logo_150.png',
  twitterImage: 'img/logo_150.png',

  cleanUrl: true,
  scrollToTop: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
