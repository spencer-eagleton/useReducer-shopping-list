import ItemCard from "./ItemCard"
import { useState } from "react"
import ItemForm from "./ItemForm"

export default function ShoppingItem({item, editItem, deleteItem}) {
    const [editing, setEditing] = useState(false)
if (editing) {
    return (
        <ItemForm item={item} editItem={editItem} setEditing={setEditing} deleteItem={deleteItem} />
    )
} else {
    return (
        <ItemCard item={item} editItem={editItem} setEditing={setEditing} deleteItem={deleteItem}/>
    )
  }
}
