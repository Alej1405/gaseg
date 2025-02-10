import Servicio from "../components/Servicio"
import { useState } from "react" 
import { servicios } from "../data/servicios.js"

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
