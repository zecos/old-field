import React, { useState } from 'react';
import { useText, Text, useForm } from 'fieldz'
import './App.scss';

function App() {
  const newTodo = useText({
    name: 'newTodo',
    validate: val => {
      if (val.length < 3) {
        return "Must be at least 3 characters long."
      }
    },
  })
  const [todos, setTodos] = useState<string[]>([])
  const userForm = useForm({
    fields: {
      username: {
      }
    }
  })
  return (
    <div className="App">
      <Text {...newTodo}
        onEnter={() => {
          newTodo.setTouched(true)
          if (newTodo.errors) {
            return
          }
          setTodos([
            ...todos,
            newTodo.state
          ])
          newTodo.setState('')
        }}/>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
