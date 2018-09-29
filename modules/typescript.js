import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"

export default function typescript() {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push("ts")

  // Extend build
  this.extendBuild(config => {
    // Add TypeScript loader
    config.module.rules.unshift({
      test: /((client|server)\.js)|(\.tsx?)$/,
      use: [
        { loader: "cache-loader" },
        {
          loader: "thread-loader",
          options: {
            workers: require("os").cpus().length - 1
          }
        },
        {
          loader: "ts-loader",
          options: {
            happyPackMode: true,
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      ],
      exclude: [/dist/, /\.nuxt/]
    })

    // Add TypeScript loader for vue files
    for (let rule of config.module.rules) {
      if (rule.loader === "vue-loader") {
        rule.options.loaders = rule.options.loaders || {}
        rule.options.loaders.ts = {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/]
          },
          exclude: [/dist/, /\.nuxt/]
        }
      }
    }

    // Add .ts extension in webpack resolve
    if (config.resolve.extensions.indexOf(".ts") === -1) {
      config.resolve.extensions.push(".ts")
    }

    // Add ts checker plugin, because thread-loader requires happyPackMode (which hides all errors)
    config.plugins.push(
      new ForkTsCheckerWebpackPlugin({
        checkSyntacticErrors: true,
        vue: true
      })
    )
  })
}
