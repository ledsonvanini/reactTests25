
import { NavLink } from 'react-router'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className="sidebar min-w-64 flex flex-col h-full bg-gray-900">
    <Logo />      
      <NavLink className='focus:bg-gray-600 ative:w-full p-3 ' to="/cadGMS">CADASTRO GMS</NavLink>
      <NavLink className='focus:bg-gray-600 ative:w-full p-3' to="/cadDados">CADASTRAR DADOS</NavLink>
      <NavLink className='focus:bg-gray-600 ative:w-full p-3' to="/cadFornecedor">CAD. FORNECEDOR</NavLink>
      <NavLink className='focus:bg-gray-600 ative:w-full p-3' to="/pesquisa-contrato">PESQUISAR</NavLink>
    </div>
  )
}
