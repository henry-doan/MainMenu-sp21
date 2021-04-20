import React from 'react'
import { Section, Photo} from '../shared/StyledComponents'
const Menu = ({ items }) => {
  return (
    <Section>
      {items.map((menuItem) => {
        const { id, name, img, description } = menuItem
        return (
          <article key={id} className='menu-item'>
            <Photo src={img} alt={name} />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
              </header>
              <p className='item-text'>{description}</p>
            </div>
          </article>
        )
      })}
    </Section>
  )
}

export default Menu
