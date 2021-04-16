import React, { useState } from 'react';
import Menu from './Menu';
import items from '../data';


const  Menus= () => {
const [menuItems, setMenuItems] = useState(items);
  return (
    <main>
      <section className='menu section'>
        <div className='name'>
          <h2>MainMenu</h2>
          <div className='underline'></div>
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default Menus