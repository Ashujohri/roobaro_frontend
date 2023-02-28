import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({

    maincontainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: "center",
        boxShadow: "1px 1px 20px #ccc",
        background: 'red',
        justifyContent: 'center'
    },

    headingText: {
        display: "flex",
        letterSpacing: 0.05,
        fontSize: 16,
        color: "#434242",
        letterSpacing: 1,
        variant: "h6",
        fontFamily: "Poppins",
        fontWeight: "bold",
    },

    label: {
        letterSpacing: 0.05,
        fontSize: 14,
        fontWeight: "bold",
        variant: "h6",
        textAlign: "start",
        fontFamily: "Poppins",
        color: "#000000",

    },
    typebutton: {
        width: '100%',
        color: 'white',
        height: 38,
        borderRadius: 10,
        fontFamily: "Poppins",
        backgroundColor: '#347DFC',
        border: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
    ,


    submitbtn: {
        height: 38,
        width: '100%',
        fontSize: 16,
        borderRadius: 12,
        border: 'none',
        backgroundColor: '#347DFC',
        marginTop: 10,
        color: '#fff',
        fontFamily: "Poppins",
        textTransform: "none",
        fontWeight: 600
    },

    physicallybutton: {
        display: 'flex',
        justifyContent: 'space-between',
        letterSpacing: 0.05,
        fontSize: 14,
        fontWeight: "bold",
        variant: "h6",
        textAlign: "start",
        fontFamily: "Poppins",
        color: "#000000",
    }





})