import { useState } from "react"

import ShoppingItem from "./ShoppingItem"

export default function ItemCard({item, deleteItem, editItem}) {
    const [editing, setEditing] = useState(false)

  return (
    <>
    <ShoppingItem item={item} deleteItem={deleteItem} />
    <button onClick={() => deleteItem(item.id)}>delete</button>
    <button onClick={() => setEditing(true)}>edit</button>
    </>

  )
}
