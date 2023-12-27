import { FaUser } from "react-icons/fa";
import TableLine from "../../components/TableLine";

import Historico from "../../assets/db-historico.json";
import "./PerfilMorador.css";

export default function PerfilMorador() {
  return (
    <section className="min-h-[calc(100vh-60px)] flex items-center justify-center px-8 gap-6">
      <div className="relative h-max w-[400px] bg-[#D9D9D9] flex flex-col items-center justify-center gap-4 p-6 rounded-md">
        <div className="-mt-[85px] rounded-full bg-white w-[125px] h-[125px] flex items-center justify-center overflow-hidden">
          {/* <FaUser size={75} /> */}
          <img src="./src/assets/nicolau.jpg"/>
        </div>
        <p className="font-semibold text-[1.25rem]">
          Nicolau Oficial Mattioli
        </p>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="bg-white w-full p-3 flex flex-col gap-2 rounded-md">
            <div className="flex gap-1">
              <h3 className="font-semibold">Registro:</h3>
              <p>Titular</p>
            </div>
            <div className="flex gap-1">
              <h3 className="font-semibold">Idade:</h3>
              <p>22</p>
            </div>
            <div className="flex gap-1">
              <h3 className="font-semibold">Status:</h3>
              <p>Ok</p>
            </div>
          </div>
          <div className="bg-white w-full p-3 flex flex-col gap-2 rounded-md">
            <div className="flex gap-1">
              <h3 className="font-semibold">Bloco:</h3>
              <p>A</p>
            </div>
            <div className="flex gap-1">
              <h3 className="font-semibold">Andar:</h3>
              <p>1</p>
            </div>
            <div className="flex gap-1">
              <h3 className="font-semibold">Apartamento:</h3>
              <p>11</p>
            </div>
            <div className="flex gap-1">
              <h3 className="font-semibold">Proprietario:</h3>
              <p>Nicolau Mattioli</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <table>
          <tr>
            <th>ID</th>
            <th>Morador/Inquilino</th>
            <th>Status</th>
            <th>Código</th>
            <th>Data/Hora</th>
            <th>Recebedor</th>
          </tr>
          {Historico.map((morador) => (
            <TableLine 
            id={morador.id >= 100 ? morador.id : morador.id >= 10 ? "0" + morador.id : "00" + morador.id} 
            nome={morador.nome} 
            status={morador.status}
            codigo={morador.codigo}
            dtHora={morador.dataHora}
            recebedor={morador.recebedor}
            />
          ))}
        </table>
      </div>
    </section>
  );
}
