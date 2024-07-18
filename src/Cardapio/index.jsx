import LogoBurger from "./src/assets/images/logoBurger.png"
import Hamb2 from "./src/assets/images/hamb-2.png"
import Hamb3 from "./src/assets/images/hamb-3.png"
import Hamb4 from "./src/assets/images/hamb-4.png"
import Coca from "./src/assets/images/refri-1.png"

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

            <div id="menu">
                <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
                
                    <div className=" flex gap-2">
                        <img src={Hamb2} alt="Bacon cheadder" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"  />
                    <div>
                        <p className="font-bold">Double Bacon</p>
                        <p className="text-sm">Pão levinho com muito cheddar bacon e dois hambugers</p>
                    <div className=" flex items-center gap-2 justify-between mt-3">
                        <p className="font-bold text-lg">R$ 32.90</p>
                        <button data-price="32.90" data-name="Double Bacon" className="bg-green-600 rounded-md w-16 h-8 text-white font-medium buy-to-btn">ADD</button>
                        </div>
                    </div>
                    </div>

                    <div className=" flex gap-2">
                        <img src={LogoBurger} alt="Bacon cheadder" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"  />
                    <div>
                        <p className="font-bold">Smashzada</p>
                        <p className="text-sm">Pão levinho com muito cheddar bacon e dois hambugers</p>
                    <div className=" flex items-center gap-2 justify-between mt-3">
                        <p className="font-bold text-lg">R$ 18.90</p>
                        <button data-price="18.90" data-name="Smashzada" className="bg-green-600 rounded-md w-16 h-8 text-white font-medium buy-to-btn">ADD</button>
                        </div>
                    </div>
                    </div>
                    
                    <div className=" flex gap-2">
                        <img src={Hamb3} alt="Bacon cheadder" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"  />
                    <div>
                        <p className="font-bold">Cheddar Duplo</p>
                        <p className="text-sm">Pão levinho com muito cheader bacon e dois hambugers</p>
                    <div className=" flex items-center gap-2 justify-between mt-3">
                        <p className="font-bold text-lg">R$ 35.90</p>
                        <button data-price="35.90" data-name="Cheddar Duplo" className="bg-green-600 rounded-md w-16 h-8 text-white font-medium buy-to-btn">ADD</button>
                        </div>
                    </div>
                    </div>
                    
                    <div className=" flex gap-2">
                        <img src={Hamb4} alt="Bacon cheadder" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"  />
                    <div>
                        <p className="font-bold">Chicken</p>
                        <p className="text-sm">Pão levinho com muito cheader bacon e dois hambugers</p>
                    <div className=" flex items-center gap-2 justify-between mt-3">
                        <p className="font-bold text-lg">R$ 15.90</p>
                        <button data-price="15.90" data-name="Chicken" className="bg-green-600 rounded-md w-16 h-8 text-white font-medium buy-to-btn">ADD</button>
                        </div>
                    </div>
                    </div>
                </main>

                <div className="mx-auto max-w-7xl px-2 my-2">
                    <h2 className="font-bold text-3xl">
                        Bebidas
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16" id="menu ">
                <div className=" flex gap-2 w-full">
                        <img src={Coca} alt="Bacon cheadder" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"  />
                    <div className="w-full">
                        <p className="font-bold">CocaCola</p>
                        <p className="text-sm"></p>
                    <div className=" flex items-center gap-2 justify-between mt-3">
                        <p className="font-bold text-lg">R$ 8.00</p>
                        <button data-price="8.00" data-name="CocaCola" className="bg-green-600 rounded-md w-16 h-8 text-white font-medium buy-to-btn">ADD</button>
                        </div>
                    </div>
                    </div>
                </div>


                </div>











            </div>
    )
}