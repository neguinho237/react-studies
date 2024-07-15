import Facebook from "./src/assets/images/Facebook.svg"
import Instagram from "./src/assets/images/Instagram.svg"
import X from "./src/assets/images/X.svg"
import Linkedin from "./src/assets/images/Linkedin.svg"
import Youtube from "./src/assets/images/Youtube.svg"

export default function Footer (){
    return(
        <main className="flex flex-col justify-center items-center mt-20 ">
            <section className="flex justify-center items-center gap-40" >
                <h1 className="text-2xl font-semibold">Logo</h1>
                <div className="flex justify-center items-center gap-4">
                <a className="font-semibold" href="link one">Link one</a>
                <a className="font-semibold" href="link one">Link one</a>
                <a className="font-semibold" href="link two">Link two</a>
                <a className="font-semibold" href="link three">Link three</a>
                <a className="font-semibold" href="link four">Link four</a>
                <a className="font-semibold" href="link five">Link five</a>
                </div>
                <div className="flex gap-5">
                    <a target="blank" href="https://www.facebook.com/">
                    <img src={Facebook} alt="" />
                    </a>
                    <a target="blank" href="https://www.instagram.com/">
                    <img src={Instagram} alt="" />
                    </a>
                    <a target="blank" href="https://x.com/X">
                    <img src={X} alt="" />
                    </a>
                    <a target="blank" href="https://www.linkedin.com/home">
                    <img src={Linkedin} alt="" />
                    </a>
                    <a target="blank" href="https://www.youtube.com/">
                    <img src={Youtube} alt="" />
                    </a>
                </div>
            </section>
            <div className="h-1 w-full border-solid border-black mt-20 " ></div>
            <div className="flex gap-4 mt-10">
                <h1>2023 Relume. All right reserved.</h1>
                <div className="flex gap-6">
                <a clas href="">Terms of Service</a>
                <a clas href="">Cookies Settings</a>
                <a clas href="">Privacy Policy</a>
                </div>
            </div>
        </main>
        
    )
}