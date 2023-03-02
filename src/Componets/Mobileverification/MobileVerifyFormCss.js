import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({

    mainContainer: {
        backgroundColor: "white",
        padding: 35,
        borderRadius: 20,
        boxShadow: "1px 1px 20px #ccc",
    },

    headingText: {
        display: "flex",
        letterSpacing: 0.05,
        fontSize: 18,
        fontWeight: "bold",
        variant: "h6",
        textAlign: "start",
        fontFamily: "Poppins",
        color: "#000000",
    },
    btn: {

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
    changeNumber: {
        display: "flex",
        letterSpacing: 0.05,
        fontSize: 13,
        variant: "h6",
        fontFamily: "Poppins",
        justifyContent: "end",
        color: "#347DFC",
    },
    verify: {
        display: "flex",
        letterSpacing: 0.05,
        fontSize: 18,
        fontWeight: "bold",
        variant: "h6",
        textAlign: "left",
        fontFamily: "Poppins",
        color: "#000000",
        marginTop: 10
    },
    
    enterOtpVisitor: {
        display: "flex",
        letterSpacing: 0.05,
        fontSize: 14,
        variant: "h6",
        padding: 10,
        fontFamily: "Poppins",
        color: "#",
    },
    otpBox: {
        width: 100,
        marginTop: 5,
        gap: 20,
        justifyContent: 'center'
    }


})