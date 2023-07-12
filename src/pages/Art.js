import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ApiFunc } from "../ApiFunc"; // function from where we can fetch data from Nasa Api
import spacee from "../assets/spacee.jpeg"
import { Card, CardMedia, Typography } from "@mui/material";
import bgspace from "../assets/bgspace.svg"
import space from "../assets/spacee.jpeg"
import { LazyLoadImage } from "react-lazy-load-image-component";
const Art = () => {
  const { searchTerm } = useParams(); // here useParams hook will provide searchparameter from dynamic url of website
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiFunc(`search?q=${searchTerm}`).then((res) => {
        if (res?.collection?.items)
        {
            setData(res?.collection?.items);
        }
      else
      {
        console.log("no item found");
      }
    });
  }, [searchTerm]); // this will fetch data from api where query is equal to searchTerm for eg .     q=moon
  // Useffect will run each time searchTerm gets changed

  return (
    <Box
      sx={{
        display: "flex ",
        mg: "6px",
        gap: "20px",
        flexDirection: {
          md: "row",
          xs: "column",
          sm: "column",
          lg: "row",
          xl: "row",
        },
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        // backgroundImage:`url(${space})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize:"cover",
        background: `linear-gradient(to right  ,  #A459D1 0%, #03001C 80%)`,
      }}
    >
      {data.map((item) => (
        <Card
          key={item?.data[0]?.nasa_id}
          sx={{
            height: {
              md: "400px",
              xs: "370px",
              sm: "370px",
            },
            width: {
              md: "350px",
              xs: "95vw",
              sm: "400px",
            },
            mt: "8px",
            overflow: "scroll",
            borderRadius: "16px 16px 0 0 ",
            backgroundColor: "#E1AEFF",
            
          }}
        >
          <CardMedia
            component="img"
            image={item.links ? item?.links[0].href : null} // error resolved as may be links array cant be found found in some items so this consdition helps in resolving error
            alt="Image Not Found"
            sx={{
              height: {
                md: "300px",
                xs: "300px",
                sm: "300px",
              },
              width: {
                md: "350px",
              },
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ backgroundColor: "#9376E0", pl: "5px" }}
          >
            {item?.data[0]?.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ backgroundColor: "#E1AEFF", pl: "5px" }}
          >
            {item?.data[0]?.description}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};
export default Art;
