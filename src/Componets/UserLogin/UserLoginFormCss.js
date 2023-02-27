import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  mainContainer: {
    // backgroundColor: "red",
    padding: 30,
    display: "flex",
    borderRadius: 20,
    background:'white',
    boxShadow: "1px 1px 20px #ccc",
  },
  headingText: {
    letterSpacing: 0.05,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "start",
    color: "#000000",
    fontFamily: "Poppins",
    // backgroundColor: "blue",
  },
  btn: {
    height: 38,
    width:'100%',
    fontSize: 16,
    borderRadius: 12,
    border:'none',
    backgroundColor: '#347DFC',
    marginTop: 10,
    color:'#fff',
    fontFamily: "Poppins",
    textTransform: "none",
    fontWeight:600
  },
});
