import React from 'react';
import './styles.css';
import { TecnoItem } from './TecnoItem';
import { tecnologias } from '../../helpers/listados';

export const WellcomeView = () => {  
  return (
    <>
      <header className="wellcome-seccion">
        <div className="wall-container">
          <div className="container">
            <h1 className="text-white text-center w-100">Daniel Huenul C&aacute;rcamo</h1>
            <p className="text-white descript-text">
              Desarrollador web con conocimientos sobre tecnologias front-back, con pretensi&oacute;n a 
              desarrollador FullStack, pero con mucho camino por recorrer aún.
            </p>
          </div>
        </div>
      </header>
      {/* seccion de proyectos */}
      <section className="proyects">
        <div className="seccion-title">
          <h2 className="container text-white">
            <i className="fas fa-project-diagram"></i> Proyectos realizados.
          </h2>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="wall-container container-ico-descrip">
              <span className="custom-ico face-ico">
                <i className="fas fa-grin-squint-tears"></i>
              </span>
              <h3 className="m-2 text-white">Ups. A&uacute;n no hay proyectos disponibles.</h3>
            </div>
          </div>
        </div>
      </section>
      {/* sección con tecnologias */}
      <section className="skills">
        <div className="seccion-title">
          <h2 className="container text-white">
            <i className="fas fa-laptop-code"></i> Heramientas conocidas.
          </h2>
        </div>
        <div className="container">
          <div className="row mt-4">
            {
              tecnologias.map( tecnologia => 
                <TecnoItem 
                  key={ tecnologia.name }
                  name={ tecnologia.name } 
                  img={ tecnologia.img } 
                  experience={ tecnologia.experience } 
                />
              )
            }   
          </div>
        </div>
      </section>
    </>
  )
}
