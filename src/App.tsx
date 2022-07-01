import React from 'react';
import Counter from "./components/Counter";
import { useAppSelector, useAppDispatch } from './hooks/redux'
import { addCounter } from "./store/slice";
import { Button, ListGroup } from 'react-bootstrap';
import "./App.css"

function App() {
  const counters = useAppSelector((state) => state.main.counters);
  const dispatch = useAppDispatch();
  return (
    <div className="app">
      <h1 className="app__title">Magic Counters</h1>
      <ListGroup>
        {counters.map((counter) => (
          <ListGroup.Item key={counter.id} variant="secondary">
            <Counter {...counter}/>
          </ListGroup.Item>
          ))}
      </ListGroup>
      <Button className="app__add-counter" onClick={() => dispatch((addCounter()))}>add counter</Button>
    </div>
  );
}

export default App;
