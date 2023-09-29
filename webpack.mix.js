// webpack.mix.js
let mix = require('laravel-mix');

mix
  .disableSuccessNotifications()
  // .postCss('./src/ckeditor5.css', 'build', [
  //   require('tailwindcss')
  // ])
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
