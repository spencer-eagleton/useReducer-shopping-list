import { useState } from "react";
import { useItems } from "../../context/ItemContext";


export default function UserInput() {
  const { handleAdd } = useItems()
  const [newItem, setNewItem] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('')
    handleAdd(newItem)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="enter new item"/>
        <button type="submit">add Item</button>
        
    </form>
  )
}
