import { Suspense } from "react"

export default function Footer(){
    const numeroChat = import.meta.env.VITE_WHATSAPP_NUMBER
    const url = `https://wa.me/${numeroChat}`
    const face = import.meta.env.VITE_FACEBOOK
    const mision = import.meta.env.VITE_MISION
    const vision = import.meta.env.VITE_VISION

    return(
        <footer className="flex flex-col">
            <div className="bg-red-950 md:grid md:grid-cols-3 md:px-5 px-2 md:pt-6 pt-3">
                <div>
                    <h5 className="uppercase font-semibold text-sm text-red-200 my-3 mx-12">mision</h5>
                        <p className="text-red-800 text-xs font-light mb-6 w-3/6 m-auto text-justify">
                        {mision}
                        </p>
                    <h5 className="uppercase font-semibold text-sm text-red-200 my-3 mx-12">vision</h5>
                        <p className="text-red-800 text-xs font-light mb-6 w-3/6 m-auto text-justify">
                        {vision}
                        </p>
                </div>
                <div className="flex flex-col text-red-800 text-xs">
                    <span className="uppercase text-red-200 mt-3">
                        estamos cerca de ti:
                    </span>
                    <a href={face} target="_blank">
                        <i className="ri-facebook-circle-fill"></i>
                        Gaseg Fire
                    </a>
                    <span className="uppercase text-red-200 mt-3">
                        llamanos:
                    </span>
                    <a href="">
                        <i className="ri-phone-fill"></i>
                        {numeroChat}
                    </a>
                    <span className="uppercase text-red-200 mt-3">
                        escribenos:
                    </span>
                    <a href={url} target="_blank">
                        <i className="ri-whatsapp-fill"></i>
                        {numeroChat}
                    </a>
                    <span className="uppercase text-red-200 mt-3">
                        comentarios:
                    </span>
                    <a>
                        <i className="ri-mail-fill"></i>
                        ventas@gaseg-ec.com
                    </a>
                </div>
                <div>
                <span className="uppercase text-red-200 mt-3 text-xs">
                        matriz:
                    </span>
                    <p  className="flex flex-col text-red-800 text-xs mb-5">
                        Uyumbicho,Ecuador.
                    </p>
                <Suspense>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63835.4531237157!2d-78.55647019148502!3d-0.41069949382453425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5a5068368d34b%3A0xe55cea1d7c8f61b7!2sUyumbicho!5e0!3m2!1ses!2sec!4v1734728477739!5m2!1ses!2sec"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-1/1"
                        />
                </Suspense>    

                </div>
            </div>
            <div className="bg-slate-400 py-1">
                <div className="flex items-center justify-center">
                    <p className="mx-2 text-xs text-slate-500">
                        <i className="ri-copyright-line"></i>
                        todos los derechos reservados 
                    </p>
                            <img src="logo.svg" alt="logo gaseg" className="w-5"/>
                </div>
                <img src="footer.svg" alt="logo" className="w-12 m-auto"/>
            </div>
        </footer>
    )
}