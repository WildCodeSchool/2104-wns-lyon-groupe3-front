import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core"

import teacherIcon from "../assets/teacherClasses.svg"
import classesIcon from "../assets/cadreClasses.svg"

import '../styles/toggle.scss'

import {data} from "./defaultDataClass"
import ModalTrombinoscope from './ModalTrombinoscope'

const useStyles = makeStyles(theme => ({

    myBodyCard: {
        marginTop: "100px"
    },
    myClassIcon: {
        width: "250px",

        "&:hover":{
            cursor: "pointer",
            opacity: "0.5"
        }
    },
    cardAlign: {
        zIndex: 0,
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        width: "100%",
        position: "absolute",
        top: "10%",
        left: "0"
    },
    myTeacherIcon: {
        width: "400px"
    },
    myCardTeacherIcon: {
        position: "absolute",
        /* top: 0; */
        right: "10%",
        bottom: "0",
        zIndex: 0,
    }

  }))
  

function Class(
   // { setDataResult, data ,dataResult}: LoadingProto
) {
    const classes = useStyles()
    const [appearModal, setAppearModal] = useState(false)
    const [idClass, setIdClass] = useState()

    const handleModal = (id : any) => {
        setIdClass(id)
        setAppearModal(true)
    }
     
    return (
        <div className={classes.myBodyCard} >
            <div className={classes.cardAlign}>
                {
                    data.map((element) => (
                        <div className="bodyCardClass" key={element.id}>
                            <div className="cardClass">
                                <h2>{element.title}</h2>
                                <div className="cardTeach">
                                    <span>Professeur principal :</span>
                                    <span className="cardName">{element.principalTeacher}</span>
                                </div>
                                <div className="cardTeach">
                                    <span>Délégué :</span>
                                    <span className="cardName">{ element.Délégué}</span>
                                </div>
                            </div>
                            <img
                                src={classesIcon}
                                alt="classes"
                                className={classes.myClassIcon}
                                onClick={()=>handleModal(element.id)}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={classes.myCardTeacherIcon}>
                <img src={teacherIcon} alt="teacher" className={classes.myTeacherIcon} />
            </div>
            {
                appearModal &&
                <ModalTrombinoscope
                    idClass={idClass}
                    appearModal={appearModal}
                    setAppearModal={setAppearModal}
                />
            }
        </div>
    )

}

export default Class
