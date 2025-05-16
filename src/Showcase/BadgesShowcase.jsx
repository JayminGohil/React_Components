import Badge from "../components/Badges/Badge"
import '../styles/Showcase.css'

export default function BadgesShowcase() {
    const colors = ["", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    return (
        <>
            <span className="heading md">
                Badges
            </span>

            <div className="badges-container">
                <span className='heading sm'>Rectangle</span>
                <div className="badgeDisplay">
                    {
                        colors.map(color => {
                            return <Badge key={color} col={color}>Badge</Badge>
                        })
                    }
                </div>
                <span className='heading sm'>Pill</span>
                <div className="badgeDisplay">
                    {
                        colors.map(color => {
                            return <Badge key={color} col={color} variant='pill'>Badge</Badge>
                        })
                    }
                </div>

            </div>
        </>
    )
}