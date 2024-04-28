import { Link } from 'react-router-dom'
import { Behance, Instagram } from './iconos'
import './navbar.css'

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-custom-secondary border-bottom-custom">
            <div className="container my-3">
                <Link to='/' className='navbar-brand text-white'>Mimetista</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white active">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#section-projects">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#section-services">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#section-contact">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex'>
                    <div className='me-3'>
                        <a href='#'>
                            <Instagram />
                        </a>
                    </div>
                    <div className='ms-3'>
                        <a href='#'>
                            <Behance />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}