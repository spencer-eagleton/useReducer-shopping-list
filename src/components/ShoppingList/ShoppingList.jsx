import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({items}) {
  return (
    <>
      <div>ShoppingList</div>
      <ul>
    {items.map((item) => (
      <li key={item.id}>

        <ShoppingItem item={item} />
      </li>
    ))}
      </ul>
    </>
  )
}
