import { useState } from 'react';
import { motoko_project_backend } from 'declarations/motoko_project_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const greetingMessage = await motoko_project_backend.greet(name);
    setGreeting(greetingMessage);
  };

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" className="logo" />
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="name">Enter your name:</label>
        <input id="name" type="text" placeholder="Your Name" />
        <button type="submit">Say Hello!</button>
      </form>
      {greeting && <section id="greeting">{greeting}</section>}
    </main>
  );
}

export default App;