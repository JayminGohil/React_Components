import '../../styles/Card.css'

export default function Card({children,...rest}) {
    return (
        <div className="card-container" {...rest}>
            {children}
        </div>
    )
}