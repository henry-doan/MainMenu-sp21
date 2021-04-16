import React, { useState } from 'react';
import Menu from './Menu';
import Items from './data';


const  Menus= () => {
const [menuItems, setMenuItems] = useState(items);


  return (
    <main>
      <div>
        <h2>MainMenu</h2>
        <Menu items={menuItems}/>
      </div>
    </main>
  );
}

export default Menus