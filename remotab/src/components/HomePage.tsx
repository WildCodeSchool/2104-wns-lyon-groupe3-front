import React from 'react'
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
    myDiv: {
        background: theme.palette.primary.main
    },
}))

const HomePage = () => {
    const classes = useStyles()

    return (
        <div className={classes.myDiv}>
            HomePage
        </div>
    )
}

export default HomePage;