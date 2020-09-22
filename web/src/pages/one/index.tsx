import React from 'react';
import services from '../../variables/services';
import portal from '../../variables/portal';
import { HiSearch } from 'react-icons/hi';
import { AiFillAppstore, AiFillDatabase } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import ProgressCicle from '../../components/ProgressCicle';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

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

function One() {
  return (
    <>
    <Header Menu={<Menu />} />
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
      <article className="portal">
        <div className="container">
          <div className="header">
            <div className="title-content c-white">
              O PORTAL
            </div>
            <div className="description-content c-white">
              Nosso objetivo é levar o município até você.
            </div>
          </div>
        <section className="section-portal">
            <div className="portal-item ">
              <h3 className="c-white portal-font line-height-1">
                Soluções para o Cidadão, o Contribuinte e o Servidor.
              </h3>
            </div>
            <div className="portal-item portal-item-margin portal-description text-justify c-cinze">
              <p className="line-height-1">É um portal que tem como principal objetivo atender as necessidades dos cidadãos, assim como disponibilizar recursos exclusivos para contribuintes e servidores.</p>
              <p className="line-height-1">Aqui você encontrará informações das contas de receitas e despesas do seu município, além disso, você poderá acompanhá-las através de indicadores gerenciais.</p>
            </div>
            <div className="portal-items-cicle">
              {portal.map((prop:portalObj, key) => (
                <div className="portal-item-cicle text-justify" key={key}>
                  <div className="box">
                    <ProgressCicle percentual={`${prop.percentual}0`} color={prop.color} percentualInfo={prop.percentual} />
                  </div>
                  <div>
                    <h6 className="c-white portal-item-title">{prop.name}</h6>
                    <p className="portal-description line-height-1 c-cinze">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>
        </div>
      </article>
      <article className="form">
        <div className="container">
          <div className="form-info">
            <h4 className="c-white">FALE CONOSCO</h4>
            <p className="c-white">Envie sua sugestão, crítica ou elogio para seu município.</p>
          </div>
          <form action="">
            <div className="form-input">
              <div className="input">
                <input type="text" name="name" id="name" placeholder="Nome"/>
              </div>
              <div className="input">
                <input type="text" name="email" id="email"  placeholder="E-mail"/>
              </div>
              <div className="input">
                <input type="text" name="phone" id="phone" placeholder="Telefone"/>
              </div>
            </div>
            <div className="textarea">
              <textarea name="message" id="message" placeholder="Mensagem"></textarea>
            </div>
            <button>Enviar</button>
          </form>
        </div>
      </article>
    </main>
    <Footer />
    </>
  );
}

export default One;
