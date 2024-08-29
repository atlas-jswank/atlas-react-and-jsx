import Header from "./components /Header";
import Section from "./components /Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section title="What is React?">
        React is a JavaScript library for building user interfaces.
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Reusable components</li>
          <li>State management</li>
          <li>Server-side rendering</li>
          <li>Easy to learn and understand</li>
        </ul>

      </Section>
    </div>
   
  );
}

export default App;
