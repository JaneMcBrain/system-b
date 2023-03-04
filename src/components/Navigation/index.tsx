import './styles.sass'
interface NavigationProps{
  items: string[]
}

export default function Navigation({items}: NavigationProps){
  return(
    <ul className="navigation">
      {items.map(item =>
        <li key={item}>
          <a href={`#${item.trim()}`}>{item}</a>
        </li>
      )}
    </ul>
  )
}
