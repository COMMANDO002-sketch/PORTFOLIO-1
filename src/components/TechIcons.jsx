const svgProps = (color) => ({
  viewBox: '0 0 24 24',
  width: 30,
  height: 30,
  fill: color,
  'aria-hidden': true,
});

const ReactIcon = (props) => (
  <svg {...svgProps('#61dafb')} {...props}>
    <circle cx="12" cy="12" r="2.2" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4.1" fill="none" stroke="currentColor" strokeWidth="0.8" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4.1" fill="none" stroke="currentColor" strokeWidth="0.8" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4.1" fill="none" stroke="currentColor" strokeWidth="0.8" transform="rotate(120 12 12)" />
  </svg>
);

const TypeScriptIcon = (props) => (
  <svg {...svgProps('#3178c6')} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178c6" />
    <path fill="#fff" d="M13.8 12.9c0 .8.7 1.3 1.8 1.7 1 .4 1.4.8 1.4 1.3 0 .6-.5 1-1.4 1-.9 0-1.5-.3-2-.9l-1.9 1.1c.5.9 1.5 1.5 3.2 1.5 1.9 0 3.2-1 3.2-2.6 0-1.5-1.1-2.3-2.6-2.8-1-.4-1.4-.7-1.4-1 0-.4.4-.8 1.3-.8.7 0 1.3.2 1.7.8l1.6-1.1c-.6-1-1.6-1.5-3.1-1.5-1.8 0-3 1.1-3 2.5zM7.9 4.7h4V6.3h-1.6v8.1H8.4V6.3H6.8V4.7h1.1z" transform="translate(0.3 0)" />
  </svg>
);

const TailwindIcon = (props) => (
  <svg {...svgProps('#38bdf8')} {...props}>
    <path fill="#38bdf8" d="M12 5.2C9.6 5.2 8.1 6.5 7.4 8.9c1.1-.9 2.1-1.1 3.2-.7.6.2 1 .7 1.5 1.2.5.6 1.1 1.2 2.5 1.2 2.4 0 3.9-1.3 4.6-3.7-1.1.9-2.1 1.1-3.2.7-.6-.2-1-.7-1.5-1.2-.6-.6-1.2-1.2-2.5-1.2zM5.3 10.7C2.9 10.7 1.4 12 0.7 14.4c1.1-.9 2.1-1.1 3.2-.7.6.2 1 .7 1.5 1.2.6.6 1.2 1.2 2.5 1.2 2.4 0 3.9-1.3 4.6-3.7-1.1.9-2.1 1.1-3.2.7-.6-.2-1-.7-1.5-1.2-.6-.6-1.2-1.2-2.5-1.2z" transform="translate(0.5 0)" />
  </svg>
);

const HtmlIcon = (props) => (
  <svg {...svgProps('#e34f26')} {...props}>
    <path fill="#e34f26" d="M4.1 2h15.8l-1.4 15.9L12 20.6 5.5 17.9 4.1 2zm4.1 7.3h8.1l.3-3H8.2l.4-3.5h6.9l-.3 3H8.6l.5 3.5zm.2 1.9.4 4.2 3.2 1.2 3.2-1.2.4-4.2H8.4z" />
  </svg>
);

const CssIcon = (props) => (
  <svg {...svgProps('#1572b6')} {...props}>
    <path fill="#1572b6" d="M5.1 2h13.8l-1.3 14.6L12 19.7l-5.6-3.1L5.1 2zm1.4 2.1 1 11.3 4.5 2.5 4.5-2.5 1-11.3H6.5zm9.2 3H8.6l.2 2.3h6.7l-.2 2.5h-4.6l.2 2.1 1.3.3 1.3-.3.1-1.1h2.1l-.2 2.7L11.8 18l-3.3-1.4-.2-2.7h1.5l.1 1.2 1.4.6 1.4-.6.1-1.5H8.3l-.3-3.7h8l.2-2.6z" />
  </svg>
);

const PhpIcon = (props) => (
  <svg {...svgProps('#777bb4')} {...props}>
    <ellipse cx="5.5" cy="12" rx="5" ry="6" fill="#777bb4" />
    <ellipse cx="18.5" cy="12" rx="5" ry="6" fill="#777bb4" />
    <circle cx="12" cy="12" r="4" fill="#777bb4" />
  </svg>
);

const LaravelIcon = (props) => (
  <svg {...svgProps('#ff2d20')} {...props}>
    <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M5 2l-1.6 1.6v16.8L5 22l2.5-2.5 3.7-3.7 3.3 3.3L18 21.5l3.6-3.6V3.6L20 2H5z" />
    <path fill="currentColor" d="M8.5 13.6L12 10.1l6-6-1.5-1.5-4.5-4.5-1.5 1.5v4.6L7.5 7.2H2.9L1.4 8.7l7.1 4.9z" transform="translate(1 -1)" />
  </svg>
);

const NextjsIcon = (props) => (
  <svg {...svgProps('#ffffff')} {...props}>
    <circle cx="12" cy="12" r="10" fill="none" stroke="#ffffff" strokeWidth="1.4" />
    <path fill="#ffffff" d="M8.5 16.5V7.5h1.9v4.4L15 7.5h2.2l-4.2 4.5 4.4 4.5h-2.4l-3.4-3.7v3.7H8.5z" />
  </svg>
);

const JavaScriptIcon = (props) => (
  <svg {...svgProps('#f7df1e')} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#f7df1e" />
    <path fill="#000" d="M13.8 17.8c.5.9 1.2 1.6 2.7 1.6 1.1 0 1.9-.6 1.9-1.4 0-1-.8-1.3-2.1-1.8l-.7-.3c-2-1-3.3-2.2-3.3-4.7 0-2.3 1.7-4 4.3-4 1.9 0 3.2.7 4.2 2.4l-2.3 1.5c-.5-.9-1-1.3-1.9-1.3-.9 0-1.4.6-1.4 1.3 0 .9.6 1.3 1.9 1.8l.7.3c2.4 1 3.7 2 3.7 4.5 0 2.6-2 4-4.7 4-2.7 0-4.4-1.3-5.3-3l2.3-1.4zM5.8 14.6c.4.8.8 1.2 1.5 1.2.8 0 1.2-.3 1.2-1.6V7h2.8v7.3c0 2.7-1.6 4-3.9 4-2.1 0-3.4-1.1-4.1-2.5l2.5-1.2z" transform="translate(-.2 -1.5)" />
  </svg>
);

const MySQLIcon = (props) => (
  <svg {...svgProps('#4479a1')} {...props}>
    <path fill="#4479a1" d="M12 1.5C6.5 1.5 2 5.8 2 11.2c0 3 1.5 5.7 3.8 7.3-.1-.6-.2-1.6 0-2.3l1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.3 1 .5 1.9 1.6 1.9 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.4-3.8-3.9-3.8-2.8 0-4.5 2.1-4.5 4.3 0 .8.3 1.7.6 2.2l-1.3 5.2c-.2.9-.2 1.7 0 2.4 2.2 1.4 5 2 7.5 1.6 5-1 8.5-5.3 8.5-10.4C22 5.8 17.5 1.5 12 1.5z" />
  </svg>
);

const techIcons = {
  react: ReactIcon,
  typescript: TypeScriptIcon,
  tailwind: TailwindIcon,
  html: HtmlIcon,
  css: CssIcon,
  php: PhpIcon,
  laravel: LaravelIcon,
  nextjs: NextjsIcon,
  javascript: JavaScriptIcon,
  mysql: MySQLIcon,
};

export default techIcons;