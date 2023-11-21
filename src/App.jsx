import { useState } from 'react'
import './App.css'
import { foodItems } from './data/data';

import MenuList from './components/MenuList';

// console.log(foodItems)

const App = () => {
  return (
    <div>
      <h1>Wild Restaurant Menu</h1>
      <MenuList foodItems={foodItems} />
      {/* pass the variable foodItems as props to MenuList component */}
    </div>
  );
};

export default App;
