import "./styles.css"
import Facebook from "./src/assets/images/Facebook.svg"
import Instagram from "./src/assets/images/Instagram.svg"
import X from "./src/assets/images/X.svg"
import {Swiper, SwiperSlide} from 'swiper/react'
import carYellow from "./src/assets/images/CamaroAmarelo.png"
import carBlue from "./src/assets/images/CamaroAzul.png"
import carBlueR from "./src/assets/images/CamaroAzulR.png"  
import carRed from "./src/assets/images/CamaroVermelho.png"
import carCorv from "./src/assets/images/Corvetao.png"
 
export default function Carros (){
    const foto = [
        {id: '1', image: carYellow},
        {id: '2', image: carCorv},
        {id: '3', image: carBlue},
        {id: '4', image: carBlueR},
        {id: '5', image: carRed},
    ]
    return(    
        <body>
             <section className="header" id="header">
                <div className="navbar">
                    <div className="logo">
                        <a href="#">Chevrolet</a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#" className="active">Carros</a></li>
                            <li><a href="#">História</a></li>
                            <li><a href="#">Técnologia</a></li>
                            <li><a href="#">Produção</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                           <li><a href="https://pt-br.facebook.com/"><img src={Facebook} alt="" /></a></li>
                           <li><a href="https://www.instagram.com/ " ><img src={Instagram} alt="" /></a></li>
                           <li><a href="https://x.com/home"><img src={X} alt="" /></a></li>
                        </ul>
                    </div>   
                </div>
                <div className="hero">
                    <div className="row">
                        <div className="left-sec">
                            <div className="content">
                                <h2><span>chevrolet</span>camaro</h2>
                                <p>It is a long established fact that a set reader will distracted by the readable content of a page when looking at its layout technology.</p>
                            </div>
                            <button className="discover-btn">Descobrir</button>
                            <div className="information">
                            <div className="production">
                                <p>Production</p>
                                <h2>1966-2020</h2>
                            </div>
                            <div className="production">
                                <p>Designer</p>
                                <h2>George Angers</h2>
                            </div>
                            </div>
                        </div>
                        <div className="rigth-sec">
                            <div className="my-car">
                                <Swiper 
                                slidesPerView={1}
                                 pagination={{clickable: true}} 
                                 navigation>
                                    {foto.map( (item) => (
                                        <SwiperSlide key={item.id}>
                                            <img 
                                            alt="Slider"
                                            className="slide-item"
                                            src={item.image}/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
        </body>
    )
}