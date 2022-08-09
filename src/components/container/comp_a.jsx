import React from "react"
import { contacto } from "../../models/a_class"
import ComponenteB from "../pure/componente_a"



const ComponenteA = () => {
    
    const defaultContacto = new contacto('Elena', 'Samur', 'andelena19@gmail.com', false)

    return (
        <div>
            <div>
                <h1>
                    Tus datos:
                </h1>
                <ComponenteB contacto={defaultContacto}></ComponenteB>
            </div>
        </div>
    )
}

export default ComponenteA;