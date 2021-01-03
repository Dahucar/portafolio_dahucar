import React from 'react'

export const ProjectsView = () => {
  return (
    <section className="proyects">
      <div className="seccion-title">
        <h2 className="container text-white">
          <i className="fas fa-box-open"></i> Proyectos realizados.
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
  )
}
