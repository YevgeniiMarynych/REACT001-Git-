import { Link } from "react-router-dom";



function HomePageComponent() {
    return (
        <div>
            <span>
                Home Page
            </span>
            <Link to='about'>Link TO ABOUT</Link>
        </div>
    )
}

export default HomePageComponent;