import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { infoAbout } from '../../helpers/listados';
import { AboutItem } from './AboutItem';

moment.locale('es');
export const AboutView = () => {
  return (
    <section className="about-me">
      <div className="seccion-title">
        <h2 className="container text-white">
          <i className="fas fa-user-alt"></i> Some mi.
        </h2>
      </div>
      <div className="container">
        <div className="container-about">
          <div className="card">
            <div className="card-body">
              <h3 className="title-about">Daniel Huenul C&aacute;rcamo - Desarrollador Web</h3>
              <div className="content-dev-img">
                <img className="img-dev" src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Daniel Huenul C&aacute;rcamo" />
              </div>
              {
                infoAbout.map(( info, i) => (
                  <AboutItem 
                    key={ i }
                    initDate={ info.initDate } 
                    finishDate={ info.finishDate }
                    infoTitle={ info.acitivityTitle } 
                    infoDescript={ info.acitivityDescript } 
                    infoLocate={ info.activityLocate }
                  />
                ))
              }
              <div className="demo">
                <span>Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/programmer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
