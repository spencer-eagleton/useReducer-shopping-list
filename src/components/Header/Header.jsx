import { useItems } from "../../context/ItemContext"


export default function Header() {
    const { items } = useItems();
  return (
    <div className="header">Items on list: {items.length}</div>
  )
}
