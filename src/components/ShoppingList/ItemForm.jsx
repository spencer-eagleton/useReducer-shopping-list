
export default function ItemForm({item, setEditing, deleteItem, editItem}) {



  return (
    <>
        <input onChange={(e) => editItem({...item, input: e.target.value})} value={item.input} placeholder={item.input} />
        <button onClick={() => deleteItem(item.id)}>delete</button>
        <button onClick={() => setEditing(false)}>update</button>
    </>
  )
}
