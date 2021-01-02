import React from 'react';

export const TecnoItem = ({ name, img, experience }) => {
  return (
    <div className="col-md-3 mb-2" key={ name }>
      <div className="card course h-100">
        <img src={ img } className="card-img-top" alt={ name } />
        <div className="card-body">
          <div className="fixed-descrip-skills">
            <h5 className="card-title">{ name } <span className="text-muted">{ experience }</span> </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
