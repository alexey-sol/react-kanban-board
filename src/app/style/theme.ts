export const theme = {
  borderRadius: {
    lg: '0.5rem',
    md: '0.25rem',
  },

  breakpoints: {
    lg: '992px',
    md: '768px',
    sm: '576px',
  },

  colors: {
    grey: '#C4CAD0',
    greyLightest: '#FCFCFC',
    orange: '#F87060',
    primary: '#7871AA',
    purpleDark: '#242331',
    secondary: '#F4D58D',
    white: '#ffffff',
  },

  components: {
    board: {
      card: { paddingX: '0.5rem' },
      column: {
        minWidth: '300px',
        width: '500px',
      },
      listItem: { minHeight: '3rem' },
    },
    dragLayer: { opacity: 0.3 },
  },

  durations: {
    fast: '50ms',
    normal: '100ms',
  },

  zIndex: { modal: 10 },
} as const;
