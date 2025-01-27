import { createContext } from "react";

export const StoreContext = createContext({
  counter: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});
