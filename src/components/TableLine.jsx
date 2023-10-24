import { FiEdit } from 'react-icons/fi'

export default function TableLine({id, nome, bloco, andar, apartamento, morador}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{nome}</td>
      <td>{bloco}</td>
      <td>{andar}</td>
      <td>{apartamento}</td>
      <td>{morador}</td>
      <td>
        <FiEdit className='action-icon'/>
      </td>
    </tr>
  );
}
