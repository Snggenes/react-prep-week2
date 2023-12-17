import React from "react";

export default function Person({ person }) {
  return (
    <div>
      {person ? (
        <ul>
          <li>First name: {person.name.first}</li>
          <li>Last name: {person.name.last}</li>
          <li>Email: {person.email}</li>
        </ul>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
