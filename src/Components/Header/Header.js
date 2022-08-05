import style from './header.module.css'

function Header() {
    return (
        <div className={style.container}>
            <div className={style.item}>Supper Delivery Foods</div>
        </div>
    );
}

export default Header;