export default function Header (){
    return(
        <div className="pl-16 mt-52">
            <p className="font-semibold">Tagline</p>
            <h1 className="font-bold mt-9 text-5xl">Short heading here</h1>
            <p className="mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            <div className="mt-4 flex gap-5">
                <input className="w-72 h-11 border-black border" type="text" placeholder="Enter your email" />
                <button className="bg-black text-white w-24 h-11">Sign up</button>
            </div>
            <div className="flex gap-1 mt-6 ">
            <p>By clicking Sign Up you're confirakjsfjasfjkaming that you agree with our</p>
            <a href="Terms"> Terms Conditions.</a>
            </div>
        </div>
    )
}