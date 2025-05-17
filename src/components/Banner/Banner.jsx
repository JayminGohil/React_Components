import '../../styles/Banner.css'
import clsx from 'clsx'
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { MdCancel } from "react-icons/md";

export default function Banner({ children, variant="", ...rest}) {
    
    function getIcon(){
        if(!variant || variant=="neutral"){
            return <FaInfoCircle size={20}/>
        }else if(variant==="success"){
            return <FaCheckCircle size={20}/>
        }else if(variant==="warning"){
            return (<IoIosWarning size={20}/> )
        }else if(variant==="error"){
            return (<MdCancel size={20}/> )
        }
    }
    
    const icon = getIcon()
    
    const classNames = clsx(
        "Banner",
        variant
    )
    return (
        <div className={classNames} {...rest}>
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                {children}
            </div>
        </div>
    )
}

Banner.Title = function BannerTitle({children}){
    return (
        <span className="text-main">
            {children}
        </span>
    )
}

Banner.Subtitle = function BannerSubtitle({ children }) {
    return (
        children &&
        <span className="text-sub">
            {children}
        </span>
    )
}