import { useState } from 'react';
import './styles.sass'
interface NavigationProps{
  items: string[]
}

export default function Navigation({items}: NavigationProps){
  const [iconClass, setIconClass] = useState<string>('nav-bar')
  const [navClass, setNavClass] = useState<string>('navigation')

  const onIconClick = () => {
    console.log('click')
    if(iconClass.includes('is-active')){
      setIconClass('nav-bar');
      setNavClass('navigation')
    } else {
      setIconClass('nav-bar is-active');
      setNavClass('navigation is-active')
    }
  }

  return(
    <div className="header">
      <div className={iconClass} onClick={onIconClick}></div>
      <ul className={navClass}>
        {items.map(item =>
          <li key={item}>
            <a href={`#${item.trim()}`}>{item}</a>
          </li>
        )}
      </ul>
    </div>
  )
}
