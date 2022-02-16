import { useReducer } from 'react'

import ShoppingList from '../../components/ShoppingList/ShoppingList'
import UserInput from '../../components/userInput/userInput'

const initialItems = [
  { id: 0, input: 'Egg' },
  { id: 1, input: 'Cheeseburger' },
  { id: 2, input: 'Banan' }
]

const itemsReducer = (items, action) => {
  switch (action.type) {
    case 'add': {
      console.log(items);
      return [
        ...items, 
        {
          id: action.id,
          input: action.input
        }
      ]
    }
    default: {
      throw Error(`${action.type} is not recognized`)
    }
  }
}

export default function Home() {

  const [items, dispatch] = useReducer(itemsReducer, initialItems)

  const handleAdd = (input) => {
    dispatch({
      type: 'add',
      id: items.length + 1,
      input,
    })
  }

  return (
    <>
    <div>Home</div>
    <UserInput addItem={handleAdd} />
    <ShoppingList items={items} />
    </>
  )
}
