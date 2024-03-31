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

  colors: { blue: '#afc1d6' },

  components: {
    board: {
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
