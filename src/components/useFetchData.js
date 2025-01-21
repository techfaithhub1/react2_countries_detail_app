import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
     const [cData, setCdata] = useState([]);
     const [err, setErr] = useState(false);

     useEffect(()=>{
          const getData = async ()=>{
               try {
                    let response = await axios.get(url); 
                    setCdata(response.data);
               } catch (error) {
                    console.log("error..", error);
                    setErr(true);
               }
          };

          url && getData();

     }, [url]);

     return [cData, err];
}

export default useFetchData;

