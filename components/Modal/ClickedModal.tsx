'use client'
import useRootStore from '@/hooks/useRootStore'
import {ModalOption} from '@/types'
import {observer} from 'mobx-react-lite'
import {useCallback} from "react";

const ClickedModal = () => {
    const { type, run } = useRootStore().modal;
    const isVisible = type === ModalOption.clicked;

    const hideModal = useCallback(() => {
        run(ModalOption.none)
    }, [run])

    return (
        <div className={`modalBasket ${isVisible ? "modalBasket__active" : ""}`}>
            
        </div>
    )
}



export default observer(ClickedModal)
