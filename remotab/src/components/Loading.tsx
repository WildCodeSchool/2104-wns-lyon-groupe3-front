import { makeStyles } from "@material-ui/core";
import 'ui-neumorphism/dist/index.css';
import CircularProgress from '@material-ui/core/CircularProgress';

type LoadingProto = {
    setDataResult: any,
    data: any,
    dataResult: any
}

const useStyles = makeStyles(theme => ({

    myBodyCard: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        textAlign: "center",
        minHeight: "70vh",
        placeItems: "center"
    },

  }))
  

export default function Loading() {
    const classes = useStyles()
    return (
        <div data-testid="loading-message" className={classes.myBodyCard}>   
            <CircularProgress />
        </div>
    )
}
