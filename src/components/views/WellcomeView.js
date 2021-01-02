import React from 'react';
import './styles.css';
import { TecnoItem } from './TecnoItem';
import { listado } from '../../helpers/tecnoligas';

export const WellcomeView = () => {
  return (
    <>
      <header className="wall-background">
        <div className="container">
          {/* contenido inicial */}
          <div className="wall-container">
            <div className="wall-sub-container animate__fadeIn">
              <h2 className="text-white">Portafolio</h2><h1 className="text-white">Daniel Huenul C&aacute;rcamo</h1>
              <blockquote className="blockquote">
                <p className="wall-descrip">
                  Aspirante a desarrollador FullStack pero con mucho camino por recorrer aún.
                  Y con toda la motivación para conseguirlo, con muchas de ganas de aprender constantemente.
                </p>
              </blockquote>
              <span className="text-muted">
                Photo by <a className="link-light" href="https://unsplash.com/@hishahadat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Shahadat Rahman</a> on <a className="link-light" href="https://unsplash.com/s/photos/coding?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* seccion de proyectos */}
      <section className="proyects">
        <div className="seccion-title">
          <h2 className="container text-white">
            <i className="fas fa-project-diagram"></i> 
            Proyectos realizados.
          </h2>
        </div>
        <div className="container">
          <div className="row mt-4">
              
          </div>
        </div>
      </section>
      {/* sección con tecnologias */}
      <section className="skills">
        <div className="seccion-title">
          <h2 className="container text-white">
            <i className="fas fa-laptop-code"></i> 
            Heramientas conocidas.
          </h2>
        </div>
        <div className="container">
          <div className="row mt-4">
            {
              listado.map( tecnologia => 
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
