import { useState } from "react"

export default function ShoppingItem({item, deleteItem, editItem}) {
    const [editing, setEditing] = useState(false)
  return (
    <>
        <p>{item.input}</p>
        <button onClick={() => deleteItem(item.id)}>delete</button>
        <button onClick={() => setEditing(true)}>edit</button>
    </>
  )
}
