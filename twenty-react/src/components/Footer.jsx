// footer does not change 
import gitLogo from "../assets/github-mark.svg"
import linkLogo from "../assets/linkedin-svgrepo-com.svg"

function Footer () {
    return (
        <footer className="p-4 text-white flex justify-center space-x-6 fixed bottom-0 left-0 w-full">
            
            <a href="https://github.com/S-via">
            <img src ={gitLogo} style={{width:"50px",height:"auto"}}/></a>

            <a href="https://www.linkedin.com/in/silvia-villalba-48a28b2b2/">
            <img src ={linkLogo} style={{width:"50px",height:"auto"}}/></a>
        </footer>
    )
}
export default Footer;