import Servicio from "../components/Servicio"
import { useState } from "react" 
import { servicios } from "../data/servicios.js"
import { Helmet } from "react-helmet-async"

interface ServicioType {
    id: number;
    servicio: string;
    descripcion: string;
    small: string;
    img: string
}

export default function ServiciosPage() {

    const [data] = useState<ServicioType[]>(servicios)

    return (
        <div className="bg-red-50">
            <Helmet>
                {/* Título de la página */}
                <title>Gaseg Fire | Servicios </title>

                {/* Meta etiquetas generales */}
                <meta name="description" content="Aqui te mostramos nuestros servicios, cada uno de ellos se adapta a tus necesidades, tambien puedes consultar por uno en especifico." />
                <meta name="keywords" content="seguridad industrial, extintores, recarga de extintores, control de incendios, sistemas de proteccion, salud ocupacional" />
                <meta name="author" content="MashaCorp" />

                {/* Meta etiqueta robots */}
                <meta name="robots" content="index, follow" />
                
                {/* Meta etiquetas Open Graph para Facebook */}
                <meta property="og:title" content="Gaseg Fire | Servicios" />
                <meta property="og:description" content="Aqui te mostramos nuestros servicios, cada uno de ellos se adapta a tus necesidades, tambien puedes consultar por uno en especifico." />
                <meta property="og:image" content="https://ejemplo.com/imagen.jpg" />
                <meta property="og:url" content="https://gaseg.mashacorp.com/logo.svg" />
                <meta property="og:type" content="https://gaseg.mashacorp.com/" />

                {/* Meta etiquetas Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gaseg Fire | Servicios" />
                <meta name="twitter:description" content="Aqui te mostramos nuestros servicios, cada uno de ellos se adapta a tus necesidades, tambien puedes consultar por uno en especifico." />
                <meta name="twitter:image" content="https://gaseg.mashacorp.com/logo.svg" />
                <meta name="twitter:site" content="@gaseg" />

                {/* Canonical Link */}
                <link rel="canonical" href="https://gaseg-ec.com/index" />
            </Helmet>
            <div className="mt-6 mb-3 p-4 text-4xl font-black bg-red-900/15">
                <h1 className="text-center tracking-wider ">
                    Nuestros servicios
                </h1>
            </div>
            <div className="grid md:grid-cols-2 grid-rows-1 justify-items-center-center mt-10 gap-8 p-6">
                {data.map((servicios)=>(

                    <Servicio 
                    key={servicios.id}
                    servicio={servicios}
                    />
                    
                ))}
            </div>
        </div>
    )
}
