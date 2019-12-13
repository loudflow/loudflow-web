const styles = ({ typography }) => ({
  content: {
  },
  banner: {
    minHeight: `${typography.pxToRem(240)}`,
    height: '40vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'contain'
  },
  titleContainer: {
    marginTop: `${typography.pxToRem(20)}`,
  },
  captionContainer: {
    marginTop: `${typography.pxToRem(20)}`,
  },
  contentContainer: {
    marginTop: `${typography.pxToRem(20)}`,
  },
});

export default styles;
