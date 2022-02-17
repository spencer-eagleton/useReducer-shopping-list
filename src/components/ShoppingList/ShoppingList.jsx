import ItemCard from "./ItemCard";

export default function ShoppingList({items, deleteItem, editItem}) {
  return (
    <>
      <ul>
    {items.map((item) => (
      <li key={item.id}>

        <ItemCard item={item} deleteItem={deleteItem} />
      </li>
    ))}
      </ul>
    </>
  )
}
