

export default function ItemCard({item, deleteItem, setEditing}) {
    
        return (
      
          
          
          <>
          <p>{item.input}</p>
          <button onClick={() => deleteItem(item.id)}>delete</button>
          <button onClick={() => setEditing(true)}>edit</button>
          </>
      
        )

}
