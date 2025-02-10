//importar dependencias
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importar paginas y layouts
import IndexPage from "./pages/IndexPage";
import ContactosPage from "./pages/ContactosPage";
import NosotrosPage from "./pages/NosotrosPage";
import ServiciosPage from "./pages/ServiciosPage";
import ServicioPage from "./pages/ServicioPage";

//importar layout
import GeneralLayout from "./layout/GeneralLayout";


export default function AppRouer() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas generales del proyecto */}
                <Route element={<GeneralLayout/>}>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/contactos" element={<ContactosPage />} />
                    <Route path="/nosotros" element={<NosotrosPage />} />
                    <Route path="/servicios" element={<ServiciosPage/>} />
                    <Route path="/servicios/servicio" element={<ServicioPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
