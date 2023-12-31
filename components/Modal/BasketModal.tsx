'use client'
import useCounter from '@/hooks/useCounter'
import useRootStore from '@/hooks/useRootStore'
import { ModalOption } from '@/types'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useCallback, useEffect } from 'react';

const BasketModal = () => {
    const { type, run } = useRootStore().modal;
    const isVisible = type === ModalOption.basket;

    useEffect(() => {
        const bodyElement = document.querySelector('body');
        if (type !== ModalOption.none) {
            bodyElement?.classList?.add('overflow-hidden')
        } else {
            bodyElement?.classList?.remove('overflow-hidden')
        }
    }, [type])

    const hideModal = useCallback(() => {
        run(ModalOption.none)
    }, [run])

    return (
        <div className={`modalBasket ${isVisible && 'modalBasket__active'}`}>
            <main className='modalBasket__container'>
                <div className={'modalBasket__container-top'}>
                    <h2 className='modalBasket__title'>Сатып алыў корзинасы</h2>
                    <button type={'button'} className='modalBasket__btn' onClick={hideModal}>
                        <AiOutlineClose className='text-2xl transition-all duration-200 hover:rotate-180' />
                    </button>
                </div>

                <div className={'modalBasket__container-scroll'}>
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                </div>

                <div className='modalBasket__bottom-container'>
                    <p className={'modalBasket__price'}>
                        Жәми буйыртпалар суммасы: <b>228,500</b> сум
                    </p>
                    <button type={'button'} className={'modalBasket__bottom-btn group'}>
                        <span className={'group-hover:animate-bounce'}>Буйыртпаны жибериў</span> <AiOutlineRight className={'transition-all duration-200 ease-in group-hover:scale-125 group-hover:translate-x-3'} />
                    </button>
                </div>
            </main>
        </div>
    )
}


const BasketCard = () => {
    const { increment, decrement, count } = useCounter(1);
    return (
        <div className='modalBasket__card'>
            <Image width={75} height={75} alt={'card image'} src={'/juice.jpeg'} className={'object-contain'} />

            <main className={'modalBasket__card-main'}>
                <div className='modalBasket__card-info'>
                    <h3 className={'text-[15px] font-normal'}>{`'Hidrolife' Eco`}</h3>
                    <h2 className={'text-[17px] font-extrabold'}>6,500 сум</h2>
                </div>

                <div className='modalBasket__card-counter'>
                    <button type='button' onClick={increment} className={'modalBasket__card-btn bg-my-red'}>
                        <FaPlus className='text-[12px]' />
                    </button>
                    <span className='i__product-count'>{count}</span>
                    <button type='button' onClick={decrement} className={'modalBasket__card-btn bg-my-green'}>
                        <FaMinus className='text-[12px]' />
                    </button>

                    <button type={'button'} className={'modalBasket__card-counter__btn'}>
                        <AiOutlineClose className='text-[15px]' />
                    </button>
                </div>

                <div className='modalBasket__card-money'>
                    <h4>6,500 сум</h4>
                </div>
            </main>
        </div>
    )
}

export default observer(BasketModal)
