import { makeStyles } from "@material-ui/core"
import { ALL_STUDENT } from '../utils/Queries';
import { useQuery } from '@apollo/client';
import { Avatar, Badge } from 'ui-neumorphism';
import Loading from './Loading';

import defaultImage from "../assets/defaultImage.png";

import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const useStyles = makeStyles(theme => ({

    myBodyCard: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        webkitTapHighlightColor: "transparent"
    },
    buttonCancel: {
        color: theme.palette.secondary.light,
        position: "absolute",
        top: 20,
        right: 30,
        fontSize: "40px",

        "&:hover": {
            cursor: "pointer",
            opacity: 0.6
        }
    },
    myAvatar: {
    }
}))

type idClassProto = {
    idClass: any,
    appearModal: boolean,
    setAppearModal: any
}


export default function ClassTrombinoscope({ idClass, setAppearModal, appearModal }: idClassProto) {
    const classes = useStyles()

    const handleClose = () => {
        setAppearModal(false)
    }

    const { loading, error, data, refetch } = useQuery(ALL_STUDENT, { variables: { role: 'STUDENT' } });

    if (loading)
        return <Loading />

    return (
        data &&
        <div className="myModalCard">
            <div className="myModalCardInfo">
                {
                    data.getUsersByRole.map((element: any) => (
                        <div className="myTotalCardInfoAvatar" key={element.id}>
                            <Badge
                                bgColor='var(--error)'
                                style={{ fontSize: "2px" }}
                            >
                                <Avatar size={70} src={element.picture ? element.picture : defaultImage} alt="" className={classes.myAvatar} />
                            </Badge>
                            <div className="myTotalCardInfo">
                                <span><strong>Nom : </strong> {element.lastname}</span>
                                <span><strong>Prenom : </strong> {element.firstname}</span>
                                <span><strong>Coordonnées : </strong> {element.numberParent}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <CancelPresentationIcon onClick={() => setAppearModal(false)} className={classes.buttonCancel} />
        </div>
    )
}

