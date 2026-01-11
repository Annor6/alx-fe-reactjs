import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
<UserProfile
  name="Alice"
  age="25"
  bio="Loves hiking and photography"
/>

      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

