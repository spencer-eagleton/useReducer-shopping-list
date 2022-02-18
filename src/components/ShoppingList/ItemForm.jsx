import { useItems } from "../../context/ItemContext"

export default function ItemForm({item, setEditing}) {

const { handleDelete, handleEdit } = useItems();

  return (
    <>
        <input aria-label={`${item.input} input`} onChange={(e) => handleEdit({...item, input: e.target.value})} value={item.input} placeholder={item.input} />
        <button onClick={() => handleDelete(item.id)}>delete</button>
        <button onClick={() => setEditing(false)}>update</button>
    </>
  )
}
