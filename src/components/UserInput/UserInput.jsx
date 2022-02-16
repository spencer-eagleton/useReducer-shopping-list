import { useState } from "react";

export default function UserInput() {

  const [newItem, setNewItem] = useState('');
  




  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('')
    
  }

  


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="enter new item"/>
        <button>Add Item</button>
        
    </form>
  )
}
