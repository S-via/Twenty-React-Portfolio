// header does not change 

// import component from Navigation
import Navigation from "./Navigation";

function Header() {
    return (
        <header className="p-4 text-white fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center"> 
            <h1 className="text-xxl font-bold" >Silvia Villalba</h1>
            <Navigation/>
            </div>
        </header>
    )
}
export default Header;
