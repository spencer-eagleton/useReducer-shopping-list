import { useItems } from "../../context/ItemContext"
import UserInput from '../../components/UserInput/UserInput'
import './Header.css'

export default function Header() {
    const { items, handleClear } = useItems();
  return (
    <div className="header">
      <div className="items-left">
        <h1>
          {items.length}
        </h1>
        <p>
        items left 
        </p>
      </div>
      
      <UserInput />
      <button onClick={handleClear}>
        clear list
      </button>
    </div>
  )
}
