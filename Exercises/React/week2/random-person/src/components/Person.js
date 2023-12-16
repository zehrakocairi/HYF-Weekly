const Person = ({ person }) => {
  return (
    <div>
      <p>Random person</p>
      {person != null && (
        <ul>
          <li>{person.first}</li>
          <li>{person.last}</li>
          <li>{person.email}</li>
        </ul>
      )}
    </div>
  );
};

export default Person;
