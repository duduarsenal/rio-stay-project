import { FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function TableLine({id, status, codigo, dtHora, recebedor, nome, bloco, andar, apartamento, morador, action}) {
  return (
    <tr>
      {/* Moradores */}
      {id && <td>{id}</td>}
      {nome && <td>{nome}</td>}
      {bloco && <td>{bloco}</td>}
      {andar && <td>{andar}</td>}
      {apartamento && <td>{apartamento}</td>}
      {morador && <td>{morador}</td>}

      {/* Encomendas/Perfil */}
      {status && <td>{status}</td>}
      {codigo && <td>{codigo}</td>}
      {dtHora && <td>{dtHora}</td>}
      {recebedor && <td>{recebedor}</td>}
      {action && <td>
        <Link to="/perfil" className='flex items-center justify-center'>
          <FiEdit className='action-icon'/>
        </Link>
      </td>}
    </tr>
  );
}
