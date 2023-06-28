const url = `https://images-api.nasa.gov/search/?q=moon`

// const ApiFunc = async (url)=>{
//     try{
// const response = await fetch(url, {
//   method: "GET",
//   header: {
//     "x-api-key" : process.env.NASA_API_KEY,
//   },
// });
// const result = await response.json()
// console.log(result)
//     }
//     catch{
//         console.error("error aagya bhaijaan")
//     }

// }
// ApiFunc()
 const fetchData = async () => {
   const apiKey = "eag9bSruAmsbeaojcNuHAMkgQvWAYxj6R27Kemm6";
   const headers = {
     "x-api-key": apiKey,
   };

   try {
     const response = await fetch(url, { headers });
     const res = await response.json();
     console.log(res);
   } catch (error) {
     console.log("eroro");
   }
 };
 fetchData();
