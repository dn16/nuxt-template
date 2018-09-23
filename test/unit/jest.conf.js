const path = require("path")

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1"
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  setupFiles: ["<rootDir>/test/unit/setup"],
  // mapCoverage: true,
  coverageDirectory: "<rootDir>/test/unit/coverage",
  collectCoverageFrom: ["components/**/*.{js,vue}"]
}
