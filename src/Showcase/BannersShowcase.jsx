import '../styles/Showcase.css'
import Banner from '../components/Banner/index'

export default function BannerShowcase() {
    return (
        <>
            <span className="heading md">
                Banners
            </span>

            <div className="banners-container">
                
                <span className="heading md">
                    Multi Line
                </span>

                <div className="multiline-banners-container">

                    <span className="heading sm">1. Success</span>
                    <Banner variant='success'>
                        <Banner.Title>Congratulations!</Banner.Title>
                        <Banner.Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Subtitle>
                    </Banner>

                    <span className="heading sm">2. Warning</span>
                    <Banner variant='warning'>
                        <Banner.Title>Attention</Banner.Title>
                        <Banner.Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Subtitle>
                    </Banner>

                    <span className="heading sm">3. Error</span>
                    <Banner variant='error'>
                        <Banner.Title>There is a problem with your application</Banner.Title>
                        <Banner.Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Subtitle>
                    </Banner>

                    <span className="heading sm">4. Neutral</span>
                    <Banner variant='neutral'>
                        <Banner.Title>Update Available!</Banner.Title>
                        <Banner.Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Subtitle>
                    </Banner>

                </div>

                <span className="heading md">
                    Single Line
                </span>

                <div className="singleline-banners-container">

                    <span className="heading sm">1. Success</span>
                    <Banner variant='success'>
                        <Banner.Title>Congratulations!</Banner.Title>
                    </Banner>

                    <span className="heading sm">2. Warning</span>
                    <Banner variant='warning'>
                        <Banner.Title>Attention</Banner.Title>
                    </Banner>

                    <span className="heading sm">3. Error</span>
                    <Banner variant='error'>
                        <Banner.Title>There is a problem with your application</Banner.Title>
                    </Banner>

                    <span className="heading sm">4. Neutral</span>
                    <Banner>
                        <Banner.Title>Update available!</Banner.Title>
                    </Banner>
                    
                </div>
            </div>
        </>
    )
}