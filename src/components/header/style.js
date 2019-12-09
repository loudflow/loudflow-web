const styles = ({ app, typography }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: `0 auto 0`,
    maxWidth: app.maxWidth,
    width: '100%',
    height: `${typography.pxToRem(150)}`,
  },
  brand: {
    border: 'none',
    float: 'right',
    transition: 'all .3s',
    textDecoration: 'none',
  },
  logo: {
    height: `${typography.pxToRem(120)}`,
  },
  navContainer: {
    float: 'left',
    position: 'relative',
  },
  navigation: {
    float: 'left',
    position: 'relative',
  },
  preview: {
    float: 'right',
    marginLeft: `${typography.pxToRem(40)}`,
    position: 'relative',
  },
});

export default styles;
