import { StoreContext } from "@/context";
import React, { useContext } from "react";

type Props = {
  className: string;
};
const Cart = (props: Props) => {
  const { counter } = useContext(StoreContext);
  return (
    <div className={`bg-white py-8 rounded-xl ${props.className}`}>
      <h1 className="px-5 pb-5 font-bold text-black border-b border-b-grayish-blue">
        Cart
      </h1>
      {counter > 0 ? (
        <div className="px-5 py-5">
          <div className="flex items-center justify-between ">
            <img
              src="/images/image-product-1-thumbnail.jpg"
              width={176}
              height={176}
              className="w-10 h-10 rounded-md"
            />
            <div className="text-dark-grayish-blue">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                <span>$125.00 x {counter}</span>{" "}
                <span className="font-bold text-black">
                  ${(125.0 * counter).toFixed(2)}
                </span>
              </p>
            </div>
            <img src="/images/icon-delete.svg" width="14" height="16" />
          </div>
          <button className="w-full py-4 mt-5 text-base font-bold text-black bg-orange rounded-xl">
            Checkout
          </button>
        </div>
      ) : (
        <div className="px-5 pt-12 pb-5 font-bold text-center text-dark-grayish-blue">
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
