import React from 'react'
import { makeStyles } from "@material-ui/core"
import '../styles/neumorphism.css'
import Form from '../components/Form';
import HeaderAdmin from '../components/HeaderAdmin';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    myBackground: {
        background: "#F7F7FF",
        minHeight: "100vh"
    },
}))

interface LocationState {
    pseudoAdmin: string
  }

const AdminPage = (props: any) => {
    const classes = useStyles()
    const location = useLocation<LocationState>()


    return (
        <div className={classes.myBackground}>
            <HeaderAdmin name= {location.state.pseudoAdmin}/>
            <Form name= {location.state.pseudoAdmin} />
        </div> 
    )
}

export default AdminPage;