import style from "../ShoppingCart/ShoppingCart.module.css";

function ShoppingCart() {
    return  (
        <div className={style.container}>
            <div className={style.itemsForm}>
                <form>
                    Name:
                    <input type={"text"} />
                </form>
            </div>
            <div className={style.itemsFoods}> Product </div>

        </div>
    );
}

export default ShoppingCart;