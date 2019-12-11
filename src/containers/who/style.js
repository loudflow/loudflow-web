const styles = ({ typography }) => ({
  content: {
  },
  banner: {
    maxHeight: '50vh',
    height: `calc(100vh - ${typography.pxToRem(465)})`,
    margin: `${typography.pxToRem(20)}`,
    backgroundImage: "url('/images/heart-machine.png')",
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
  icon: {
    display: 'flex',
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
  },
  iconIcon: {
    width: `${typography.pxToRem(24)}`,
    height: `${typography.pxToRem(24)}`,
  },
});

export default styles;
