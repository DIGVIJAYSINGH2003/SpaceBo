import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ApiFunc } from "../ApiFunc"; // function from where we can fetch data from Nasa Api
const Art = () => {
  const { searchTerm } = useParams(); // here useParams hook will provide searchparameter from dynamic url of website
  const [data , setData] = useState([]);
  useEffect(() => {
    ApiFunc(`search?q=${searchTerm}`).then ((res)=> 
    {
        setData(res?.collection?.items);
     
    }
    )
     // this will fetch data from api where query is equal to searchTerm for eg .     q=moon
  
}, [searchTerm]);
  // Useffect will run each time searchTerm gets changed
  return <Box sx={{ backgroundColor: "yellow" }}>{searchTerm}</Box>;
};
export default Art;
