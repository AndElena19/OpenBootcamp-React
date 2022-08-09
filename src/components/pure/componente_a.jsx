import React from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/a_class'

const ComponenteB = ( {contacto} ) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h4>
                Email: { contacto.email }
            </h4>
            <h5>
                Conectado: { contacto.conectado ? 'CONTACTO EN LÍNEA':'CONTACTO NO DISPONIBLE'}
            </h5>
        </div>
    )
}

ComponenteB.propTypes= {
    contacto: PropTypes.instanceOf(contacto),
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool,
}

export default ComponenteB;