interface BtnCompraProps {
    href: string,
    texto: string,
    colorHover: string,
    fontColor: string
}

export default function BtnCompra({ href , texto, colorHover, fontColor}: BtnCompraProps) {
    return (
        <div className="w-full">
            <a
                href={href}
                target="_blank"
                className={` ${fontColor} m-auto hover:${colorHover} mb-12 uppercase font-bold text-center`}>
            {texto}
            </a>
        </div>
    )
}
