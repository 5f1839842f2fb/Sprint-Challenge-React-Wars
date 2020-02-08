import React, { useState, useEffect} from 'react';
import Reactstrap, { Card, CardText, CardTitle, CardHeader, CardBody } from 'reactstrap';

const CharacterCard = props => {
  const [data, setData] = useState(props)

  return <Card>
    <CardHeader>{data.character.name}</CardHeader>
    <CardBody>
      <CardText>Date of birth: {data.character.birth_year}</CardText>
      <CardText>Eye color: {data.character.eye_color}</CardText>
      <CardText>{data.character.films}</CardText>
    </CardBody>
  </Card>
}

export default CharacterCard;