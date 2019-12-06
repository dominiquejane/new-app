// // const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  },
}
//   configureWebpack: {
//     // module: {
//     //   rules: [
//     //     { test: /\.vue$/, use: 'vue-loader' },
//     //     { test: /\.pug$/, use: 'pug-plain-loader' },
//     //     {
//     //       test: /\.styl(us)?$/,
//     //       use: [
//     //         'vue-style-loader',
//     //         'css-loader',
//     //         'stylus-loader'
//     //       ]
//     //     },
//     //   ],
//     // },

//     // plugins: [
//     //   new VuetifyLoaderPlugin({
//     //     /**
//     //      * This function will be called for every tag used in each vue component
//     //      * It should return an array, the first element will be inserted into the
//     //      * components array, the second should be a corresponding import
//     //      *
//     //      * originalTag - the tag as it was originally used in the template
//     //      * kebabTag    - the tag normalised to kebab-case
//     //      * camelTag    - the tag normalised to PascalCase
//     //      * path        - a relative path to the current .vue file
//     //      * component   - a parsed representation of the current component
//     //      */
//     //     match(originalTag, { kebabTag, camelTag, path, component }) {
//     //       if (kebabTag.startsWith('My-')) {
//     //         return [camelTag, `import ${camelTag} from '@djane/summa-components/src/components/Button/${camelTag.substring(4)}.vue'`]
//     //       }
//     //     }
//     //   })
//     // ],

//     resolve: {
//       alias: {
//         vue$: 'vue/dist/vue.esm.js',
//       },
//       symlinks: false
//     },
//   }
// }
