import Card from '../components/Card/index'
import '../styles/Showcase.css'
import { FaGoogleDrive, FaSpotify, FaFigma } from "react-icons/fa";
import { SiGoogledocs, SiOpenai, SiScrimba } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";

export default function CardsShowcase() {
    return (
        <>

            <span className="heading md">
                Cards
            </span>

            <div className="cards-container">

                <Card>
                    <Card.Icon>
                        <SiScrimba size={20} />
                    </Card.Icon>
                    <Card.Title>
                        Scrimba
                    </Card.Title>
                    <Card.Desc>
                        Learn to code with interactive tutorials and real-world projects, all in your browser.
                    </Card.Desc>
                </Card>
                
                <Card>
                    <Card.Icon>
                        <FaGoogleDrive size={20} />
                    </Card.Icon>
                    <Card.Title>
                        Google Drive
                    </Card.Title>
                    <Card.Desc>
                        Store, access, and share your files securely in the cloud.
                    </Card.Desc>
                </Card>

                <Card>
                    <Card.Icon>
                        <FaSpotify size={20} />
                    </Card.Icon>
                    <Card.Title>
                        Spotify
                    </Card.Title>
                    <Card.Desc>
                        Listen to millions of songs and podcasts on the go.
                    </Card.Desc>
                </Card>

                <Card>
                    <Card.Icon>
                        <RiNotionFill size={20} />
                    </Card.Icon>
                    <Card.Title>
                        Notion
                    </Card.Title>
                    <Card.Desc>
                        All-in-one workspace for notes, tasks, databases, and collaboration.
                    </Card.Desc>
                </Card>
                
                <Card>
                    <Card.Icon>
                        <FaFigma size={20} />
                    </Card.Icon>
                    <Card.Title>
                        Figma
                    </Card.Title>
                    <Card.Desc>
                        Collaborative design tool for teams to build stunning interfaces together.
                    </Card.Desc>
                </Card>

                <Card>
                    <Card.Icon>
                        <SiOpenai size={20} />
                    </Card.Icon>
                    <Card.Title>
                        ChatGPT
                    </Card.Title>
                    <Card.Desc>
                        Your AI assistant for writing, coding, research, and more.
                    </Card.Desc>
                </Card>

            </div>

        </>
    )
}