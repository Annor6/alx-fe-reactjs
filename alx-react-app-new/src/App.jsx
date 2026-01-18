
import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div>
<Counter />

<UserProfile
  name="Alice"
  age="25"
  bio="Loves hiking and photography"
/>
    </div>
  );
}

export default App;


