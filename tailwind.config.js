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
        'dark-gray': '#707070',
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
    'absolute',
    'align-top',
    'align-middle',
    'aspect-square',
    'bg-blue-200',
    'bg-cover',
    'bg-dark-teal',
    'bg-dark-teal/90',
    'bg-light-teal',
    'bg-md-teal',
    'bg-md-teal-transparent',
    'bg-no-repeat',
    'bg-orange',
    'bg-orange-500',
    'bg-yellow',
    'bg-right',
    'bg-slate-100',
    'bg-teal',
    'bg-white/80',
    'block',
    'border',
    'border-0',
    'border-4',
    'border-b',
    'border-b-2',
    'border-b-8',
    'border-black',
    'border-collapse',
    'border-dark-teal',
    'border-light-gray',
    'border-gray',
    'border-md-teal',
    'border-orange',
    'border-spacing-0',
    'border-t-0',
    'border-t-4',
    'border-x-0',
    'border-yellow',
    'bottom-0',
    'col-1',
    'col-2',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'lg--col-start-10',
    'col-start-10',
    'cursor-pointer',
    'drop-shadow-md',
    'duration-300',
    'first-of-type--ms-0',
    'flex-col-reverse',
    'flex-wrap',
    'flex-1',
    'float-left',
    'font-bold',
    'font-extrabold',
    'font-light',
    'font-normal',
    'font-medium',
    'font-semibold',
    'gap-4',
    'gap-5',
    'gap-8',
    'gap-10',
    'gap-x-10',
    'gap-y-5',
    'grid',
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-[70%_1fr]',
    'group',
    'group-hover--block',
    'group-hover--hidden',
    'group-hover--text-md-teal',
    'group-hover--text-white',
    'h-10',
    'h-11',
    'h-12',
    'h-16',
    'h-390',
    'h-[350px]',
    'h-[390px]',
    'h-[500px]',
    'h-auto',
    'h-fit',
    'h-full',
    'hidden',
    'hover--bg-dark-teal',
    'hover--bg-md-teal',
    'hover--border-dark-teal',
    'hover--border-md-teal',
    'hover--border-orange',
    'hover--no-underline',
    'hover--opacity-80',
    'hover--text-orange',
    'hover--text-light-teal',
    'hover--text-dark-teal',
    'hover--text-md-teal',
    'hover--underline',
    'hover--[&>*]--border-dark-teal',
    'hover--[&>*]--underline',
    'inline-block',
    'inset-x-1/4',
    'items-start',
    'items-center',
    'items-end',
    'justify-between',
    'justify-center',
    'justify-end',
    'justify-start',
    'last-of-type--me-0',
    'leading-none',
    'leading-4',
    'leading-5',
    'leading-9',
    'leading-tight',
    'left-0',
    'left-1.5',
    'lg--grid-cols-4',
    'lg--grid-cols-6',
    'list-none',
    'no-underline',
    'marker--text-md-teal',
    'mb-0',
    'mb-1',
    'mb-2',
    'mb-3',
    'mb-4',
    'mb-5',
    'mb-6',
    'mb-8',
    'mb-10',
    'mb-16',
    'me-1',
    'me-2',
    'me-3',
    'me-4',
    'me-7',
    'me-10',
    'me-16',
    'me-20',
    'ml-0',
    'ms-0',
    'ms-2',
    'ms-4',
    'ms-5',
    'ms-20',
    'ms-auto',
    'mt-0',
    'mt-4',
    'mt-6',
    'mt-8',
    'mt-10',
    'mt-12',
    'mt-auto',
    'mt-[3px]',
    'mx-0.5',
    'mx-1',
    'mx-2',
    'mx-5',
    'my-1.5',
    'my-3',
    'my-5',
    'my-6',
    'my-10',
    'max-w-100',
    'max-w-[150px]',
    'max-w-[240px]',
    'max-w-[860px]',
    "md--bg-[url('/sites/default/files/cssn/dot-line-bg.jpg')]",
    'md--block',
    'md--col-span-1',
    'md--col-span-2',
    'md--col-span-3',
    'md--col-span-4',
    'md--col-span-6',
    'md--container',
    'md--flex-row',
    'md--gap-10',
    'md--grid-cols',
    'md--grid-cols-2',
    'md--grid-cols-3',
    'md--grid-cols-4',
    'md--grid-cols-10',
    'md--grid-cols-[1fr_25%]',
    'md--grid-cols-[25%_1fr]',
    'md--grid-cols-[25%_1fr_25%]',
    'md--hidden',
    'md--items-center',
    'md--justify-center',
    'md--justify-end',
    'md--mb-5',
    'md--mt-5',
    'md--mt-6',
    'md--mt-10',
    'md--mt-14',
    'md--mt-16',
    'md--mx-auto',
    'md--order-1',
    'md--order-2',
    'md--p-10',
    'md--pb-0',
    'md--pb-10',
    'md--pe-10',
    'md--pt-0',
    'md--px-10',
    'md--text-center',
    'md--w-1/5',
    'md--w-1/3',
    'md--w-1/2',
    'md--w-9/12',
    'md--w-full',
    'ml--col-span-3',
    'ml--grid-cols-2',
    'ml--grid-cols-3',
    'ml--grid-cols-4',
    'ms-auto',
    'mt-8',
    'mx-auto',
    'my-0',
    'my-2',
    'object-contain',
    'open:bg-white',
    'order-1',
    'order-2',
    'order-3',
    'overflow-x-clip',
    'p-0',
    'p-1',
    'p-2',
    'p-3',
    'p-4',
    'p-5',
    'p-10',
    'pb-4',
    'pb-5',
    'pb-10',
    'pb-32',
    'pe-2.5',
    'pe-4',
    'pe-10',
    'pe-20',
    'ps-0',
    'ps-2.5',
    'ps-5',
    'pt-0',
    'pt-1',
    'pt-0.5',
    'pt-4',
    'pt-10',
    'pt-20',
    'pt-24',
    'px-1.5',
    'px-2.5',
    'px-4',
    'px-5',
    'px-10',
    'px-50%',
    'py-0.5',
    'py-2',
    'py-3',
    'py-4',
    'py-5',
    'py-10',
    'py-14',
    'relative',
    'right-0',
    'right-28',
    'rounded-full',
    'row-span-2',
    'shrink-0',
    'sm--grid-cols-2',
    'sm--pb-40',
    'sm--py-0',
    'sticky',
    'text-center',
    'text-dark-teal',
    'text-md-teal',
    'text-orange',
    'text-sm',
    'text-sky-900',
    'text-teal',
    'text-lg',
    'text-white',
    'text-white-er',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-5xl',
    'text-xs',
    'text-[32px]',
    'top-0',
    'top-1.5',
    'top-4',
    'top-10',
    'top-1/4',
    'underline',
    'w-6',
    'w-9',
    'w-20',
    'w-24',
    'w-40',
    'w-56',
    'w-60',
    'w-72',
    'w-80',
    'w-96',
    'w-2/5',
    'w-9/12',
    'w-[494px]',
    'w-[90%]',
    'w-auto',
    'w-fit',
    'w-full',
    'w-max',
    'whitespace-nowrap',
    'z-10',
    '[&>*]--border',
    '[&>*]--border-black',
    '[&>*]--border-solid',
    '[&>*]--no-underline',
    '[&>*]--mb-2',
    '[&>*]--me-2',
    '[&>*]--px-2',
    '[&>*]--py-1',
    '[&>*]--text-white',
    '[&_a]--block',
    '[&_a]--border',
    '[&_a]--font-bold',
    '[&_a]--font-normal',
    '[&_a]--hover--border-dark-teal',
    '[&_a]--inline-block',
    '[&_a]--no-underline',
    '[&_a]--mb-2',
    '[&_a]--me-2',
    '[&_a]--mx-2',
    '[&_a]--my-1',
    '[&_a]--px-2',
    '[&_a]--py-1',
    '[&_a]--whitespace-nowrap',
    '[&_.form-checkboxes]--flex-col',
    '[&_.form-text]--w-full',
    '[&_div]--h-full',
    '[&_div]--flex',
    '[&_div]--flex-wrap',
    '[&_div.label-description]--font-normal',
    '[&_select]--pr-8',
    '[&_summary]--font-bold',
    '[&_legend]--font-bold',
    '[&>div.form-item]--flex',
    '[&>div.form-item]--flex-col',
    '[&>div.form-item]--max-w-56',
    '[&>div.form-item]--w-[46%]',
    '[&>div\:nth-of-type(1)]--md--order-1',
    '[&>div\:nth-of-type(2)]--md--order-2',
    '[&>div\:nth-of-type(1)]--order-2',
    '[&>div\:nth-of-type(2)]--order-1',
    '[&_img]--object-contain',
    '[&_img]--h-auto',
    '[&_img]--m-0',
    '[&_label]--font-bold',
    '[&_select]--w-full',
    '[&_ul]--list-none',
    '[&_li]--inline-block',
    '[&_li]--ms-0',
    '[&_li]--me-1',
    '[&_li]--mb-3',
    '[&_li]--relative',
    '[&_li]--z-10',
    '-mx-50%',
    '[&_td]--p-5',
  ],
  // Drupal filters out special characters
  separator: '--',
}
