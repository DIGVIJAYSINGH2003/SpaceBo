import { Typography, Box } from "@mui/material";
import spacee from "../assets/spacee.jpeg";
const Space = () => {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "black",
        opacity: "0.98",
        mt :"0px",
        width :"100vw",
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "2.81rem",
            md: "4rem",
            xl: " 6.3rem",
          },
          WebkitTextStroke: {
            xs: "0.1rem #D09CFA",
            md: "0.11rem #D09CFA",
            xl: " 0.23rem #D09CFA",
          },
        }}
        color="#540375"
      >
        SpaceeBo
      </Typography>
    </Box>
  );
};
export default Space;
