import Testimonial from "../components/Testimonials/Testimonial"
import "../styles/Showcase.css"
import Bob from '../assets/images/bob.png'

export default function TestimonialsShowcase() {
    return (
        <>
            <span className="heading md">
                Testimonial
            </span>
            <div className="testimonials-container">

                <Testimonial>
                    <Testimonial.Image src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" />
                    <Testimonial.Content>
                        <Testimonial.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                        </Testimonial.Text>
                        <Testimonial.Person name="Emily Carter" post="Product Manager" company="NovaTech Solutions" />
                    </Testimonial.Content>
                </Testimonial>
                
                <Testimonial>
                    <Testimonial.Image src={Bob} />
                    <Testimonial.Content>
                        <Testimonial.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                        </Testimonial.Text>
                        <Testimonial.Person name="Bob Ziroll" post="Head Of Education" company="Scrimba" />
                    </Testimonial.Content>
                </Testimonial>
                
            </div>
        </>
    )
}