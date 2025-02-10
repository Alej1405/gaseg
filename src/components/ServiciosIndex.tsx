import BtnCompra from "./BtnCompra"

export default function ServiciosIndex() {

    const numeroChat = import.meta.env.VITE_WHATSAPP_NUMBER
    const url = `https://wa.me/${numeroChat}`
    return (
        <>
            <div className=" shadow-lg md:w-8/12 w-11/12 md:bg-white bg-white/80 m-auto p-5 rounded-md mt-6">
                <h2 className="uppercase font-black tracking-widest text-center text-4xl mt-3">
                    Servicio de extintores
                    <br />
                    <small className="font-normal text-sm">
                    Tu Aliado en Seguridad Contra Incendios
                    </small>
                </h2>
                <div className="grid md:grid-cols-2 grid-rows-1">
                    <div className="text-md font-thin">
                        <p className="indent-4 text-justify my-3">
                            Gaseg, líder en Ecuador con 9 años de experiencia, ofrece un servicio integral de mantenimiento de extintores. Cumplimos con las normas NFPA 10 e INEN 739, garantizando la protección de tu empresa.
                        </p>
                        <h2 className="font-semibold tracking-wide ml-5">
                            Servicios Destacados:
                        </h2>
                        <ul className="ml-10">
                            <li className="mt-3">
                                <h3 className="font-normal">
                                    Asesoría experta:
                                </h3>
                                <p className="text-sm ml-5">
                                    Determinamos el tipo y cantidad de extintores ideales para tus instalaciones.
                                </p>
                            </li>
                            <li className="mt-3">
                                <h3 className="font-normal">
                                    Mantenimiento ágil:
                                </h3>
                                <p className="text-sm ml-5">
                                    Revisión y recarga en 24 horas para minimizar interrupciones.
                                </p>
                            </li>
                            <li className="mt-3">
                                <h3 className="font-normal">
                                    Pruebas hidrostáticas:
                                </h3>
                                <p className="text-sm ml-5">
                                    Instalaciones certificadas UL para pruebas de alta y baja presión.
                                </p>
                            </li>
                            <li className="mt-3">
                                <h3 className="font-normal">
                                    Recordatorios oportunos:
                                </h3>
                                <p className="text-sm ml-5">
                                    No te preocupes por fechas, nosotros te recordamos los mantenimientos.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-2/3 m-auto">
                        <img src="extintor.jpg" alt="Servicio de extintores gaseg" />
                    </div>
                </div>
                <div className="bg-red-950 rounded-lg shadow-lg m-auto text-center w-5/6 py-1 mt-3">
                    <BtnCompra 
                    href={url}
                    texto="Cotiza Aqui!!"
                    colorHover="text-red-900"
                    fontColor="text-red-50"
                    />
                </div>
            </div>
        </>
    )
}
