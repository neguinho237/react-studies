import Symbol from "./src/assets/images/Symbol.svg"

export default function Welcome(){
    return(
        <div className="Container ">
            <div className="Header ">
                <div className="flex justify-between  mt-16">
                    <div className="flex ml-5 gap-4 ">
                    <img src={Symbol} alt="" />
                    <h1 className="mt-3 fon">Relume</h1>
                    </div>
                    <li className="mt-4"><a className="text-slate-950 mr-7 " href="">relume.io</a></li>
                </div>
                <div className="flex-col">
                <h1 className="text-5xl font-bold ml-6 mt-20">Welcome to the Relume Library Figma Kit</h1>
                <p className="ml-7 mt-6">We`re stoked you`re here! Here`s some important info to get started.</p>
                </div>
            </div>
            <div className="Main">
                <div className="mt-16 Quadrado w-96 h-96 bg-gray-300 mt rounded" >
                    <div className="flex mt-3">
                    <h1 className="text-2xl font-semibold flex ml-3 mt-3 ">Creators</h1>
                    </div>
                    <div className="flex gap-6">
                    <div className="f gap-24 flex ml-3 mt-5 Quadrado preto w-16 h-16 bg-black">
                        <p className = " text-white text-end pt-9 mr-3 text-lg font-semibold">m.</p>
                    </div>
                    <p className=" flex h-24 w-80 mt-5">Built in partnership with the team at Minimal Square</p>
                    </div>
                </div>
            </div>
        </div>
    )
}