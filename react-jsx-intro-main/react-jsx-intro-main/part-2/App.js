function App() {
  return (
    <div>
      <Tweet
        name="Franz Fritz"
        username="FiFi"
        date={new Date().toDateString()}
        message="What is your favorite cheese??"
      />
      <Tweet
        name="Ferdinand Magoo"
        username="FerGoo"
        date={new Date().toDateString()}
        message="Something, something, pickles..."
      />
      <Tweet
        name="Sally Grissam"
        username="SallyG"
        date={new Date().toDateString()}
        message="When is Taco Tuesday again?"
      />
    </div>
  );
}