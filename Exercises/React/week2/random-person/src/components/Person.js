function Person({ person }) {
  return (
    <div className="random-person">
      {person && (
        <ul>
          <li>{person.firstName}</li>
          <li>{person.lastName}</li>
          <li>{person.email}</li>
        </ul>
      )}
    </div>
  );
}
export default Person;
