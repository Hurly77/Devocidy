import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
	footer : {
		backgroundColor : theme.palette.primary.dark,
		padding         : theme.spacing(6, 0),
	},
  children: {
    color: theme.palette.common.white
  }
}));

const Footer = (props) => {
	const classes = useStyles();
  const {description, children} = props
	return (
    <footer className={classes.footer}>
      <Container>
        <Typography>
          {description}
        </Typography>
        <Typography className={classes.children}>
          {children}
        </Typography>
        <Copyright />
      </Container>
    </footer>
	);
};

export default Footer;
