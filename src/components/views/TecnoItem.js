import React from 'react';
import PropTypes from 'prop-types';

export const TecnoItem = ({ name, img, experience, link }) => {
  return (
    <div className="col-md-3 mb-2" key={ name }>
      <div className="card course h-100">
        <img src={ img } className="card-img-top" alt={ name } />
          {
            experience && (
              <div className="card-body">
                <div className="fixed-descrip-skills">
                  <h5 className="card-title">{ name } <span className="text-muted">{ experience }</span> </h5>
                </div>
              </div>
            )
          }

          {
            link && (
              <a href={ link } className="contac-link"> { name } </a>
            )
          }
      </div>
    </div>
  )
}

TecnoItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  experience: PropTypes.string,
  redirect: PropTypes.bool,
  link: PropTypes.string,
}
