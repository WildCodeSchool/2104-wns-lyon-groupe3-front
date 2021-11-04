import { makeStyles } from "@material-ui/core";

//TODO: messagerie
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

export default function Messages() {
    const classes = useStyles()
    return (
        <div>
            Messages
        </div>
    )
}

