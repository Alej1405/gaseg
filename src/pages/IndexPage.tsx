import Carousel from "../components/Hero"
import ServiciosIndex from "../components/ServiciosIndex"
import Infor from "../components/Infor"
import { Helmet } from "react-helmet-async"

//servicios principales que se van a mostrar en el index
const serviciosIndex =[
    {
        titulo:"experiencia",
        small:"Prevencion y mantenimiento",
        descripcion:"Desde el 2015, Gaseg brinda un servicio integral en la prevencion de riesgos y en las buenas practicas insdustriales, asi como en el asesoramiento para permisos y certificaciones",
        border:"border-r-2 border-black",
        icon: "ri-check-line"
    },//servicio_1
    {
        titulo:"productos",
        small:"Prevencion de riesgos",
        descripcion:"Los productos de calidad son parte de la garantia de nuestros procesos. Esta es una de las partes mas importantes, en base a esto la calidad del servicio es garantizada.a",
        border:"border-r-2 border-black",
        icon: "ri-fire-fill"
    },//servicio_1
    {
        titulo:"Soporte Tecnico",
        small:"Prevencion de riesgos",
        descripcion:"Gaseg ofrece personal altamente capacitado para asesorarle en sus requerimientos sobre protección contra incendios, brindándole los equipos y sistemas más adecuados para los tipos de riesgos a proteger.",
        border:"",
        icon:"ri-tools-fill"
    }//servicio_1
]


export default function IndexPage() {
    return (
        <div className=" bg-red-900/40 m-auto flex-row justify-center items-center pb-12">
            <Helmet>
                {/* Título de la página */}
                <title>Gaseg Fire</title>

                {/* Meta etiquetas generales */}
                <meta name="description" content="Líderes en seguridad industrial y sistemas contra incendios. Protege tu patrimonio con nuestra experiencia. La seguridad es una inversión esencial." />
                <meta name="keywords" content="seguridad industrial, extintores, recarga de extintores, control de incendios, sistemas de proteccion, salud ocupacional" />
                <meta name="author" content="MashaCorp" />

                {/* Meta etiqueta robots */}
                <meta name="robots" content="index, follow" />
                
                {/* Meta etiquetas Open Graph para Facebook */}
                <meta property="og:title" content="Gaseg Fire" />
                <meta property="og:description" content="Líderes en seguridad industrial y sistemas contra incendios. Protege tu patrimonio con nuestra experiencia. La seguridad es una inversión esencial." />
                <meta property="og:image" content="https://ejemplo.com/imagen.jpg" />
                <meta property="og:url" content="https://gaseg.mashacorp.com/logo.svg" />
                <meta property="og:type" content="https://gaseg.mashacorp.com/" />

                {/* Meta etiquetas Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gaseg Fire" />
                <meta name="twitter:description" content="Líderes en seguridad industrial y sistemas contra incendios. Protege tu patrimonio con nuestra experiencia. La seguridad es una inversión esencial." />
                <meta name="twitter:image" content="https://gaseg.mashacorp.com/logo.svg" />
                <meta name="twitter:site" content="@gaseg" />

                {/* Canonical Link */}
                <link rel="canonical" href="https://gaseg-ec.com/index" />
            </Helmet>
            <Carousel />
            <div className="grid md:grid-cols-3 grid-rows-1 mt-12 bg-slate-100 gap-2 p-10">
                {serviciosIndex.map((servicio)=>(
                    <Infor 
                    titulo={servicio.titulo}
                    icon={servicio.icon}
                    small={servicio.small}
                    descripcion={servicio.descripcion}
                    border={servicio.border}
                    />
                ))}
            </div>
            <ServiciosIndex />
        </div>
    )
}
