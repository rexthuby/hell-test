import React, {ReactNode} from 'react'

interface ColorfulButtonI {
    colorClass: string;
    paddingClass: string;
    isDisable?: boolean;
    children?: ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?:()=>void;
}

export const ColorfulButton = ({colorClass, paddingClass, children, onClick, isDisable = false, type = 'button'}: ColorfulButtonI) => (
    <button className={
        "c-transition text-gray-800 font-semibold border border-gray-400 rounded shadow " +
        `${isDisable ? 'bg-gray-100 cursor-default' : 'outline outline-transparent'} 
        ${isDisable ? '' : colorClass } ${paddingClass}`
    } disabled={isDisable} type={type} onClick={onClick}>
        {children}
    </button>
)
