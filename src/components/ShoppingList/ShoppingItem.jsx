
export default function ShoppingItem({item, deleteItem}) {
  return (
    <>
        <p>{item.input}</p>
        <button onClick={() => deleteItem(item.id)}>delete</button>
        <button>edit</button>
    </>
  )
}
