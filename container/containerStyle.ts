import {Theme, createStyles } from "@material-ui/core/styles";

const containerStyle = (theme: Theme) =>
  createStyles({
    root: {
        display: "flex"
      },
      margin: {
        margin: theme.spacing(2),
      },
      toolbar: {
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "flex-end",
        // // ...theme.mixins.toolbar
        // minHeight:"64px",
        // [theme.breakpoints.between("lg","xl")]: {
        //   minHeight:"74px"
        // },
      },
      content: {
        // flexGrow: 1,
        height: "100%",
        flexDirection:"column",
        display:"flex"
      },
  })

  export default containerStyle;
