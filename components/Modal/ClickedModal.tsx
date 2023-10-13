'use client'
import useRootStore from '@/hooks/useRootStore'
import Image from 'next/image'
import { ModalOption } from '@/types'
import { observer } from 'mobx-react-lite'
import { useCallback } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai'


const ClickedModal = () => {
    const { type, run } = useRootStore().modal;
    const isVisible = type === ModalOption.clicked;

    const hideModal = useCallback(() => {
        run(ModalOption.none)
    }, [run])

    return (
        <div className={`modalBasket modalClicked ${isVisible ? "modalBasket__active" : ""}`}>
            <main className={'modalClicked__container'}>
                <h2 className={'modalClicked__title'}>Кофе &quot;Nescafe&quot; Classiс 100 гр ЖБ</h2>

                <button type={'button'} className={'modalClicked__close-btn'} onClick={hideModal}>
                    <AiOutlineClose className={"text-xl"} />
                </button>

                <section className={'modalClicked__main-section'}>
                    <Image width={180} height={180} src={'/juice.jpeg'} alt={'shb24 modal'} />

                    <div className="modalClicked__main-info">
                        <span className="modalClicked__main-type">Nestle</span>
                        <h4 className={"modalClicked__main-name"}>Кофе &quot;Nescafe&quot; Classiс 100 гр ЖБ</h4>
                        <h5 className={'modalClicked__main-price'}>Баҳасы: 29,000 сум</h5>
                        <div className="i__product-footer">
                            <main>
                                <button type="button">
                                    <FaPlus className="text-lg font-bold" />
                                </button>
                                <span className="i__product-count">21</span>
                                <button type="button">
                                    <FaMinus className="text-lg font-bold" />
                                </button>
                            </main>
                            <button className="i__product-basket_btn">Корзинаға</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}



export default observer(ClickedModal)
