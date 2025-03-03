import s from './ProductCard.module.css'
import {useEffect, useState} from "react";
import {fetchProducts, Product} from "../../api.ts";
import Loader from "../Loader/Loader.tsx";
import Button from "../UI/Button/Button.tsx";

const ProductCard = ( ) => {

    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                fetchProducts().then(data => {
                    setProducts(data)
                    setTimeout(()=>{setIsLoading(true)}, 1200);
                })

            }catch (err){
                console.log('ddsd', err)
            }
        }
        loadProducts()
    }, []);

    if (!isLoading) return <Loader />
    else {
        return (
            <>
                {products.map(product=>
                    <div className={s.cardContainer} key={product.id}>
                        <img src={product.image} className={s.img} loading={"lazy"}/>
                        <div className={s.infoContainer}>
                            <p className={s.title}>{product.title}</p>
                            <div className={s.infoProductContainer}>
                                <p className={s.infoProductItems}>Rate: {product.rating.rate}</p>
                                <p className={s.infoProductItems}>Count: {product.rating.count}</p>
                            </div>
                            <div className={s.buyProductContainer}>
                                <p>{product.price}$</p>
                                <Button />
                            </div>
                        </div>
                    </div>
                )}
            </>

        );
    }

};

export default ProductCard;
