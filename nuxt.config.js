const webpack = require("webpack")
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1.6"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "og:type",
        content: "article"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  link: [],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
        const vueLoader = config.module.rules.find(
          rule => rule.loader === "vue-loader"
        )
        vueLoader.options.transformToRequire["img"] = ["src", "data-src"]
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ]
  },
  modules: [
    "~/modules/typescript.js",
    [
      "nuxt-sass-resources-loader",
      ["@/assets/sass/_mixin.scss", "@/assets/sass/style.scss"]
    ]
  ],
  plugins: ["~plugins/scroll.js"],
  generate: {
    // minify: false
    minify: {
      collapseBooleanAttributes: false,
      collapseWhitespace: false,
      decodeEntities: false,
      minifyCSS: false,
      minifyJS: false,
      processConditionalComments: false,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: false,
      removeOptionalTags: false,
      removeRedundantAttributes: false,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: false,
      sortClassName: false,
      trimCustomFragments: false,
      useShortDoctype: false
    }
  }
}
