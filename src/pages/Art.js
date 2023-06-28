import { useParams } from "react-router-dom"
import { useEffect , UseState } from "react";
const Art = () => {
    const {searchTerm} = useParams();
useEffect(()=>{

    
},[searchTerm])
  return (
    <div>{searchTerm}</div>
  )
}
export default Art