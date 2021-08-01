import React from 'react'
import { makeStyles } from "@material-ui/core"
import '../styles/neumorphism.css'
import Form from '../components/Form';
import HeaderAdmin from '../components/HeaderAdmin';

const useStyles = makeStyles(theme => ({
    myBackground: {
        background: "#F7F7FF",
        minHeight: "100vh"
    },
}))

const AdminPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.myBackground}>
            <HeaderAdmin />
            <Form />
        </div> 
    )
}

export default AdminPage;