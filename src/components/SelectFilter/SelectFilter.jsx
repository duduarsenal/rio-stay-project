import { RiArrowDownDoubleFill } from "react-icons/ri";
import Moradores from "../../assets/db.json";
import "./SelectFilter.css";
import { useEffect } from "react";

export default function SelecFilter({ label, filterid, ...props}) {

  // useEffect(() => {
  //   console.log(props.bloco)
  // }, [])

  function onClick(target){
    document.getElementById(target).classList.toggle("hidden");
    console.log(target);
  }

  function handleSelect(target, value, id){
    console.log(target.id, value)

    if (target.id == 'bloco') value == 'Nenhum' ? props.setBloco('') : props.setBloco(value);
    if (target.id == 'andar') value == 'Nenhum' ? props.setAndar('') : props.setAndar(value);
    if (target.id == 'apartamento') value == 'Nenhum' ? props.setApartamento('') : props.setApartamento(value);

    onClick(id);
  }

  return (
    <div className={`select ${filterid} hidden`} id={filterid} onClick={(e) => onClick(e.target.id)}>
      <div className="label">
        <label>
          {filterid == 'bloco' ? props.bloco ? `Bloco ${props.bloco}` : `Selecione um ${label}` : 
          filterid == 'andar' ? props.andar ? `${props.andar}° Andar` : `Selecione um ${label}` :
          filterid == 'apartamento' && props.apartamento ?  `Apartamento ${props.apartamento}` : `Selecione um ${label}`}
        </label>
        <RiArrowDownDoubleFill className="select-arrow" />
      </div>
      <div className="list-items" onClick={() => onClick(filterid)}>
        {/* Listando todos os blocos de acordo com o filtro */}
        {filterid == 'bloco' && 
        ['Nenhum', ...new Set(Moradores.filter((morador) => (morador.andar == props.andar || props.andar == '') && 
        (morador.apartamento == props.apartamento || props.apartamento == ''))
        .map(morador => morador.bloco).sort())]
          .map((item) => (
            <p id={filterid} onClick={(e) => handleSelect(e.target, item, filterid)}>{item}</p>
          ))
        }

        {/* Listando todos os andares de acordo com o filtro */}
        {filterid == 'andar' && 
        ['Nenhum', ...new Set(Moradores.filter((morador) => (morador.bloco == props.bloco || props.bloco == '') && 
        (morador.apartamento == props.apartamento || props.apartamento == ''))
        .map(morador => morador.andar).sort())]
          .map((item) => (
              <p id={filterid} onClick={(e) => handleSelect(e.target, item, filterid)}>{item}</p>
            ))
        }

        {/* Listando todos os apartamentos de acordo com o filtro */}
        {filterid == 'apartamento' && 
        ['Nenhum', ...new Set(Moradores.filter((morador) => (morador.bloco == props.bloco || props.bloco == '') && 
        (morador.andar == props.andar || props.andar == ''))
        .map(morador => morador.apartamento).sort())]
          .map((item) => (
            <p id={filterid} onClick={(e) => handleSelect(e.target, item, filterid)}>{item}</p>
          ))
        }
      </div>
    </div>
  );
}
