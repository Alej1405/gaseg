interface ValProps{
    val:{
        id: number;
        titulo: string;
        valor: string;
    }
}

const Val: React.FC<ValProps> = ({ val }) => {

    return (
        <div className="mx-12 m-auto mt-6">
            <ul>
                <li className="uppercase font-semibold text-sm mt-1">
                    {val.titulo}
                </li>
                <li className="font-thin text-xs mb-3">
                    {val.valor}
                </li>
            </ul>
        </div>
    )
}


export default Val
