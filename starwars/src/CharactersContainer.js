import React, { useState, useEffect } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import Reactstrap, {Button} from "reactstrap"

const CharactersContainer = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();

  useEffect(() => {
    Axios.get("https://swapi.co/api/people")
      .then(response => {
        setCharactersData(response.data.results);
        setNextPage(response.data.next)
        setPreviousPage(response.data.previous)
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return <div className="CharactersContainer">
      <Button onClick={() => {
          if (previousPage != null) {
            Axios.get(previousPage).then(response => {
                setCharactersData(response.data.results)
            })
          }
         
      }}>Previous</Button>
      <Button onClick={() => {
          if (nextPage != null) {
            Axios.get(nextPage).then(response => {
                setCharactersData(response.data.results)
            })
          }
          
      }}>Next</Button>
      {charactersData.map(element => {
          return <CharacterCard character={element} key={Math.random()}/>
      })}
  </div>;
};

export default CharactersContainer;
