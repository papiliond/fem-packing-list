import { createContext, useReducer } from 'react';
import { getInitialItems } from './lib/items';
import { reducer } from './lib/reducer';

export const ItemsContext = createContext({});
export const ActionsContext = createContext({});

const ItemsProvider = ({ children }) => {
  const reducerProps = useReducer(reducer, getInitialItems());

  return (
    <ItemsContext.Provider value={reducerProps}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
