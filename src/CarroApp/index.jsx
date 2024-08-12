import "./styles.css"

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
                </div>
             </section>
        </body>
    )
}