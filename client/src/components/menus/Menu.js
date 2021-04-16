import React from 'react';
import {Section} from '../shared/StyledComponents';

const Menu = ({ items }) => {
  return (
    <Section>
      {items.map((menuItem) => {
        const { id,name,img,description } = menuItem;
        return (
          <article key = {id} className='menu-item'>
            <img src={img} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
              </header>
              <p className='item-text'>{description}</p>
            </div>
          </article>
        );
      })}
    </Section>
  );
};

export default Menu;