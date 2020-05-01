import React, { useState, useEffect} from "react";
import axios from "axios";
import NasaImg from "./NasaImg"
import NasaExplanation from "./NasaExplanation"
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button, Collapse
} from 'reactstrap';

export default function NasaTitle() {

  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
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
      <Card className="card-container">
        <CardBody>
          <CardTitle className="photo-title">{data.title}</CardTitle>
          <CardSubtitle className="photo-date">{data.date}</CardSubtitle>
          <NasaImg url={data.url} />
          <Button className="btn" color="danger" onClick={toggle} size="lg">Explanation</Button>
          <Collapse isOpen={isOpen}>
          <div className="card-info"><NasaExplanation explanation={data.explanation} /></div>
          </Collapse>
        </CardBody>
      </Card>
    </div>
  );
}

