import {makeStyles} from '@material-ui/core/styles';

const appStyles = makeStyles(theme=>({
    myDiv : {
        background: theme.palette.primary.dark
    }
}))


export default function HomePage() {

    const classes = appStyles();

    return (
      <div className={classes.myDiv}>
          Hello 
        </div>
  )
};

