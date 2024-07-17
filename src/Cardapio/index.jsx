import LogoBurger from "./src/assets/images/logoBurger.png"
import Hamb2 from "./src/assets/images/hamb-2.png"

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity=
"sha512-F03r1rZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuR1Ez0+tcaEPQogQ@KaGN26/zrn20ImR1DfuLWn07aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

export default function Cardapio (){
    return(
        
        <div>
            <header className="w-full h[420px] bg-zinc-900 bg-home bg-cover bg-center">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="mt-6 w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200" src={LogoBurger} alt="Logo DevBuger" />
                    <h1 className="text-4xl text-white mt-4 mb-2 font-bold">Dev Burger</h1>
                    <span className="text-white font-medium">Rua dos modernos mais chavão</span>
                    <div className="bg-green-600 px-4 py-1 rounded-lg mt-5 mb-8" id="date-span">
                        <span className="text-white font-medium">Seg á Dom - 18:00 as 22:00</span>
                    </div>
                </div>
            </header>

            <h2 className="md:text-3xl text-2xl font-bold text-center mt-9 mb-6">Conheça nosso Menu</h2>

            <div id="Menu">
                <main>
                    <div>
                        <img src={Hamb2} alt="Bacon cheadder" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"  />
                    </div>
                    <div>
                        <p className="font-bold">Double Bacon</p>
                        <p className="text-sm">Pão levinho com muito cheader bacon e dois hambugers</p>
                    </div>
                    <div>
                        <p>R$ 18.90</p>
                        <button className="bg-green-600 rounded-md w-16 h-8 text-white font-medium">BUY</button>
                    </div>
                </main>
            </div>

            </div>
    )
}