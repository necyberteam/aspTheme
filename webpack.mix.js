// webpack.mix.js
let mix = require('laravel-mix');

mix
  .disableSuccessNotifications()
  // .postCss('./src/ckeditor5.css', 'build', [
  //   require('tailwindcss')
  // ])
  .js(['node_modules/tippy.js/dist/tippy.cjs.js', 'src/js/global.js'], 'build/js/global.js')
  .postCss('./node_modules/tippy.js/dist/tippy.css', 'build')
  .postCss('./src/main.css', 'build', [
    require('tailwindcss'),
    // require('autoprefixer'), - enable this if too many conflicts with Drupal CSS -- prefixes everything with tw-
  ])
  .browserSync({
    proxy: 'mysite.freelock.net',
    files: [
      'build/main.css',
      'templates/**/*',
      'aspTheme.theme',
    ]
  })
