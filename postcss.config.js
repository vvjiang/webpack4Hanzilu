module.exports = {
  plugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 320,
      viewportHeight: 568,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    })
  ]
}
