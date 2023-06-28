import spacee from "../assets/spacee.jpeg";
import { Box, Container, Card, Typography, CardContent , InputAdornment, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Search } from "@mui/icons-material";
import { useState , UseEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
const [data , setData] = useState("");
const navigate = useNavigate();
const handleSubmit =(e)=>{
  e.preventDefault();
if (data)
{
 navigate(`/search/${data}`);
}
 setData('');
      
}

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
        width :"100vw",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        component="form"
        onSubmit={handleSubmit}
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
            label="Search"
            variant="filled"
            InputProps={{
              sx: {
                "& input": {
                  color: "#9376E0",
                },
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    
                  />
                  <Search sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              width: {
                xs: "70vw",
                sm: "60vw",
                md: " 50vw",
                lg: " 55vw",
              },
              background: "rgba(0,0,0,0.4)", // dark effect
            }}
            value={data}
            onChange={(event)=>{setData(event.target.value)}}
          />
          <Typography
            color="initial"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              letterSpacing: "0.001rem",
              color: "#E1AEFF",
            }}
          >
          Search Planets, Stars, Galaxies, Rockets, and about space missions
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Home;
