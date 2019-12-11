const styles = ({ app, breakpoints, typography }) => ({
  '@global': {
    html: {
      [breakpoints.up('xl')]: {
        fontSize: '0.833333vw !important',
      },
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto',
    minHeight: '100vh',
    padding: `0 ${typography.pxToRem(48)}`,
    transition: 'filter .5s, opacity .5s',
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    margin: `${typography.pxToRem(60)} auto 0`,
    maxWidth: app.maxWidth,
    width: '100%',
  },
});

export default styles;
