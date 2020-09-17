import React from 'react';
import services from '../../variables/services';
import portal from '../../variables/portal';
import { HiSearch } from 'react-icons/hi';
import { AiFillAppstore, AiFillDatabase } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import ProgressCicle from '../../components/ProgressCicle';
import './style.css';

interface servicesObj {
  name: string;
  description: string;
  classIcon: string;
  icon: string;
  border: string;
}

interface portalObj {
  name: string;
  description: string;
  color: string;
  percentual: string;
}

function Content() {
  return (
    <>
    <main>
      <div className="container">
        <div className="header">
          <div className="title-content">
            SERVIÇOS
          </div>
          <div className="description-content">
            Nós oferecemos serviços personalizados para cada um!
          </div>
        </div>
        <div className="services">
        {services.map((prop:servicesObj, key) => (
          <div key={key} className="service">
            <div className={`icon-service ${prop.classIcon}`}>
              <img src={prop.icon} alt="" />
            </div>
            <div className={`title-service ${prop.border}`}>
              {prop.name}
            </div>
            <div className="description-service">
              {prop.description}
            </div>
          </div>
        ))}
        </div>
        <div className="main-services">
          <div className="main-services-title">
            <h5>Principais Serviços</h5>
          </div>
          <ul>
              <li><AiFillAppstore /> Receita</li>
              <li><HiSearch /> Despesa</li>
              <li><FaCloudUploadAlt /> Contracheque</li>
              <li><AiFillDatabase /> Solicitação de Informação</li>
          </ul>
        </div>
      </div>
    </main>

    <main className="portal">
      <div className="container">
        <div className="header">
          <div className="title-content c-white">
            O PORTAL
          </div>
          <div className="description-content c-white">
            Nosso objetivo é levar o município até você.
          </div>
        </div>
      <article>
          <div className=" c-white ">
            Soluções para o Cidadão, o Contribuinte e o Servidor.
          </div>
          <div className=" c-cinze">
            <p>É um portal que tem como principal objetivo atender as necessidades dos cidadãos, assim como disponibilizar recursos exclusivos para contribuintes e servidores.</p>
            <p>Aqui você encontrará informações das contas de receitas e despesas do seu município, além disso, você poderá acompanhá-las através de indicadores gerenciais.</p>
          </div>
          <div className="portal-items">
            {portal.map((prop:portalObj, key) => (
              <div className="portal-item" key={key}>
                <div className="box">
                  <ProgressCicle percentual={`${prop.percentual}0`} color={prop.color} percentualInfo={prop.percentual} />
                </div>
                <div>
                  <h6 className="c-white">{prop.name}</h6>
                  <p className="c-cinze">{prop.description}</p>
                </div>
              </div>

            ))}
          </div>
      </article>
      </div>
    </main>
    </>
  );
}

export default Content;
