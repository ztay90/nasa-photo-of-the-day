import React, { useState, useEffect} from "react";
import axios from "axios";
import NasaImg from "./NasaImg"
import NasaExplanation from "./NasaExplanation"

export default function NasaTitle() {

  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=8KGiNgztajHusdrqZYFjUpnKfnkia3TWQtg3LNJI")
    .then(response => {
      setData(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.date}</h3>
      <NasaImg 
        image={data.url}
      />
      <NasaExplanation 
        explanation={data.explanation}
      />
    </div>
    
  )  
}

// export default NasaTitle;