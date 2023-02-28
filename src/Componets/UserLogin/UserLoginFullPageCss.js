import { Fullscreen } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    background: {
      height:'100vh',
      backgroundImage: 'url(./images/Background.jpg)',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 30,
    },
  }),
);