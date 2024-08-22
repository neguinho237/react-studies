import Symbol from "./src/assets/images/Symbol.svg"

export default function Welcome(){
    return(
        <div className="Container ">
            <div className="Header ">
                <div className="flex justify-between  mt-16">
                    <div className="flex ml-5 gap-4 ">
                    <img src={Symbol} alt="" />
                    <h1 className="mt-3">Relume</h1>
                    </div>
                    <li className="mt-4"><a className="text-slate-950 mr-7 " href="">relume.io</a></li>
                </div>
                <div className="flex-col">
                <h1 className="text-5xl font-bold ml-6 mt-20">Welcome to the Relume Library Figma Kit</h1>
                <p className="ml-7 mt-6">We`re stoked you`re here! Here`s some important info to get started.</p>
                </div>
            </div>
        </div>
    )
}