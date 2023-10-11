import { makeAutoObservable } from "mobx";
import ModalStore from "./ModalStore";
import { createContext } from "react";


class RootStore {
    modal:ModalStore = new ModalStore();


    constructor(){
        makeAutoObservable(this);
    }
}

const rootStore = new RootStore();

export default createContext(rootStore)