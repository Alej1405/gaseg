import React, { useEffect, useState } from 'react';
import BtnCompra from './BtnCompra';

const carouselItems = [
    { image: 'img1.svg', text: 'Venta de Extindores', contenido:'Una amplia gama de extintores necesarios para proteger, tecnologia de punta.' },
    { image: 'img2.svg', text: 'Recarga y control ', contenido:'Creamos la ficha necesaria para que tus extintores esten siempre listos para el uso. Llevamos el control permanente tanto en la recarga como en el caducidad.' },
    { image: 'img3.svg', text: 'Seguriad Industrial', contenido:'Creamos toda una porpuesta integral de seguridad, planes de riesgo, buenas practis y planos de permitan tener un contingente' },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const numeroChat = import.meta.env.VITE_WHATSAPP_NUMBER
    const url = `https://wa.me/${numeroChat}`

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 5000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative w-full h-96 overflow-hidden">
                {carouselItems.map((item, index) => (
                    <div
                    key={index}
                    className={`absolute inset-0 bg-no-repeat bg-cover bg-center w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${item.image})`}}
                >
                    <div className="absolute inset-0 flex justify-center bg-black bg-opacity-70">
                        <h1 className="uppercase font-black tracking-wider text-white md:text-6xl text-4xl my-12">
                            {item.text}
                        </h1>
                    </div>
                    <div className="absolute inset-0 md:w-1/2 my-20 m-auto flex justify-center">
                        <p className="text-center text-white mx-16 m-auto md:text-2xl">
                            {item.contenido}
                        </p>
                    </div>
                </div>
                ))}
            </div>
            <div className="grid justify-center mt-12 w-9/12 items-center m-auto cursor-pointer hover:bg-red-200  bg-red-900 transition-all px-4 py-2 rounded-lg">
                <BtnCompra 
                    href={url}
                    texto="mas info"
                    colorHover="text-red-900"
                    fontColor="text-red-50"
                />
            </div>
        </>

    );
};

export default Carousel;