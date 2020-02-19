import React, { useState, useEffect } from "react";
import Reactstrap, { CardText } from 'reactstrap';

const Films = props => {
  console.log(props)
  const [films, setFilms] = useState()
  useEffect(() => {
    setFilms(props.films)
    console.log(films)
  },[props.films])
  if(films != undefined) {
    return <CardText>{films.map(element => {
      return element.title
    })}</CardText>
  }
  return <p>loading</p>
}

export default Films