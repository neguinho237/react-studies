import LogoBurger from "./src/assets/images/logoBurger.png"
export default function Cardapio (){
    return(
        <div>
            <header className="w-full h[420px] bg-zinc-900">
                <div>
                    <img className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200" src={LogoBurger} alt="Logo DevBuger" />
                    <h1 className="text-3xl mt-4 mb-2 font-bold">Dev Burger</h1>
                </div>
            </header>
        </div>
    )
}