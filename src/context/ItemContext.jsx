import { createContext, useContext, useReducer } from "react";

const initialItems = [
    { id: 0, input: 'Egg' },
    { id: 1, input: 'Cheeseburger' },
    { id: 2, input: 'Banan' }
  ]
  

const itemsReducer = (items, action) => {
    switch (action.type) {
      case 'add': {
        return [
          ...items, 
          {
            id: action.id,
            input: action.input
          }
        ]
      }
      case 'delete': {
        return items.filter((item) => item.id !== action.id)
      }
      case 'edit': {
        return items.map((item) => {
          if (item.id === action.task.id) {
            return action.task
          }
          return item
        })
      }
      case 'clear': {
        return items = ([]);
      }
    
      default: {
        throw Error(`${action.type} is not recognized`)
      }
    }
  }

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
    const [items, dispatch] = useReducer(itemsReducer, initialItems)

    const handleAdd = (input) => {
      dispatch({
        type: 'add',
        id: items.length + 1,
        input,
      })
    }
    const handleDelete = (itemID) => {
      dispatch({
        type: 'delete',
        id: itemID,
      })
    }
    const handleEdit = (task) => {
      dispatch({
        type: 'edit',
        task,
      })
    }

    const handleClear = (items) => {
      dispatch({
        type: 'clear',
        items
      })
    }

    return (
        <ItemContext.Provider
            value={{items, handleAdd, handleDelete, handleEdit, handleClear}}
        >
            {children}
        </ItemContext.Provider>
    )
}

const useItems = () => {
    const context = useContext(ItemContext);

    if (context === undefined) {
        throw new Error('useItems must be used inside ItemProvider');
    }

    return context;
};

export { ItemProvider, useItems }