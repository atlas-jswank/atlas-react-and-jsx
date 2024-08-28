import linkedin from "../assets/linkedin.svg";
import github from"../assets/github.svg";

function SocialLinks() {
    return (
        <div className="social-links">
            <a href="www.linkedin.com/in/christopher-a-diggs-" target="_blank">
               <img src={linkedin} alt="linkedin logo" />
            </a>
            <a href="https://github.com/DiggDiggs" target="_blank">
                <imag src={github} alt="github logo" />
            </a>
        </div>
    );
    
}

export default SocialLinks;