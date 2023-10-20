const { colors } = require('laravel-mix/src/Log');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // preflight: false,
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
        'md-teal-transparent': 'rgba(16, 113, 128, 0.8)',
        'teal': '#48C0B9',
        'light-teal': '#ecf9f8',
        'yellow': '#ffc42d',
        'orange': '#f07537',
        'light-gray': '#f2f2f2',
        'gray': '#d2d2d2',
        'black': '#232323',
        'white': '#ffffff',
        'white-er': '#ffffff',
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
              'font-weight': '800',
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
            h4: {
              fontSize: '18px',
              'font-weight': '700',
              color: theme('colors.black'),
              'line-height': '20px'
            },
            p: {
              fontSize: '18px',
              'line-height': '30px',
              'font-weight': '400',
              'margin-top': '0px',
              'margin-bottom': '20px',
            },
            img: {
              margin: '0px',
            },
            'ul > li::marker': {
              color: 'var(--black)',
            },
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'absolute', 'relative',
    'align-top',
    'aspect-square',
    'bg-cover', 'bg-dark-teal', 'bg-dark-teal/80', 'bg-light-teal', 'bg-md-teal', 'bg-no-repeat',
    'bg-orange',
    'bg-orange-500',
    'bg-right',
    'bg-md-teal-transparent',
    'bg-cover', 'bg-dark-teal', 'bg-dark-teal/90', 'bg-light-teal', 'bg-md-teal', 'bg-no-repeat', 'bg-orange', 'bg-orange-500', 'bg-right',
    "bg-[url('/sites/default/files/cssn/dot-line-bg.jpg')]",
    'block',
    'border', 'border-0', 'border-4', 'border-b', 'border-b-2', 'border-dark-teal', 'border-orange',
    'border-black',
    'border-b',
    'border-x-0',
    'border-t-0',
    'border-spacing-0',
    'border-collapse',
    'bottom-0',
    'col-1', 'col-2', 'col-span-2', 'col-span-3',
    'cursor-pointer',
    'drop-shadow-md',
    'duration-300',
    'first-of-type--ms-0',
    'flex-wrap',
    'float-left',
    'font-extrabold', 'font-bold', 'font-semibold',
    'gap-5', 'gap-8', 'gap-10',
    'grid', 'grid-cols-1', 'md--grid-cols-2', 'grid-cols-2', 'grid-cols-6', 'grid-cols-[70%_1fr]',
    'font-bold', 'font-extrabold', 'font-normal', 'font-medium', 'font-semibold',
    'gap-5', 'gap-8', 'gap-10', 'gap-x-10', 'gap-y-5',
    'grid', 'grid-cols-1', 'grid-cols-2', 'grid-cols-6', 'grid-cols-[70%_1fr]',
    'group', 'group-hover--block', 'group-hover--hidden', 'group-hover--text-md-teal', 'group-hover--text-white',
    'h-10', 'h-16', 'h-390', 'h-[350px]', 'h-[390px]', 'h-[500px]', 'h-auto', 'h-fit', 'h-full',
    'hidden',
    'hover--bg-md-teal', 'hover--bg-dark-teal', 'hover--border-md-teal', 'hover--border-dark-teal', 'hover--border-orange', 'hover--text-light-teal', 'hover--underline',
    'hover--[&>*]--underline', 'hover--[&>*]--border-dark-teal',
    'inset-x-1/4',
    'items-center',
    'items-end',
    'justify-center',
    'last-of-type--me-0',
    'leading-4', 'leading-5', 'leading-9',
    'md--grid-cols',
    'leading-tight',
    'lg--grid-cols-6',
    'list-none',
    'm-0', 'm-1', 'm-2', 'mb-0', 'mb-1', 'mb-2', 'mb-3', 'mb-5', 'mb-6', 'mb-10', 'me-2', 'me-3', 'me-4', 'me-10', 'ml-0', 'ms-0', 'ms-4', 'ms-auto', 'ms-5', 'mt-0', 'mt-4', 'mt-6', 'mt-10', 'mt-12', 'mt-[3px]', 'mx-0.5', 'mx-1', 'mx-2', 'mx-5', 'my-5', 'my-10',
    'max-w-[240px]', 'max-w-100',
    'md--block',
    'md--hidden',
    'md--mt-16',
    'md--pe-10',
    'md--grid-cols-2', 'md--grid-cols-3', 'md--grid-cols-4', 'md--grid-cols-10', 'md--col-span-3', 'md--col-span-4', 'md--pb-0', 'md--pt-0', 'md--w-1/5', 'md--w-1/3', 'md--w-1/2',
    'no-underline',
    'object-contain',
    'open:bg-white',
    'overflow-x-hidden',
    'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-10', 'pb-4', 'pb-5', 'pb-10', 'pb-32', 'ps-0', 'ps-2.5', 'ps-5', 'pe-2.5', 'pe-10', 'pt-4', 'pt-10', 'pt-24',
    'px-1.5', 'px-2.5', 'px-4', 'px-5', 'px-10', 'px-50%', 'py-0.5', 'py-2', 'py-3', 'py-4', 'py-5', 'py-10', 'py-14',
    'relative',
    'right-0',
    'row-span-2',
    'shrink-0',
    'sm--grid-cols-2', 'sm--pb-40',
    'sticky',
    'text-sm', 'text-lg', 'text-xl', 'text-2xl', 'text-5xl', 'text-[32px]',
    'text-center', 'text-dark-teal', 'text-orange', 'text-white', 'text-white-er',
    'top-0', 'top-10', 'top-1/4',
    'w-6', 'w-9', 'w-20', 'w-24', 'w-40', 'w-56', 'w-60', 'w-72', 'w-80', 'w-96', 'w-2/5', 'w-[494px]', 'w-[90%]', 'w-auto', 'w-fit', 'w-full', 'w-max',
    '[&>*]--border', '[&>*]--border-solid', '[&>*]--border-black',
    '[&>*]--no-underline',
    '[&>*]--px-1.5', '[&>*]--py-0.5',
    '[&>*]--text-white',
    '[&_a]--font-bold',
    '[&_a]--no-underline',
    '[&_a]--whitespace-nowrap',
    '[&_div]--h-full',
    '[&_.form-checkboxes]--flex-col',
    '[&_img]--object-contain', '[&_img]--h-auto', '[&_img]--m-0',
    '[&_select]--w-full',
    '[&_label]--font-bold',
    '-mx-50%',
    'grid',
    'grid-cols-2',
    'gap-4'
  ],
  // Drupal filters out special characters
  separator: '--',
}
