import { LiaCartPlusSolid } from "react-icons/lia";
import data from "../data.json";
import style from "./components/typography.module.css";
import illustration from '/assets/images/illustration-empty-cart.svg'

export default function App() {
  return (
    <div className=" p-6 ">
      <h1 className={` ${style["text-present-1"]} text-rose-900 `}>
        {" "}
        Desserts{" "}
      </h1>

      <div>
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 " >
          {data.map((item) => (
            <div className=" pt-8 pb-6 " key={item.name} >
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
                <button className=" flex items-center gap-2 py-3 px-7 border border-rose-400 rounded-[999px] absolute bottom-[-23px] bg-white  ">
                  <LiaCartPlusSolid className=" text-red text-[20px] " />
                  <span
                    className={`${style["text-present-4-bold"]} text-rose-900 `}
                  >
                    Add to cart
                  </span>
                </button>
              </div>
              <div className=" mt-9 ">
                <span className={`${style["text-present-4"]} text-rose-500  `}>
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
          ))}
        </div>
        <div>
          <h1>Your Cart (0)</h1>
          <div>
            <img src={illustration} alt="" />
            <span>Your added items will appear here</span>
          </div>
        </div>
      </div>
    </div>
  );
}
