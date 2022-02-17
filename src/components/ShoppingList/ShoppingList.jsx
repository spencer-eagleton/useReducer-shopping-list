import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({items, deleteItem, editItem}) {
  return (
    <>
      <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ShoppingItem item={item} editItem={editItem} deleteItem={deleteItem} />
      </li>
    ))}
      </ul>
    </>
  )
}
