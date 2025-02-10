import BtnCompra from "./BtnCompra";
interface ServicioProps {
    servicio: {
        id: number;
        servicio: string;
        descripcion: string;
        small: string;
        img: string
    };
}

const Servicio: React.FC<ServicioProps> = ({ servicio }) => {
    const numero = import.meta.env.VITE_WHATSAPP_NUMBER
    const url = `https://wa.me/${numero}`
    return (
        <div className="justify-center bg-slate-200 space-x-4 p-4 shadow-lg">
        <div className="flex md:flex-row">
            <div className="w-4/6">
                <h2 className="uppercase font-semibold tracking-wide text-2xl mb-3 ml-6">
                    {servicio.servicio}
                    <br />
                    <small className="text-wrap text-xs font-thin">
                        {servicio.small}
                    </small>
                </h2>
                <p className="font-light indent-3 ml-12 mr-6">
                    {servicio.descripcion}
                </p>
            </div>
            <div className="max-w-1/6 w-2/6">
                <img src={servicio.img} alt={servicio.servicio} />
            </div>
        </div>
            <div className="mt-6 bg-slate-300 px-3 py-1 hover:bg-slate-50 transition-all rounded-lg">
                <BtnCompra 
                    href={url}
                    texto="conoce mas"
                    colorHover="text-red-900"
                    fontColor="text-red-950"
                />
            </div>
        </div>
    );
};

export default Servicio;
