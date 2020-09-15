import React from 'react';
import './style.css';

function Content() {
  return (
    <main>
      <div className="container">
        <div className="title-content">
          SERVIÇOS
        </div>
        <div className="description-content">
          Nós oferecemos serviços personalizados para cada um!
        </div>
        <div className="services">
          <div className="service">
            <div className="icon-service">
              <img src="https://www.municipioonline.com.br/design/portal/assets/pd-icons/icon-view.png" alt="" />
            </div>
            <div className="title-service">
              CIDADÃO
            </div>
            <div className="description-services">
              Aqui você acompanha os dados da lei complementar 131(Transparência Pública) e aproveitar as facilidades dos serviços destinados aos cidadãos.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
