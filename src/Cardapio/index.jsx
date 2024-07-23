import LogoBurger from "./src/assets/images/logoBurger.png"
import Hamb2 from "./src/assets/images/hamb-2.png"
import Hamb3 from "./src/assets/images/hamb-3.png"
import Hamb4 from "./src/assets/images/hamb-4.png"
import Coca from "./src/assets/images/refri-1.png"
import Guarana from "./src/assets/images/refri-2.png"
import Carrrinho from "./src/assets/images/Carrinho.png"

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity=
"sha512-F03r1rZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuR1Ez0+tcaEPQogQ@KaGN26/zrn20ImR1DfuLWn07aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


// const menu = document.getElementById("menu")
// const cartBtn = document.getElementById("cart-btn")
// const cartModal = document.getElementById ("cart-modal")
// const cartItemsContainer = document.getElementById("cart-items")
// const cartTotak = document.getElementById ("cart-total")
// const checkoutBtn = document.getElementById("checkout-btn")
// const closeModalBtn = document.getElementById ("close-modal-btn")
// const cartCounter = document.getElementById ("cart-count")
// const addressInput = document.getElementById ("address")
// const addressWarn = document.getElementById ("address-warn")

// let cart = [];

// cartBtn.addEventListener("click", function(){
//     cartModal.style.display = "flex"
// })

// cartModal.addEventListener("click", function(event){
//     if(event.target === cartModal){
//         cartModal.style.display = "none"
//     }
// })

// closeModalBtn.addEventListener ("click", function(){
//     cartModal.style.display = "none"
// })

// menu.addEventListener("click", function(event){
//     let parentButton = event.target.closest(".buy-to-btn")
//     if(parentButton){
//         const name = parentButton.getAttribute("data-name")
//         const price = parseFloat (parentButton.getAttribute("data-price"))
//         addCart (name, price)
//     }
// }) 

// function addCart (name, price){
//     const existingItem = cart.find (item => item.name === name)
//     if(existingItem){
//         existingItem =+ 1;
//         return;
//     }
//     cart.push({
//         name,
//         price,
//         quanty:1,
//     })
// }

export default function Cardapio (){
    return(
        
        <div>
            <header className="w-full h[420px] bg-zinc-900 bg-home bg-cover bg-center">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="mt-6 w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200" src={LogoBurger} alt="Logo DevBuger" />
                    <h1 className="text-4xl text-white mt-4 mb-2 font-bold">DonaldsMc</h1>
                    <span className="text-white font-medium">Rua Fim do arco-iris 777</span>
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
                    <div className="w-96">
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
                    <div className="w-96">
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
                    <div className="w-96">
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
                    <div className="w-96">
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
                    <div className="w-96">
                        <p className="font-bold">CocaCola</p>
                    <div className=" flex items-center gap-2 justify-between mt-3">
                        <p className="font-bold text-lg">R$ 8.00</p>
                        <button data-price="8.00" data-name="CocaCola" className="bg-green-600 rounded-md w-16 h-8 text-white font-medium buy-to-btn">ADD</button>
                        </div>
                    </div>
                    </div>
                <div className=" flex gap-2 w-full">
                        <img src={Guarana} alt="Bacon cheadder" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"  />
                    <div className="w-96">
                        <p className="font-bold">Guaraná</p>
                    <div className=" flex items-center gap-2 justify-between mt-3">
                        <p className="font-bold text-lg">R$ 6.00</p>
                        <button data-price="6.00" data-name="Guarana" className="bg-green-600 rounded-md w-16 h-8 text-white font-medium buy-to-btn">ADD</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="bg-black/60 hidden items-center justify-center w-full h-full fixed top-0 left-0 z-[99]" id="cart-modal">
                    <div className=" bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
                        <h2 className="text-center font-bold text-2xl mb-2">Meu carrinho</h2>
                        <div id="cart-items" className="flex justify-between mb-2 flex-col">
                            <p className="font-bold">Total: <span id="cart-total">0.00</span></p>
                            <p className="font-bold">Endereço de entrega</p>
                            <input type="text" placeholder="Digite seu endereço completo..." id="address" className="w-full border-2 p-1 rounded my-1" />
                            <p className="text-red-500 hidden" id="address-warn">Digite seu endereço completo!</p>
                            <div className="flex items-center justify-between mt-5 w-full">
                                <button id="close-modal-btn">Fechar</button>
                                <button id="checkout-btn" className="bg-green-500 text-white px-4 py-1 rounded">Finalizar pedido</button>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center">
                    <button id="cart-btn" className="flex gap-2 items-center font-bold text-white">
                       (<span id="cart-count">0</span>)
                        Veja meu carrinho 
                        <img className="w-7" src={Carrrinho} alt="" />
                    </button>
                </footer>

                







            </div>
    )
}