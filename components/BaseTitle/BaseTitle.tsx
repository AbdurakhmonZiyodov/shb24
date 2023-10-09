import { ReactNode, FC } from "react";



interface BaseTitleProps {
    children:ReactNode;
    className?:string;
}


const BaseTitle:FC<BaseTitleProps> = ({children, className = ''}) => (
    (
        <h2 className={`text-center pb-3 lg:pb-4 text-xl lg:text-2xl font-medium ${className}`}>
            {children}
        </h2>
    )
)
export default BaseTitle;