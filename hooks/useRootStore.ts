import RootStore from "@/store/RootStore";
import { useContext } from "react";

const useRootStore = () =>  useContext(RootStore)

export default useRootStore;