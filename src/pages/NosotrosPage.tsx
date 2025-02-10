import { valores, corporativo } from "../data/corporativo"
import { useState } from "react"
import Corporativo from "../components/Corporativo"
import Val from "../components/Val"

export default function NosotrosPage() {

    const [dataCrop] = useState(corporativo)
    const [dataVal] = useState(valores)
    return (
        <div className="bg-red-50 pb-10">
            <div className="mt-6 mb-3 p-4 text-4xl font-black bg-red-900/15">
                <h1 className="text-center tracking-wider uppercase">
                    nosotros
                </h1>
            </div>
            <div>
                {dataCrop.map((corp)=>(
                    <Corporativo 
                        key={corp.id}
                        corp={corp}
                    />
                ))}
            </div>
            <div className="mt-12 py-5 bg-slate-200 md:w-4/6 w-5/6 m-auto shadow-lg">
                <h3 className="uppercase text-1xl font-medium text-center mb-3">
                    valores
                </h3>
                {dataVal.map((val)=>(
                    <Val 
                        key={val.id}
                        val={val}
                    />
                ))}
            </div>
        </div>
    )
}
