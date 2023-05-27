import { Link } from "react-router-dom";

export function Navegation () {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to={ '/' }> HOME </Link></li>
                    <li><Link to={ '/about' }> ABOUT </Link></li>
                    <li><Link to={ '/perfil' }> PERFIL </Link></li>
                </ul>
            </nav>
        </div>
    )
}