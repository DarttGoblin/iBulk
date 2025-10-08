import './Home.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'

import slide1 from '../../Media/Home.Media/slide1.jpg'

const Home = () => {
    return (
        <>
            <Nav/>
            <section class="home-section">
                <div className='slides-container'>
                    <img className='slides-images' src={slide1}></img>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home