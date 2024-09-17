import "./styles.css"
import Facebook from "./src/assets/images/Facebook.svg"
import Instagram from "./src/assets/images/Instagram.svg"
import X from "./src/assets/images/X.svg"
export default function Carros (){
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
                    </div>
                </div>

             </section>
        </body>
    )
}