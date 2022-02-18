import ItemCard from "./ItemCard"
import { useState } from "react"
import ItemForm from "./ItemForm"

export default function ShoppingItem({item}) {
    const [editing, setEditing] = useState(false)
if (editing) {
    return (
        <ItemForm item={item}  setEditing={setEditing}  />
    )
} else {
    return (
        <ItemCard item={item} setEditing={setEditing} />
    )
  }
}
