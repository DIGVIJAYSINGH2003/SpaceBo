import axios from "axios";
import React from "react";
const base = "https://images-api.nasa.gov/";
export const ApiFunc = async (url) => {
  try {
    const response = await axios.get(
      `${base}${url}`, // Replace with the desired NASA API endpoint
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NASA_API_KEY, // Replace with your NASA API key
        },
      }
    );

    return response.data;
  } catch (err){
    console.log(err);
  }
};


