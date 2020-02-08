import React, { useState, useEffect } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

const CharactersContainer = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    Axios.get("https://swapi.co/api/people")
      .then(response => {
        setCharactersData(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return <div className="CharactersContainer">
      {charactersData.map(element => {
          return <CharacterCard character={element} key={Math.random()}/>
      })}
  </div>;
};

export default CharactersContainer;
