import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({items, deleteItem}) {
  return (
    <>
      <ul>
    {items.map((item) => (
      <li key={item.id}>

        <ShoppingItem item={item} deleteItem={deleteItem}/>
      </li>
    ))}
      </ul>
    </>
  )
}
