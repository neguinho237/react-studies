import Symbol from "./src/assets/images/Symbol.svg"

export default function Welcome(){
    return(
        <div className="Container ">
            <div className="Header ">
                <div className="flex justify-between">
                    <div className="flex gap-3 ">
                    <img src={Symbol} alt="" />
                    <h1 className = "mt-4">Relume</h1>
                    </div>
                    <li><a className="text-slate-950" href="">relume</a></li>
                </div>
                <h1>O rato roeu a roupa do rei de Roma</h1>
                <p>We`re stoked you`re here! Here`s some important info to get started.</p>
            </div>
        </div>
    )
}