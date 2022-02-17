
export default function ItemForm({item}) {
  return (
    <>
        <input placeholder={item.input}></input>
        <button>delete</button>
        <button>update</button>
    </>
  )
}
