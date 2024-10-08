import Symbol from "./src/assets/images/Symbol.svg"
import Raio from "./src/assets/images/Raio.svg"
import Social from "./src/assets/images/Social.svg"
import Twiter from "./src/assets/images/Twiter.svg"
import Welcom from "./src/assets/images/Welcome.svg"
import Dan from "./src/assets/images/Pessoa1.svg"
import Pessoa1 from "./src/assets/images/Ellipse 3.svg"
import Pessoa2 from "./src/assets/images/Ellipse 4.svg"
import Pessoa3 from "./src/assets/images/Ellipse 5.svg"
import Pessoa4 from "./src/assets/images/Ellipse 5-1.svg"

export default function Welcome(){
    return(
        <div className="Container ml- ">
            <div className="Header ">
                <div className="flex justify-between  mt-16">
                    <div className="flex ml-5 gap-4 ">
                    <img src={Symbol} alt="" />
                    <h1 className="mt-3 fon">Relumes</h1>
                    </div>
                    <li className="mt-4"><a className="text-slate-950 mr-7 " href="">relume.io</a></li>
                </div>
                <div className="flex-col">
                <h1 className="text-5xl font-bold ml-6 mt-20">Welcome to the Relume Library Figma Kit</h1>
                <p className="ml-7 mt-6">We`re stoked you`re here! Here`s some important info to get started.</p>
                </div>
            </div>
            <div className="Main">
                <div className="flex gap-52">
                    <div className="mt-16 ml-6">
                <div className="linha max-w-3xl h-1 bg-slate-300 "></div>
                <div>
                    <h1 className="text-4xl font-bold mt-12">About</h1>
                    <p className="text-lg text-gray-500 mt-6">This Figma Library built the community for the community.</p>
                    <p className="text-lg text-gray-500 mt-6 max-w-3xl h-36">After seeing many  for a Figma version of Relume Library the world's largest webflow component library the team minimal version
                        took it upon themselves to build it. not only have they gone an epic jolalala of building 900+ pixel-perfect Figma components
                    </p>
                    <h1 className="text-2xl font-semibold">Why did we build this?</h1>
                </div>
                </div>
                <div className="mt-16 Quadrado w-96 h bg-gray-300 mt rounded" >
                    <div className="flex mt-3">
                    <h1 className="text-2xl font-semibold flex ml-3 mt-3 ">Creators</h1>
                    </div>
                    <div className="flex gap-6">
                    <div className="f rounded-md gap-24 flex ml-3 mt-5 Quadrado preto w-16 h-16 bg-black">
                        <p className = " text-white text-end pt-9 mr-3 text-lg font-semibold">m.</p>
                    </div>
                    <p className=" flex h-24 w-80 mt-5">Built in partnership with the team at Minimal Square</p>
                    </div>
                    <div className="buttons flex gap-4 ml-24">
                        <a target="blank" href="https://www.minimal-square.com/"><img src={Welcom} alt="" /></a>
                        <a target="blank" href="https://x.com/i/flow/login?redirect_after_login=%2Fminimalsquare" className="gap-6"><img src={Twiter} alt="" /></a>
                    </div>
                    <div className="flex justify-center mt-8">
                    <div className="Line h-1 w-80 bg-gray-400 flex justify-between"></div>
                    </div>
                    <div className="Pessoas mt-8 ml-3 ">
                        <div className="Pessoa1 flex gap-4">
                            <img className="w-" src={Dan} alt="" />
                            <div className="palavras flex-col">
                                <p  className=" text-base font-semibold">Aleksandar Radovanovic</p>
                                <p>Product Owner / Co-founder Minimal Square</p>
                            </div>
                        </div>
                        <div className="Pessoa1 flex gap-4 mt-5">
                            <img className="w-" src={Pessoa1} alt="" />
                            <div className="palavras flex-col">
                                <p  className=" text-base font-semibold">Nikola Radovanovic</p>
                                <p>Designer / Co-founder Minimal Square</p>
                            </div>
                        </div>
                        <div className="Pessoa1 flex gap-4 mt-5">
                            <img className="w-" src={Pessoa2} alt="" />
                            <div className="palavras flex-col">
                                <p  className=" text-base font-semibold">Nemanja Milosevic</p>
                                <p>Developer / Co-founder Minimal Square</p>
                            </div>
                        </div>
                        <div className="Pessoa1 flex gap-4 mt-5">
                            <img className="w-" src={Pessoa3} alt="" />
                            <div className="palavras flex-col">
                                <p  className=" text-base font-semibold">Adam Mura</p>
                                <p>Collaborator / Co-founder Relume</p>
                            </div>
                        </div>
                        <div className="Pessoa1 flex gap-4 mt-5 pb-6">
                            <img className="w-" src={Pessoa4} alt="" />
                            <div className="palavras flex-col">
                                <p  className=" text-base font-semibold">Aleksandar Radovanovic</p>
                                <p>Designer / Relume's</p>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
                <div className="ml-6 mb">
                    <div className="raio flex gap-3">
                        <img src={Raio} alt="" />
                        <h1 className="text-sm font-semibold">To improve your Figma t Webflow workflow</h1>
                    </div>
                    <div className="ml-6 mt-3">
                            <p className="text-lg text-gray-500"> . Design wireframes for any project as speed.</p>
                            <p className="text-lg text-gray-500"> . Ensure that designs are compatible with Relume Library Webflow components</p>
                            <p className="text-lg text-gray-500"> . Make ola mundo design changes to components faster low and more for shit.</p>
                        </div>
                    
                    <div className="raio flex gap-3 mt-6">
                        <img src={Social} alt="" />
                        <h1 className="text-sm font-semibold">To improve your Figma to Webflow workflokow</h1>
                    </div>
                    <div className="ml-6 mt-3">
                            <p className="text-lg text-gray-500"> . Design wireframes for any project as speed.</p>
                            <p className="text-lg text-gray-500"> . Ensure that designs are compatible with Relume Library Webflow components</p>
                            <p className="text-lg text-gray-500"> Interlagos</p>
                        </div>
                </div>
                <div className="textos text-gray-500 mt-3 max-w-3xl h-32 ml-6 ">
                    <p className="text-lg ">You can use Figma Kit in unlimeted projects. Like the Library, the components are designed to be as neutral, flexible, and scalable as possible to as a kick-starter for any project</p>
                    <p>We'd love for you to try it out for your next project.</p>
                </div>
                <div className="ml-6 mt-12 linha max-w-3xl h-1 bg-slate-300 "></div>
                <div className="Main2 ml-6 ">
                    <h1 className="text-5xl mt-11 font-semibold">Getting started</h1>
                    <h2 className="font-semibold text-2xl mt-6">Não aguento mais essa vida de dev Boa pa nois amo viver</h2>
                    <p>Estrutura de dados é uma lalalalal merda odeio essa materia e tudo que envolve back end saudade da vida de skatista vagabundo</p>
                </div>
            </div>
        </div>
    )
}