import data from "../data.json";
import style from "./components/typography.module.css";
import illustration from "/assets/images/illustration-empty-cart.svg";
import { Button, type ItemProps } from "./components/button";
import { useState } from "react";

export default function App() {
  const [product, setProduct] = useState<ItemProps[]>([]);
  const updateData = data.map((item) => ({
    ...item,
    amount: 0,
    total: 0,
  }));

  function handleAddToCart(item: ItemProps) {
    const exists = product.some((p) => p.name === item.name)

    if (!exists) {
      setProduct( (prev) => [...prev, {...item, amount: 1, total: item.price}] )
    }

  }

  function decrementAmount( name:string ) {
    setProduct( 
      (prev) => prev.map((item) => 
        item.name === name ? 
        {
          ...item,
          amount: item.amount - 1,
          total: (item.amount - 1) * item.price
        } :
          item
      ) .filter( (item) => item.amount > 0 )
    )
  }

  function incrementAmount( name:string ) {
    setProduct(
      (prev) => prev.map((item) => 
        item.name === name ?
        {
          ...item,
          amount: item.amount + 1,
          total: (item.amount + 1) * item.price
        } :
        item
      ) 
    )
  }

  function getAmount(name:string) {
    const found = product.find((p) => p.name === name)

    return found ? found.amount : 0
  }

  return (
    <div className=" p-6 ">
      <h1 className={` ${style["text-present-1"]} text-rose-900`}>
        {" "}
        Desserts{" "}
      </h1>

      <div className="lg:flex justify-around ">
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 lg:max-w-[70%] ">
          {updateData.map((item) => {
            const isAdded = product.some( (p) => p.name === item.name );
            const amount = getAmount(item.name)

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
                    onDecrease={() => decrementAmount(item.name) }
                    onIncrease={() => incrementAmount(item.name) }
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
        <div className=" my-8 p-6 lg:max-w-[30%] ">
          <h1 className={`${style["text-present-2"]} text-red `}>
            Your Cart ( { product.reduce( (acc, item) => acc + item.amount, 0 ) } )
          </h1>
          <div className="">
            {
              product.length === 0 ? (
                <div>
                  <img src={illustration} alt="illustration-empty-cart" />
                  <span className={`${style["text-present-4-bold"]} text-rose-500  `}>
                    Your added items will appear here
                  </span>
                </div>
              ) : product.map((item) => (
                <ul>
                  <li>
                    <div>
                      <p> {item.name} </p>
                      <div>
                        <span> {item.amount}x </span>
                        <span> @ {item.price.toLocaleString( 'en-US', {
                          style: 'currency',
                          currency: 'USD'
                        } ) } </span>
                        <span> { item.total.toLocaleString( 'en-US', {
                          style: 'currency',
                          currency: 'USD'
                        } ) } </span>
                      </div>
                    </div>
                    <div>

                    </div>
                  </li>
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
