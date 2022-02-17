
export default function ItemForm({item, setEditing}) {
  return (
    <>
        <input placeholder={item.input}></input>
        <button>delete</button>
        <button onClick={() => setEditing(false)}>update</button>
    </>
  )
}
