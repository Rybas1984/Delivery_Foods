import style from "./FoodsBlock.module.css"




function FoodsBlock({url, title, price, shop}) {

    // const arrFoods = props.data
    return (
        <div className={style.foodsBlock}>
            <img className={style.imgFood}
                 src={url}
                 alt={title} />
            <h4 className={style.title}>{title}</h4>
            <h4 className={style.price}>{shop}</h4>
            <div className={style.price} > {price} грн </div>
            <button className={style.button}>Добавить</button>
        </div>
    );
}

export default FoodsBlock;