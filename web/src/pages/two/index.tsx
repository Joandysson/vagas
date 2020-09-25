import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';
import { year, month } from '../../variables/yearMonth';
import { FaSearch } from "react-icons/fa";

function Two() {
  return (
    <>
      <Header Menu={<h1> Portal do servidor </h1>} />
      <main>
        <div className="container-two">
          <div className="flex-1"> <h4>SERVIDORES</h4></div>
          <div className="bread-crumb flex-1">
            <small>Cidadão/Servidor</small>
          </div>
          <div className="info-two">
            Use a pesquisa para obter informações sobre cargo, função, situação funcional e remuneração dos servidores.
          </div>

          <div className="box-two">
            <div className="options">
              <div className="option-one">Folha de Pagamento</div>
              <div className="option-two">Cargos</div>
            </div>
            <div className="search">
              <div className="select-search">
                <select className="" id="">
                  <option value="0">Selecione</option>
                  {year.map((prop, key) => (
                    <option key={key} value={prop}>{prop}</option>
                  ))}
                </select>
              </div>
              <div className="select-search">
                <select className="" id="">
                  <option value="">Selecione</option>
                  <option value="">PREFEITURA TREINAMENTO</option>
                </select>
              </div>
              <div className="select-search">
                <select className="" id="">
                  {month.map((prop, key) => (
                    <option key={key} value={key}>{prop}</option>
                  ))}
                </select>
              </div>
              <button className="btn btn-search"><FaSearch /></button>
            </div>
            <div className="box-table">
              <div className="box-table">
                <div className="divTable blueTable">
                  <div className="divTableHeading">
                    <div className="divTableRow">
                      <div className="divTableHead"></div>
                      <div className="divTableHead">Nome</div>
                      <div className="divTableHead">Cargo</div>
                      <div className="divTableHead">Nível</div>
                      <div className="divTableHead">Valor</div>
                      <div className="divTableHead">Base</div>
                      <div className="divTableHead">Proventos</div>
                      <div className="divTableHead">Descontos</div>
                      <div className="divTableHead">Liquído</div>
                    </div>
                  </div>
                  <div className="divTableBody">
                    <div className="divTableRow">
                      <div className="divTableCell">cell1_1</div>
                      <div className="divTableCell">cell1_1</div>
                      <div className="divTableCell">cell2_1</div>
                      <div className="divTableCell">cell3_1</div>
                      <div className="divTableCell">cell4_1</div>
                      <div className="divTableCell">cell5_1</div>
                      <div className="divTableCell">cell6_1</div>
                      <div className="divTableCell">cell7_1</div>
                      <div className="divTableCell">cell8_1</div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">cell1_2</div>
                      <div className="divTableCell">cell1_2</div>
                      <div className="divTableCell">cell2_2</div>
                      <div className="divTableCell">cell3_2</div>
                      <div className="divTableCell">cell4_2</div>
                      <div className="divTableCell">cell5_2</div>
                      <div className="divTableCell">cell6_2</div>
                      <div className="divTableCell">cell7_2</div>
                      <div className="divTableCell">cell8_2</div>
                    </div>
                  </div>
                </div>
                <div className="blueTable outerTableFooter"><div className="tableFootStyle"><div className="links"><a href="#">&laquo;</a> <a className="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div></div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Two;
