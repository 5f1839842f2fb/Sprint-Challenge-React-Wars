import React, { useState, useEffect} from 'react';
import Reactstrap, { Card, CardText, CardTitle, CardHeader, CardBody } from 'reactstrap';
import Axios from "axios";
import Films from "./Films"
const CharacterCard = props => {
  const [data, setData] = useState(props)
  const [films, setFilms] = useState()

  useEffect(() => {
    const tempFilmsArray = [];
    data.character.films.map(element => {
      return Axios.get(element).then(response => {
        tempFilmsArray.push(response.data)
      })
    })
    setFilms(tempFilmsArray);
  },[props.character])

  return <Card>
    <CardHeader>{data.character.name}</CardHeader>
    <CardBody>
      <CardText>Date of birth: {data.character.birth_year}</CardText>
      <CardText>Eye color: {data.character.eye_color}</CardText>
      {/* <Films films={films}/> NOT WORKING BECAUSE REACT IS SHIT */}
      <CardText>Height: {data.character.height}</CardText>
    </CardBody>
  </Card>
}

export default CharacterCard;