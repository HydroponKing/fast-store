import ProductCard from "../ProductCard/ProductCard.tsx";
import s from './Main.module.css'

const Main = () => {

        return (
            <div className={s.centerContainer}>
                <div className={s.ProductCardContainer}>
                    <ProductCard />
                </div>
            </div>
        );
    }

export default Main;