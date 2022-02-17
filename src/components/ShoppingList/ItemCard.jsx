

export default function ItemCard({item, deleteItem, setEditing}) {
    
    return (
       <>
          <span>{item.input}</span>
          <button onClick={() => deleteItem(item.id)}>delete</button>
          <button aria-label={`Edit ${item.input}`} onClick={() => setEditing(true)}>edit</button>
        </>
    )
}
