import { createContext, useContext } from "react";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {


    return (
        <ItemContext.Provider>
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