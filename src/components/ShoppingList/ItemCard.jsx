

export default function ItemCard({item, deleteItem, setEditing}) {
    
    return (
      
          
          
        <>
          <span>{item.input}</span>
          <button onClick={() => deleteItem(item.id)}>delete</button>
          <button onClick={() => setEditing(true)}>edit</button>
        </>
      
    )

}
