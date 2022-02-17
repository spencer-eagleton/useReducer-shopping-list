

export default function ItemCard({item, deleteItem, setEditing}) {
    
    return (
       <>
          <span>{item.input}</span>
          <button aria-label={`Delete ${item.input}`} onClick={() => deleteItem(item.id)}>delete</button>
          <button aria-label={`Edit ${item.input}`} onClick={() => setEditing(true)}>edit</button>
        </>
    )
}
