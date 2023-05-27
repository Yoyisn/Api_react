import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { Cards } from "../components/cards";
import { Filter } from "../components/Filter";
import { Container, Row, Col } from "react-bootstrap";

export function About() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getApiData();
  }, [filter]);

  const getApiData = async () => {
    const { data } = await axios.get(
      filter === ""
        ? "https://rickandmortyapi.com/api/character"
        : `https://rickandmortyapi.com/api/character/?name=${filter}`
    );
    setCharacters(data.results);
  };
  return (
    <>
      <Container className="mt-4">
        <Filter {...{ filter, setFilter }} />
        <Row className="mt-3">
          {characters.map((val, key) => (
            <Col key={val.id} sm>
              <Cards {...val} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
