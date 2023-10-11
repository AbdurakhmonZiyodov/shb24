import { ModalOption } from "@/types";
import { makeAutoObservable } from "mobx";

export default class ModalStore {
    type:ModalOption = ModalOption.none;

    constructor(){
        makeAutoObservable(this)
    }

    run = (type:ModalOption) => {
        this.type = type;
    }
}

