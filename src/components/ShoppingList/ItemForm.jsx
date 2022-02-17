
export default function ItemForm({item, setEditing, deleteItem}) {
  return (
    <>
        <input placeholder={item.input} />
        <button onClick={() => deleteItem(item.id)}>delete</button>
        <button onClick={() => setEditing(false)}>update</button>
    </>
  )
}
