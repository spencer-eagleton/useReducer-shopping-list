import { useState } from "react";

export default function UserInput() {

  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([])
  




  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('')
    setItems([...items, newItem])
  }

  console.log(items);

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="enter new item"/>
        <button type="submit">Add Item</button>
        
    </form>
  )
}
