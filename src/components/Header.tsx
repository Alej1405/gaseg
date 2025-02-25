import { NavLink, Link } from "react-router-dom"
import { useState } from "react";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //menu hamburguesa
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="bg-white text-red-950 md:h-40 md:flex md:justify-between md:items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:space-x-96">
                    <div className="flex items-center">
                        <div>
                            <NavLink
                                to="/"
                                className="text-lg font-bold flex flex-row items-center gap-2">
                                    <img src="logo.svg" alt="Logo GASEG" className="md:w-24 w-10"/>
                                    <div className="uppercase font-black tracking-widest text-4xl margin-y-1">
                                        <h2>
                                            gaseg
                                        </h2>
                                        <small className="text-xs font-normal block normal-case">
                                            Seguridad y salud ocupacional
                                        </small>
                                    </div>
                            </NavLink>

                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <NavLink
                            to="/servicios" 
                            className={({isActive})=>
                                isActive ? 'relative border-l-2 border-black px-3 py-2 rounded-md text-red-800/80 font-bold bg-red-800/40' : 'relative hover:bg-red-800/40 px-3 py-2 rounded-md border-black border-l-2'
                            }>
                            Servicios
                            <br />
                            <small>
                                Nuestra oferta con <br /> los mejores productos 
                            </small>
                        </NavLink>
                        <NavLink
                            to="/nosotros" 
                            className={({isActive})=>
                                    isActive ? 'relative border-l-2 border-black px-3 py-2 rounded-md text-red-800/80 font-bold bg-red-800/40' : 'relative hover:bg-red-800/40 px-3 py-2 rounded-md border-black border-l-2'
                            }>
                            Nosotros
                            <br />
                            <small>
                                Nuestra mision <br /> es tu seguridad
                            </small>
                        </NavLink>
                        <NavLink
                            to="/contactos"
                            className={({ isActive }) =>
                                    isActive ? 'relative border-l-2 border-black px-3 py-2 rounded-md text-red-800/80 font-bold bg-red-800/40' : 'relative hover:bg-red-800/40 px-3 py-2 rounded-md border-black border-l-2'
                            }
                            >
                            Contactos
                            <br />
                            <small className="hidden md:block">
                                Toda pregunta <br /> es atendida
                            </small>
                        </NavLink>
                    </div>
                    <div className="md:hidden">
                        <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md"
                        aria-label="Toggle menu"
                        >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isMenuOpen
                                ? "M6 18L18 6M6 6l12 12"
                                : "M4 6h16M4 12h16m-7 6h7"
                            }
                            />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/servicios" 
                            className="block hover:bg-red-300/40 px-3 py-2 rounded-md">
                            Servicios
                        </Link>
                        <Link
                            to="/nosotros"
                            className="block hover:bg-red-300/40 px-3 py-2 rounded-md"
                            >
                            Nosotros
                        </Link>
                        <Link
                            to="/contactos" 
                            className="block hover:bg-red-300/40 px-3 py-2 rounded-md">
                            Contactos
                        </Link>
                    </div>
                </div>
            )}
            
        </nav>
    )
}
