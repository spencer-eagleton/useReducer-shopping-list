import { useState } from "react";

export default function UserInput({ addItem }) {

  const [newItem, setNewItem] = useState('');
  




  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('')
    addItem(newItem)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="enter new item"/>
        <button type="submit">Add Item</button>
        
    </form>
  )
}
