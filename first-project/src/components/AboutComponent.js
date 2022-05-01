import { Link } from "react-router-dom";


function AboutComponent(){
    return(
        <div>
        <span>
            About Page
        </span>
        <Link to='/'>Link TO Home</Link>
    </div>
    );
}

export default AboutComponent;