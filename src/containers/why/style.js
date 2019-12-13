const styles = ({ typography }) => ({
  content: {
  },
  banner: {
    minHeight: `${typography.pxToRem(480)}`,
    height: `calc(100vh - ${typography.pxToRem(465)})`,
    margin: `${typography.pxToRem(20)}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
    backgroundSize: 'contain'
  },
  titleContainer: {
    float: 'right',
    marginTop: `${typography.pxToRem(20)}`,
  },
  captionContainer: {
    float: 'right',
    marginTop: `${typography.pxToRem(20)}`,
  },
  contentContainer: {
    float: 'right',
    marginTop: `${typography.pxToRem(20)}`,
  },
});

export default styles;
