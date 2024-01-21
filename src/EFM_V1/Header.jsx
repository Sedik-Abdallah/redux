
import { Link } from "react-router-dom";

function HeaderEff(){
    return(
        <div>

            <nav>
                <ul >
                    <li ><Link to='/2'>Home</Link></li>
                    <li ><Link to='/1'>Calcul</Link></li><br />
                </ul>
            </nav>
        </div>
       
    )
}
export default HeaderEff