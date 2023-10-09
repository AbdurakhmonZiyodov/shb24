'use client'
import useCounter from "@/hooks/useCounter";
import Image from "next/image";

import { FaPlus, FaMinus } from 'react-icons/fa'

const ProductCard = () => {

    const { increment, decrement, count } = useCounter(1)
    return (
        <div className="i__prodct">
            <div>
                <span className="i__product-badge">-11%</span>
                <Image className="object-contain my-4" src="/potatoes.jpeg" alt="prodct card" width={150} height={150} />
                <h4 className="i__product-title">Миф автомат 400 гр</h4>
                <span className="i__product-price">
                    <del>9,000 сум</del>
                    <br />
                    8,000 сум
                </span>
            </div>


            <div className="i__product-footer">
                <main>
                    <button type="button" onClick={increment}>
                        <FaPlus className="text-lg font-bold" />
                    </button>
                    <span className="i__product-count">{count}</span>
                    <button type="button" onClick={decrement}>
                        <FaMinus className="text-lg font-bold" />
                    </button>
                </main>

                <button className="i__product-basket_btn">Корзинаға</button>
            </div>
        </div>
    )
}

export default ProductCard;