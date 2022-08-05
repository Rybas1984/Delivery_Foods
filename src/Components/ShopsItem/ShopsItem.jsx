import style from "./ShopsItem.module.css"
import {useState} from "react";




function ShopsItem() {
    const [activeIndex, setActiveIndex] = useState(0);
    const shopsItem = ["McDonalds", "KFC", "Pasteria", "Sushipapa"];
    const onClickShop = (index) => {
        setActiveIndex(index);
        console.log(activeIndex)
    }

    return (
        <div className={style.ShopItem}>
            <ul>
                {shopsItem.map((value, i) =>(
                   <li  key={i} onClick={() => onClickShop(i)} className={activeIndex === i ? style.active : "" }>{value}</li>
                ))
                }
            </ul>

        </div>
    );
}

export default ShopsItem;