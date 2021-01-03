import React from 'react'
import { mediosContacto } from '../../helpers/listados'
import { TecnoItem } from './TecnoItem'

export const ContactView = () => {
  return (
    <section className="contact">
      <div className="seccion-title">
        <h2 className="container text-white">
          <i className="fas fa-project-diagram"></i> Contacto / Redes
        </h2>
      </div>
      <div className="container contact-container">
        <div className="row mt-4">
          {
            mediosContacto.map( contacto => 
              <TecnoItem 
                key={ contacto.name }
                name={ contacto.name } 
                img={ contacto.ico } 
                link={ contacto.link }
              />
            )
          }
        </div>
      </div>
    </section>
  )
}
