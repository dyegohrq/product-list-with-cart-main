import data from "../data.json";
import style from "./components/typography.module.css";
import illustration from "/assets/images/illustration-empty-cart.svg";
import { Button, type ItemProps } from "./components/button";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import iconCarbon from '/assets/images/icon-carbon-neutral.svg'
import { Modal } from "./components/modal";

export default function App() {
  const [product, setProduct] = useState<ItemProps[]>([]);
  const updateData = data.map((item) => ({
    ...item,
    amount: 0,
    total: 0,
  }));
  const totalCart = product.reduce((acc, item) => acc + item.total, 0)
  const [modalActive, setModalActive] = useState(false)

  function handleAddToCart(item: ItemProps) {
    const exists = product.some((p) => p.name === item.name);

    if (!exists) {
      setProduct((prev) => [
        ...prev,
        { ...item, amount: 1, total: item.price },
      ]);
    }
  }

  function decrementAmount(name: string) {
    setProduct((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? {
                ...item,
                amount: item.amount - 1,
                total: (item.amount - 1) * item.price,
              }
            : item
        )
        .filter((item) => item.amount > 0)
    );
  }

  function incrementAmount(name: string) {
    setProduct((prev) =>
      prev.map((item) =>
        item.name === name
          ? {
              ...item,
              amount: item.amount + 1,
              total: (item.amount + 1) * item.price,
            }
          : item
      )
    );
  }

  function getAmount(name: string) {
    const found = product.find((p) => p.name === name);

    return found ? found.amount : 0;
  }

  
  return (
    <div className=" p-6 bg-rose-50 ">
      <h1 className={` ${style["text-present-1"]} text-rose-900 `}>
        {" "}
        Desserts{" "}
      </h1>

      <div className="lg:flex w-full h-auto gap-8">
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {updateData.map((item) => {
            const isAdded = product.some((p) => p.name === item.name);
            const amount = getAmount(item.name);

            return (
              <div className=" pt-8 pb-6 " key={item.name}>
                <div className="relative flex flex-col items-center ">
                  <div className=" rounded-lg overflow-hidden ">
                    <img
                      className=" sm:hidden w-full h-full "
                      src={item.image.mobile}
                      alt={item.name}
                    />
                    <img
                      className=" hidden sm:block lg:hidden w-full h-full "
                      src={item.image.tablet}
                      alt={data[0].name}
                    />
                    <img
                      className=" hidden lg:block w-full h-full "
                      src={item.image.mobile}
                      alt={item.name}
                    />
                  </div>
                  <Button
                    item={item}
                    onClick={handleAddToCart}
                    isAdded={isAdded}
                    onDecrease={() => decrementAmount(item.name)}
                    onIncrease={() => incrementAmount(item.name)}
                    amount={amount}
                  />
                </div>
                <div className=" mt-9 ">
                  <span
                    className={`${style["text-present-4"]} text-rose-500  `}
                  >
                    {" "}
                    {item.category}{" "}
                  </span>
                  <h2 className={`${style["text-present-3"]} text-rose-900 `}>
                    {" "}
                    {item.name}{" "}
                  </h2>
                  <span className={`${style["text-present-3"]} text-red `}>
                    {" "}
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-full lg:max-w-[30%] h-auto my-8 p-6 bg-white rounded-[12px] ">
          <h1 className={`${style["text-present-2"]} text-red `}>
            Your Cart ( {product.reduce((acc, item) => acc + item.amount, 0)} )
          </h1>
          <div>
            {product.length === 0 ? (
              <div className=" w-full h-auto flex flex-col items-center mt-[53px] mb-[40px]  " >
                <img src={illustration} alt="illustration-empty-cart" />
                <span
                  className={`${style["text-present-4-bold"]} text-rose-500  `}
                >
                  Your added items will appear here
                </span>
              </div>
            ) : (
              <div>
                <ul className="mt-6">
                  {product.map((item) => (
                    <li className=" flex items-center justify-between border-b border-b-rose-100 pb-4 mt-4 " >
                      <div className="w-full " >
                        <p
                          className={`${style["text-present-4-bold"]} text-rose-900 mb-2 `}
                        >
                          {item.name}
                        </p>
                        <div className="flex gap-2 items-center " >
                          <span className={`${style['text-present-4-bold']} text-red `} > {item.amount}x </span>
                          <span className={`${style['text-present-4']} text-rose-500 `} >
                            @{" "}
                            {item.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </span>
                          <span className={`${style['text-present-4-bold']} text-rose-500 `} >
                            {item.total.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </span>
                        </div>
                      </div>
                      <div className=" w-full flex justify-end " >
                        <button className=" text-[20px] text-rose-400 hover:text-rose-900 transition-all duration-500 cursor-pointer " >
                          <IoCloseCircleOutline />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between py-6 " >
                  <p className={` ${style['text-present-4']} text-rose-900 `} >Order Total</p>
                  <span className={`${style['text-present-2']} text-rose-900 `} >{ totalCart.toLocaleString( 'en-US', {
                    style: 'currency',
                    currency: 'USD'
                  } ) }</span>
                </div>
                <div className="flex items-center justify-center gap-2 " >
                  <img src={iconCarbon} alt="icon-carbon-neutral" />
                  <p className={`${style['text-present-4']} text-rose-900 `} >This is a <span className={`${style['text-present-4-bold']}`} >carbon-neutral</span> delivery </p>
                </div>
                <button 
                  className={ ` ${style['text-present-3']} bg-red hover:bg-rose-900 transition-all duration-500 text-white w-full mt-6 py-4 flex items-center justify-center rounded-[999px] cursor-pointer ` } 
                  onClick={() => setModalActive(true)}  
                >
                  Confirm Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {
        modalActive && (<Modal item={product} isOpen={modalActive} onClose={() => setModalActive(false)} total={totalCart} />)
      }
    </div>
  );
}

/**
 *
 */
