import { useEffect, useState } from "react";

export default function PeopleList() {
  const [people, setPeople] = useState<any[]>([]);

  const fetchRandomPeople = () => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeople(data.results);
      });
  };

  useEffect(() => {
    fetchRandomPeople();
  }, []);

  return (
    <>
      {people.length === 0 && <p>No data was fetched...</p>}
      <ul className="list-group">
        {people.map((person) => (
          <li key={person.login.uuid} className="list-group-item">
            {person.name.first} {person.name.last}
          </li>
        ))}
      </ul>
    </>
  );
}
