import Seta from "./src/assets/image/Seta.png"

export default function Careers (){
    return(
        <div className="flex flex-col justify-center items-center">
            <header className="h-44 max-w-3xl flex flex-col justify-center items-center">
                <p className="font-bold text-1">Tagline</p>
                <h1 className="font-bold text-5xl mt-4">Job Openings</h1>
                <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </header>
            <main>
                <div className="flex justify-between">
                <h1 className="font-bold text-3xl">Job Department</h1>
                <img className="" src={Seta} alt="" />
                </div>
            </main>
        </div>
    )
}