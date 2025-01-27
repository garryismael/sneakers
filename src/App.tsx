import React, { useState } from "react";
import "./App.css";
import HeaderNav from "./components/Header";
import HeroSection from "./sections/hero";
import { StoreContext } from "./context";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev > 0 ? prev - 1 : 0 );
  const reset = () => setCounter(0);

  return (
    <StoreContext.Provider value={{ counter, increment, decrement, reset }}>
      <HeaderNav />
      <HeroSection />
    </StoreContext.Provider>
  );
}

export default App;
