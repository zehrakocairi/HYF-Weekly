import { useState } from "react";
import Person from "./Person";
import NewPeople from "./NewPeople";

function PersonController() {
  const [persons, setPersons] = useState([]);

  async function getPerson() {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=10");
      if (!response.ok) {
        alert("Error fetching data");
        return;
      }

      const data = await response.json();
      const normalizedData = data.results.map((person) => {
        const {
          login: { uuid },
          name: { first, last },
          email,
        } = person;

        return { id: uuid, firstName: first, lastName: last, email };
      });
      setPersons(normalizedData);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
      <NewPeople handleUser={getPerson} />
    </>
  );
}

export default PersonController;
