const styles = ({ app, typography }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: `0 auto ${typography.pxToRem(10)}`,
    maxWidth: app.maxWidth,
    width: '100%',
    height: `${typography.pxToRem(75)}`,
    padding: `${typography.pxToRem(40)} 0 ${typography.pxToRem(10)}`,
  },
  copyright: {
    flexGrow: 1,
  },
  source: {
    display: 'flex',
  },
  sourceLink: {
    display: 'flex',
    alignItems: 'center',
  },
  sourceIcon: {
    width: `${typography.pxToRem(24)}`,
    height: `${typography.pxToRem(24)}`,
  },
});

export default styles;
