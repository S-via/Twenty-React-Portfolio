// footer does not change 
import gitLogo from "../assets/github-mark.svg"
import linkIn from "../assets/icon8-linkedin-48.png"
function Footer () {
    return (
        <footer>
            Footer .. 
            <a href="https://github.com/S-via">
            <img src ={gitLogo} style={{width:"50px",height:"auto"}}/></a>

            <a href="https://www.linkedin.com/in/silvia-villalba-48a28b2b2/">
            <img src={linkIn} style ={{width:"50px", height:"auto"}}/></a>
            
            <a href="">StackOverFlow</a>
            
        </footer>
    )
}
export default Footer;