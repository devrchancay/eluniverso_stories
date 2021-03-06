const primaryBackground = '#36474f';
const primaryText = '#ffc600';
const secondText = '#cbcfd1';
const dateText = '#61737d';
const linkColor = '#00aaec';

//const border = (color = 'red') => ({ border: `solid 1px ${color}` });

export const wrapperStory = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
};

export const stories = {
  width: '100vw',
  position: 'absolute',
  background: primaryBackground,
  minHeight: '100vh',
};

export const storyHeader = {
  width: '95%',
  height: '10vh',
  padding: '.5rem .5rem',
  display: 'flex',
  background: primaryBackground,
};

export const avatarFigure = {
  padding: 0,
  margin: 0,
  width: '20%',
};

export const avatarImage = {
  borderRadius: '50%',
  border: 'solid 2px white',
};

export const storyInformation = {
  width: '55%',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
};

export const storyTitle = {
  textTransform: 'uppercase',
  color: primaryText,
  margin: 0,
  padding: 0,
  fontWeight: 300,
};

export const storyDate = {
  padding: 0,
  margin: 0,
  fontWeight: 300,
  color: dateText,
  fontSize: '.8rem',
};

export const storyAction = {
  width: '25%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignContent: 'center',
  alignItems: 'center',
  paddingRight: '.5rem',
  background: primaryBackground,
  height: '10vh',
};

export const storyClose = {
  color: 'white',
  fontSize: '2rem',
  fontWeight: 300,
};

export const pictureContainer = {
  height: '30vh',
};
export const pictureFigure = {
  position: 'relative',
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
};

export const pictureImg = {
  width: '95%',
};

export const bodyDetails = {
  padding: '.5rem',
  display: 'flex',
  height: '3vh',
  alignItems: 'center',
};

export const bodyTopic = {
  margin: '0 .5rem 0 0 ',
  color: 'white',
  fontWeight: 300,
  fontSize: '.7rem',
};

export const bodyTimeago = {
  margin: 0,
  color: dateText,
  fontWeight: 300,
};

export const bodyRow = {
  margin: '0 .5rem',
  height: '15vh',
};
export const bodyTitleWrapper = {
  margin: '0 .5rem',
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
};
export const bodyTitle = {
  margin: 0,
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 300,
};

export const bodyDescription = {
  color: secondText,
  textAlign: 'left',
};

export const bodyAction = {
  display: 'flex',
  justifyContent: 'center',
  padding: '.5rem',
  height: '5vh',
};

export const bodyLink = {
  textAlign: 'center',
  textDecoration: 'none',
  color: linkColor,
};

export const navigationWrapper = {
  margin: '0 .5rem',
  padding: '.3rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '3vh',
};

export const navigationItem = {
  background: dateText,
  flexGrow: 2,
  margin: '0 .1rem',
  height: '65%',
  borderRadius: '10px',
  overflow: 'hidden',
};

export const gestureContainer = {
  position: 'absolute',
  width: '100%',
  height: '63vh',
  zIndex: 2147483647,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

export const leftControl = {
  width: '20%',
};
export const centerPress = {
  width: '80%',
};
export const rightControl = {
  width: '20%',
};
