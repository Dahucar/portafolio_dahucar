import React from 'react';
import { listado } from '../../helpers/tecnoligas';
import './styles.css';

export const WellcomeView = () => {
  return (
    <>
      <div className="wall-background">
        <div className="container">
          {/* contenido inicial */}
          <div className="wall-container">
            <div className="wall-sub-container">
              <h1 className="text-white">Portafolio Daniel Huenul C&aacute;rcamo</h1>
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
      </div>
      {/* sección con tecnologias */}
      <section className="container">
        <h2 className="text-white">Heramientas conocidas.</h2>
        <div className="row mt-4">
          {
            listado.map( tecnologia => 
              <div className="col-md-4 mb-2" key={ tecnologia.name }>
                <div className="card course h-100 p-2">
                  <img src={ tecnologia.img } className="card-img-top" alt={ tecnologia.name } />
                  <div className="card-body">
                    <h5 className="card-title">{ tecnologia.name } <span className="text-muted">{ tecnologia.experience }</span> </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            )
          }   
        </div>
      </section>
    </>
  )
}
