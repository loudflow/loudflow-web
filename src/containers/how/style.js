const styles = ({ typography }) => ({
  content: {
  },
  banner: {
    height: `calc(0.25 * 100vw)`,
    backgroundImage: "url('/images/process-machine.png')",
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