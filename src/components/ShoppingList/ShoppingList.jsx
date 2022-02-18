import { useItems } from "../../context/ItemContext";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList() {
  const { items } = useItems();
  return (
    <>
      <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ShoppingItem item={item}  />
      </li>
    ))}
      </ul>
    </>
  )
}
