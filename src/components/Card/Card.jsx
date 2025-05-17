import '../../styles/Card.css'

export default function Card({children,...rest}) {
    return (
        <div className="card-container" {...rest}>
            {children}
        </div>
    )
}


Card.Desc = function CardDesc({ children }) {
    return (
        <span className="desc-text">
            {children}
        </span>
    )
}

Card.Icon = function CardIcon({ children }) {
    return (
        <div className="icon-container">
            {children}
        </div>
    )
}

Card.Title = function CardTitle({ children }) {
    return (
        <span className="title-text">
            {children}
        </span>
    )
}