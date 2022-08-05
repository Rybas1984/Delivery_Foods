import style from "./Shops.module.css"
import React from "react";
import ShopsItem from "../ShopsItem/ShopsItem";
import FoodsBlock from "../FoodsBlock/FoodsBlock";
import Skeleton from "../FoodsBlock/Skeleton";




function Shops() {
    const [items, setItems] = React.useState([]);
    const [shopName, setShopName] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() =>{
        setIsLoading(true);
        fetch(`https://62eb567aad295463259c0f40.mockapi.io/Items`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
    }, [])
    return (
        <div className={style.container}>
            <ShopsItem  shopName={shopName} onClickShopChange={(i) => setShopName(i)}/>
            <div className={style.itemsFoodsContainer}>
                    <div className={style.itemsFoods}>
                        {
                            isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i} />) :
                            items.map(
                            (obj) => (<FoodsBlock key={obj.id} {...obj} />)
                            )
                        }

                    </div>
            </div>
        </div>
    );
}

export default Shops;