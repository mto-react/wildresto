import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {/*render a MenuItem component to each element of the props array*/
        foodItems.map((foodItem) => (
            <div key = {foodItem.itemName}>
                <MenuItem foodItem = {foodItem} />
            </div>
        ))
      }
    </div>
  );
}

export default MenuList;
