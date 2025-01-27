import React, { useContext } from "react";
import { StoreContext } from "../../context";
import Cart from "../Cart";

const HeaderNav = () => {
  const { counter } = useContext(StoreContext);
  const [close, setClose] = React.useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between h-20 px-6 bg-white">
      <div className="flex items-center gap-4">
        <img src="/images/icon-menu.svg" width={16} height={15} />
        <img src="/images/logo.svg" width={138} height={20} />
      </div>
      <div className="flex items-center gap-5 ml-auto">
        <button className="relative" onClick={() => setClose(!close)}>
          <img src="/images/icon-cart.svg" width={22} height={20} />
          {counter > 0 && (
            <span className="absolute px-1.5 text-xs text-white rounded-full -top-3 -right-1 bg-orange">
              {counter}
            </span>
          )}
        </button>
        <div className="w-6 h-6 rounded-full">
          <img
            src="/images/image-avatar.png"
            width={100}
            height={100}
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
      <Cart
        className={`absolute left-2 right-2 z-50 top-[90px] ${
          close ? "hidden" : "block"
        }`}
      />
    </header>
  );
};

export default HeaderNav;
