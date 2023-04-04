import {Link} from "react-router-dom";

function Navbar(){


    return(

        <div>
           <ul id="nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/createPost'>Create Post</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;