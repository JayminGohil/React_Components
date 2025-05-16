import '../../styles/Badges.css'
import clsx from 'clsx'

export default function Badge({children,col="gray",variant="rectangle",...rest}){

    const classNames = clsx(
        "badge",
        variant==="pill" ? "pill" : "",
        col
    )

    return (
        <div className={classNames} {...rest}>
            <span>{children}</span>
        </div>
    )
}