import babel from "rollup-plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "dist/v-busy.js",
    format: "umd",
    name: "VueBusy.js"
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"]
    })
  ]
};
