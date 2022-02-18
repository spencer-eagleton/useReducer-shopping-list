import { useItems } from "../../context/ItemContext"


export default function Header() {
    const { items } = useItems
  return (
    <div className="header">Header</div>
  )
}
