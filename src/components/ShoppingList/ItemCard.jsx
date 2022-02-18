import { useItems } from "../../context/ItemContext"


export default function ItemCard({item, setEditing}) {
    const { handleDelete } = useItems();
    return (
       <>
          <span>{item.input}</span>
          <button aria-label={`Delete ${item.input}`} onClick={() => handleDelete(item.id)}>delete</button>
          <button aria-label={`Edit ${item.input}`} onClick={() => setEditing(true)}>edit</button>
        </>
    )
}
