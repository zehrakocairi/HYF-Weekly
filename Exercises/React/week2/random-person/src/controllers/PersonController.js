import { useState, useEffect } from "react";
import Person from "../components/Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async function () {
    const response = await fetch("https://www.randomuser.me/api?results=1");
    const { results } = await response.json();
    const {
      name: { first, last },
      email,
    } = results[0];
    setPerson({ first, last, email });
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person}></Person>;
};

export default PersonController;
