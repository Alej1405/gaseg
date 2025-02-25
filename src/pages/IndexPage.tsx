import Carousel from "../components/Hero"
import ServiciosIndex from "../components/ServiciosIndex"
import Infor from "../components/Infor"
import { Helmet } from "react-helmet-async"

//servicios principales que se van a mostrar en el index
const serviciosIndex =[
    {
        id:1,
        titulo:"experiencia",
        small:"Prevencion y mantenimiento",
        descripcion:"Desde el 2015, Gaseg brinda un servicio integral en la prevencion de riesgos y en las buenas practicas insdustriales, asi como en el asesoramiento para permisos y certificaciones",
        border:"border-r-2 border-black",
        icon: "ri-check-line"
    },//servicio_1
    {
        id:2,
        titulo:"productos",
        small:"Prevencion de riesgos",
        descripcion:"Los productos de calidad son parte de la garantia de nuestros procesos. Esta es una de las partes mas importantes, en base a esto la calidad del servicio es garantizada.a",
        border:"border-r-2 border-black",
        icon: "ri-fire-fill"
    },//servicio_1
    {
        id:3,
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
            </Helmet>
            <Carousel />
            <div className="grid md:grid-cols-3 grid-rows-1 mt-12 bg-slate-100 gap-2 p-10">
                {serviciosIndex.map((servicio)=>(
                    <Infor 
                        key={servicio.id}
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
