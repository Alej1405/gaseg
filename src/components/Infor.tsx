interface informacion {
    titulo: string
    small: string
    descripcion: string
    border: string
    icon: string
}


export default function Infor( {titulo, small, descripcion, border, icon}: informacion ) {
    
    return (
        <div className={`md:${border} border-r-2 border-black mr-3 p-4 rounded-lg text-slate-600`}>
            <h2 className="uppercase font-bold tracking-wider text-2xl">
            <i className={icon}></i>{titulo}
            </h2>
            <small className="first-letter:uppercase font-thin ml-3">
                {small}
            </small>
            <p className="mt-3 font-medium text-sm m-3 text-justify">
                {descripcion}
            </p>
        </div>
    )
}
