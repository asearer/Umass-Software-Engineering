function App() {
  return (
    <div>
      <Person
        name="Mario"
        age={38}
        hobbies={["plumbing", "eating", "saving princesses"]}
      />
         <Person
        name="Luigi"
        age={35}
        hobbies={["plumbing", "helping mario"]}
      />
      <Person
        name="Toad"
        age={12}
        hobbies={["exploring", "helping the princess"]}
      />

      <Person
        name="Bowser"
        age={48}
        hobbies={["kidnapping princesses", "conquering kingdoms"]}
      />
    </div>
  );
}