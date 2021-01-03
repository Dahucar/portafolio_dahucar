import React from 'react';
import moment from 'moment';

export const AboutItem = ({ initDate, finishDate, infoTitle, infoDescript, infoLocate }) => {
  const initDateMoment =  moment(initDate).format('LL');
  const finishDateMoment =  moment(finishDate).format('LL');
  return (
    <div className="row">
      <div className="col-4">
        <div className="text-center">
          <span>{ initDateMoment } - { finishDateMoment } </span>
        </div>
      </div>
      <div className="col-8">
        <div className="descript-about">
          <h5>{ infoTitle } <span className="text-muted" >{ infoLocate }</span> </h5>
          <p>
            { infoDescript }
          </p>
        </div>
      </div>
    </div>
  )
}
