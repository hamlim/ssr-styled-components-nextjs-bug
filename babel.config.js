module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);

  let cfg = ["@babel/preset-env", { bugfixes: true }];
  if (process.env.NODE_ENV === "test") {
    cfg = [
      "@babel/preset-env",
      {
        targets: {
          node: 8,
        },
      },
    ];
  }
  return {
    presets: [cfg, ["@babel/preset-react", { runtime: "automatic" }]],
    plugins: [
      "babel-plugin-preval",
      ["babel-plugin-styled-components", { ssr: true }],
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-export-default-from",
      [
        "@babel/plugin-transform-typescript",
        {
          // force typescript to support jsx in all files no matter the extension I guess
          isTSX: true,
          allExtensions: true,
          allowDeclareFields: true,
          onlyRemoveTypeImports: true,
        },
      ],
    ],
    ignore:
      process.env.NODE_ENV !== "test"
        ? ["src/test.js", "src/__fixtures__/**/*.js"]
        : [],
  };
};
