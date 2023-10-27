import Header from "../../components/Header/Header";
import { BiSearch } from "react-icons/bi";

import "./PesquisarMorador.css";
import TableLine from "../../components/TableLine";
import SelecFilter from "../../components/SelectFilter/SelectFilter";

import Moradores from "../../assets/db.json";
import { useState } from "react";

export default function PesquisarMorador() {
  const [search, setSearch] = useState("");

  const [bloco, setBloco] = useState("");
  const [andar, setAndar] = useState("");
  const [apartamento, setApartamento] = useState("");

  function sanitizeSearch(value){
    //Função para limpar a string
    return value
    .normalize("NFD") //Remove palavras acentuadas [ã, ê, é, ó]
    .replace(/[^a-zA-Z ]/g, "") //Remove todo e qualquer caracter que não seja letras ou espaço com um regex
    .toLowerCase() //Padroniza todos as letras para minusculo
  }

  return (
    <>
      <main className="main">
        <section className="filters">
          <div className="search">
            <input
              type="text"
              placeholder="Buscar por nome"
              onChange={(e) => setSearch(e.target.value)}
            />
            <BiSearch className="icon" />
          </div>
          <SelecFilter
            label="Bloco"
            filterid="bloco"
            bloco={bloco}
            setBloco={setBloco}
            andar={andar}
            setAndar={setAndar}
            apartamento={apartamento}
            setApartamento={setApartamento}
          />
          <SelecFilter
            label="Andar"
            filterid="andar"
            bloco={bloco}
            setBloco={setBloco}
            andar={andar}
            setAndar={setAndar}
            apartamento={apartamento}
            setApartamento={setApartamento}
          />
          <SelecFilter
            label="Apartamento"
            filterid="apartamento"
            bloco={bloco}
            setBloco={setBloco}
            andar={andar}
            setAndar={setAndar}
            apartamento={apartamento}
            setApartamento={setApartamento}
          />
        </section>

        <section className="content">
          <table>
            <tr>
              <th>ID</th>
              <th>Proprietario</th>
              <th>Bloco</th>
              <th>Andar</th>
              <th>Apartamento</th>
              <th>Morador/Inquilino</th>
              <th>Ações</th>
            </tr>
            {Moradores.filter(
              (morador) =>
                (sanitizeSearch(morador.nome).includes(sanitizeSearch(search)) ||
                  search == "") &&
                (morador.bloco == bloco || bloco == "") &&
                (morador.andar == andar || andar == "") &&
                (morador.apartamento == apartamento || apartamento == "")
            ).map((morador) => (
              <TableLine
                id={morador.id}
                nome={morador.nome}
                bloco={morador.bloco}
                andar={morador.andar}
                apartamento={morador.apartamento}
                morador={morador.nome}
              />
            ))}
          </table>
        </section>
        <section className="pagination"></section>
      </main>
    </>
  );
}
