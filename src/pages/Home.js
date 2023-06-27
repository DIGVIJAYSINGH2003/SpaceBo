import spacee from "../assets/spacee.jpeg";
import { Box, Container, Card, Typography, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
const Home = () => {
  return (
    <Box
      sx={{
        display: "flex ",
        backgroundImage: `url(${spacee})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        component="form"
        sx={{
          // height : {
          //     xl : "400px",
          //     md :" 350px",
          //     sm : "200px",
          //     xs :" 230px"
          // },
          // width :{
          //     xl:"560px",
          //     md : "500px",
          //     sm: " 300px",
          //     xs:" 170px"
          // },
          display: "contents",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            direction: "column",
            justifyContent: "center",
            alignItems: "baseline",
            flexWrap: "wrap",
            width: {
              xs: "70vw",
              sm: "60vw",
              md: " 50vw",
              lg: " 55vw",
            },
          }}
        >
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            sx={{
              width: {
                xs: "70vw",
                sm: "60vw",
                md: " 50vw",
                lg: " 55vw",
              },
              background: "rgba(0,0,0,0.4)",
            }}
          />
          <Typography  color="initial" sx={{
            fontSize :"1.1rem",
            fontWeight:"bold",
            letterSpacing:"0.001rem"
          }}>
             Search Planets, Stars, Galaxies, Rockets, and about space missions
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Home;
