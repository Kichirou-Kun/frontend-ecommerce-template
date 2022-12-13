import React from "react";

interface InitialState {
  openSidebar: boolean;
  openCartSidebar: boolean;
}
type Action =
  | { type: "OPEN_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" };
const initialState = {
  openSidebar: false,
  openCartSidebar: false,
};

export const UIContext = React.createContext<InitialState | any>(initialState);
export const uireducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        openSidebar: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        openSidebar: false,
      };
    }
    case "OPEN_CART": {
      return {
        ...state,
        openCartSidebar: true,
      };
    }
    case "CLOSE_CART": {
      return {
        ...state,
        openCartSidebar: false,
      };
    }
    default:
      return state;
  }
};
export const UIContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(uireducer, initialState);
  const setOpenSidebar = React.useCallback(() => {
    dispatch({ type: "OPEN_SIDEBAR" });
  }, [dispatch]);
  const setCloseSidebar = React.useCallback(() => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  }, [dispatch]);

  const setOpenCart = React.useCallback(() => {
    dispatch({ type: "OPEN_CART" });
  }, [dispatch]);
  const setCloseCart = React.useCallback(() => {
    dispatch({ type: "CLOSE_CART" });
  }, [dispatch]);

  const value = React.useMemo(
    () => ({
      ...state,
      setOpenSidebar,
      setCloseSidebar,
      setOpenCart,
      setCloseCart,
    }),
    [state, setOpenSidebar, setCloseSidebar, setOpenCart, setCloseCart]
  );
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
type ContextState = InitialState & {
  setCloseSidebar: () => void;
  setOpenSidebar: () => void;
  setOpenCart: () => void;
  setCloseCart: () => void;
};
export const useUI = () => {
  const context = React.useContext<ContextState>(UIContext);
  if (context === undefined)
    throw new Error(`useUI must be used within a UIProvider`);

  return context;
};
