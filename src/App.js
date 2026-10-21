
import './App.css';

import PersonCard from './PersonCard';
import { useState } from 'react';

function App() {

  const [people, setPeople] = useState([{ id: 1, name: "Влад", role: "FE", capacity: 40 },
  { id: 2, name: "Аня", role: "AN", capacity: 30 }]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [capacity, setCapacity] = useState("");

  return (
    <div>
      <form>
        <label>Имя </label>
        <input placeholder="ИМЯ" required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Роль </label>
        <input placeholder="РОЛЬ" required
          value={role}
          onChange={(e) => setRole(e.target.value)}

        />
        <br></br>
        <label>Свободные ресурсы </label>
        <input placeholder="Занятость в часах" required
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}

        />

        <button onClick={(e) => {
          e.preventDefault()
          const newPerson = { id: Date.now(), name: name, role: role, capacity: capacity };
          setPeople([...people, newPerson]);
        }}>
          Добавить
        </button>
      </form>

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
