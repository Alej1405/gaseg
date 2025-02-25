import { valores, corporativo } from "../data/corporativo"
import { useState } from "react"
import Corporativo from "../components/Corporativo"
import Val from "../components/Val"
import { Helmet } from "react-helmet-async"

export default function NosotrosPage() {

    const [dataCrop] = useState(corporativo)
    const [dataVal] = useState(valores)
    return (
        <div className="bg-red-50 pb-10">
            <Helmet>
                {/* Título de la página */}
                <title>Gaseg Fire | Nosotros </title>

                {/* Meta etiquetas generales */}
                <meta name="description" content="Conoce nuestros lineamientos y recuerda, no ofrecemos un servicio cuidamos de tu inversion y tu empresa. En segurirar industrial somo los primeros." />
                <meta name="keywords" content="seguridad industrial, extintores, recarga de extintores, control de incendios, sistemas de proteccion, salud ocupacional" />
                <meta name="author" content="MashaCorp" />

                {/* Meta etiqueta robots */}
                <meta name="robots" content="index, follow" />
                
                {/* Meta etiquetas Open Graph para Facebook */}
                <meta property="og:title" content="Gaseg Fire | Nosotros" />
                <meta property="og:description" content="Conoce nuestros lineamientos y recuerda, no ofrecemos un servicio cuidamos de tu inversion y tu empresa. En segurirar industrial somo los primeros." />
                <meta property="og:image" content="https://ejemplo.com/imagen.jpg" />
                <meta property="og:url" content="https://gaseg.mashacorp.com/logo.svg" />
                <meta property="og:type" content="https://gaseg.mashacorp.com/" />

                {/* Meta etiquetas Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gaseg Fire | Nosotros" />
                <meta name="twitter:description" content="Conoce nuestros lineamientos y recuerda, no ofrecemos un servicio cuidamos de tu inversion y tu empresa. En segurirar industrial somo los primeros." />
                <meta name="twitter:image" content="https://gaseg.mashacorp.com/logo.svg" />
                <meta name="twitter:site" content="@gaseg" />

                {/* Canonical Link */}
                <link rel="canonical" href="https://gaseg-ec.com/index" />
            </Helmet>
            <div className="mt-6 mb-3 p-4 text-4xl font-black bg-red-900/15">
                <h1 className="text-center tracking-wider uppercase">
                    nosotros
                </h1>
            </div>
            <div>
                {dataCrop.map((corp)=>(
                    <Corporativo 
                        key={corp.id}
                        corp={corp}
                    />
                ))}
            </div>
            <div className="mt-12 py-5 bg-slate-200 md:w-4/6 w-5/6 m-auto shadow-lg">
                <h3 className="uppercase text-1xl font-medium text-center mb-3">
                    valores
                </h3>
                {dataVal.map((val)=>(
                    <Val 
                        key={val.id}
                        val={val}
                    />
                ))}
            </div>
        </div>
    )
}
