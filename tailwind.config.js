const { colors } = require('laravel-mix/src/Log');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './templates/**/*.html.twig',
    './js/**/*.js',
    './aspTheme.theme'
  ],
  theme: {
    /* Defaults for typography, colors, etc go here */
    extend: {
      colors: {
        'dark-teal': '#1A5B6E',
        'md-teal': '#138597',
        'teal': '#48C0B9',
        'light-teal': '#ecf9f8',
        'yellow': '#ffc42d',
        'light-gray': '#f2f2f2',
        'gray': '#d2d2d2',
        'black': '#232323',
        'white': '#ffffff'
      },
      fontSize: {
        'menu': '14px'
      },
      // Additional responsive screen size
      screens: {
        'ml': '900px',
      },
      spacing: {
        '50%': '50%',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            a: {
              color: theme('colors.black'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.dark-teal'),
                textDecoration: 'none'
              },
            },
            h1: {
              fontSize: '36px',
              'font-weight': '500',
              'font-stretch': '70%',
              'margin-top': '60px',
              'margin-bottom': '36px'
            },
            h2: {
              fontSize: '24px',
              'font-weight': '700',
              'margin-top': '0px',
              'margin-bottom': '20px'
            },
            h3: {
              fontSize: '20px',
              'font-weight': '700',
              color: theme('colors.dark-teal'),
              'line-height': '24px'
            },
            p: {
              fontSize: '18px',
              'line-height': '30px',
              'font-weight': '400',
              'margin-top': '0px',
              'margin-bottom': '20px',
            }
          },
        },
      }),
    },
    container: {
      center: true,
    },
    // Responsive screen sizes
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'text-white',
    'hover--bg-md-teal',
    'bg-cover',
    'h-390'
  ],
  // Drupal filters out special characters
  separator: '--',
}
