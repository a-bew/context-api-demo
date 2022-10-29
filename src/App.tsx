import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ShowStoredUser from './ShowStoredUser';
import { CountProvider } from './contexts/countContext';
import Counter from './components/Counter';
import Stories from './components/Stories';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <CountProvider>
      <div>
      <h1>Hello and Welcome</h1>
      <h3>My Favorite Stories on Medium Are:</h3>
      <Stories />
      <Counter />

    </div>
    </CountProvider>
  );

}

export default App;
