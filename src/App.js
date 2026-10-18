
import './App.css';

import PersonCard from './PersonCard';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [people, setPeople] = useState([{ id: 1, name: "Влад", role: "FE", capacity: 40 },
  { id: 2, name: "Аня", role: "AN", capacity: 30 }]);

  return (
    <div>

      <button onClick={() => {
        const newPerson = { id: Date.now(), name: "Новый", role: "FE", capacity: 20 };
        setPeople([...people, newPerson]);
      }}>
        Добавить
      </button>
      <section>
        <h2>Команда</h2>
        {people.map(person => (
          <PersonCard
            key={person.id}
            name={person.name}
            role={person.role}
            capacity={person.capacity}
            onDelete={() => setPeople(people.filter(p => p.id !== person.id))}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
