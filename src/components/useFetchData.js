import axios from "axios";
import { useEffect, useState } from "react";


const useFetchData = (endPoint) => {
     const [cData, setCdata] = useState([]);
     const [err, setErr] = useState(false);
     const BASE_URL = import.meta.env.VITE_API_BASE_URL;

     useEffect(()=>{
          const getData = async ()=>{
               try {
                    let response = await axios.get(`${BASE_URL}/${endPoint}`); 
                    setCdata(response.data);
               } catch (error) {
                    console.log("error..", error);
                    setErr(true);
               }
          };

          endPoint && getData();

     }, [endPoint]);

     return [cData, err];
}

export default useFetchData;

