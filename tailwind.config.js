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
        'md-teal': '#107180',
        'teal': '#48C0B9',
        'light-teal': '#ecf9f8',
        'yellow': '#ffc42d',
        'orange': '#f07537',
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
    'aspect-square',
    'bg-cover','bg-dark-teal/80', 'bg-light-teal', 'bg-md-teal',
    'border-0', 'border-4', 'border-dark-teal',
    'col-1', 'col-2', 'col-span-3',
    'cursor-pointer',
    'duration-300',
    'first-of-type--ms-0',
    'font-extrabold', 'font-semibold', 'font-normal',
    'gap-5',
    'grid', 'grid-cols-1', 'grid-cols-2', 'grid-cols-6',
    'group', 'group-hover--block', 'group-hover--hidden', 'group-hover--text-md-teal', 'group-hover--text-white',
    'h-16', 'h-390', 'h-[390px]', 'h-fit',
    'hidden',
    'hover--bg-md-teal', 'hover--bg-dark-teal', 'hover--border-md-teal', 'hover--border-dark-teal', 'hover--text-light-teal', 'hover--underline',
    'items-center',
    'justify-center',
    'last-of-type--me-0',
    'leading-4', 'leading-5', 'leading-9',
    'lg--grid-cols-6',
    'list-none',
    'm-2', 'mb-2', 'mb-5', 'mb-10', 'me-2', 'me-3', 'me-4', 'ms-4', 'mt-[3px]', 'mx-5',
    'max-w-[240px]',
    'md--w-1/3', 'md--grid-cols-2', 'md--grid-cols-3', 'md--grid-cols-4',
    'no-underline',
    'open:bg-white',
    'p-2', 'p-3','p-4', 'p-5', 'p-10', 'ps-0', 'ps-2.5', 'ps-5', 'pe-2.5', 'pe-10', 'px-2.5', 'px-5', 'px-50%', 'py-2', 'py-3', 'py-4', 'py-10', 'py-14',
    'relative',
    'row-span-2',
    'shrink-0',
    'sm--grid-cols-2',
    'sticky',
    'text-lg', 'text-2xl', 'text-[32px]', 'text-center', 'text-dark-teal', 'text-white',
    'top-0',
    'w-6', 'w-9', 'w-24', 'w-[90%]', 'w-full',
    '-mx-50%',
    '[&>*]--border', '[&>*]--border-solid', '[&>*]--border-black',  '[&>*]--px-1.5', '[&>*]--py-0.5', '[&>*]--no-underline', 'hover--[&>*]--border-dark-teal'
  ],
  // Drupal filters out special characters
  separator: '--',
}
