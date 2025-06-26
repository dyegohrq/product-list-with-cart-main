import { LiaCartPlusSolid } from "react-icons/lia";
import style from "../typography.module.css";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

interface ButtonProps {
  item: ItemProps;
  onClick: (item: ItemProps) => void;
  onIncrease: () => void;
  onDecrease: () => void;
  amount: number;
  isAdded: boolean;
}

export interface ItemProps {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  amount: number;
  total: number;
}

export function Button({ item, onClick, isAdded, onDecrease, onIncrease, amount }: ButtonProps) {
  // const [activeButton, setActiveButton] = useState(false)

  

  return (
    <>
      {isAdded ? (
        <div className=" flex items-center justify-between bg-red py-3 px-7 w-full max-w-[163px] rounded-[999px] text-white absolute bottom-[-23px] ">
          <button 
            onClick={() => onDecrease()}
            className=" hover:bg-white transition-all duration-500 hover:text-red rounded-full cursor-pointer ">
            <FiMinusCircle />
          </button>
          <span className={`${style["text-present-4-bold"]}`}> {amount} </span>
          <button 
            onClick={() => onIncrease()}
            className="hover:bg-white transition-all duration-500 hover:text-red rounded-full cursor-pointer ">
            <FiPlusCircle />
          </button>
        </div>
      ) : (
        <button
          className=" flex items-center gap-2 py-3 px-7 border border-rose-400 hover:border-red text-rose-900 hover:text-red transition-all duration-500 rounded-[999px] absolute bottom-[-23px] bg-white cursor-pointer "
          onClick={() => {
            onClick(item);
          }}
        >
          <LiaCartPlusSolid className=" text-red text-[20px] " />
          <span className={`${style["text-present-4-bold"]}`}>
            Add to cart
          </span>
        </button>
      )}
    </>
  );
}
