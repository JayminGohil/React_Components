import "../../styles/Testimonial.css"
import Bob from '../../assets/images/bob.png'
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonial(){
    return (
        <>
            <div className="testimonial-container">
                <div className="tm-img-container">
                    <img src={Bob} alt="Bob Ziroll" />
                </div>
                <div className="tm-right-container">
                    <ImQuotesLeft color="rgba(255, 255, 255, 0.25)" size={50}/>
                    <span className="tm-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                    </span>
                    <div className="tm-person-details">
                        <span className="tm-person-name">Bob Ziroll</span>
                        <span className="tm-person-title">Scrimba, Head of Education</span>
                    </div>
                </div>
            </div>
        </>
    )
}