import React, {useState, useEffect} from "react";
import Person from '../components/Person.jsx'

export default function PersonController() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function getPerson() {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      setPerson(data.results[0]);
    }
    getPerson();
  }, []);

  return (
    <Person person={person}/>
  )
}
