import Processo from "../abstracoes/processo"
import MenuTipoEditarCliente from "../menus/menuTipoEditarCliente"
import EditarClienteTitular from "./editarClienteTitular"

export default class TipoEditarCliente extends Processo {
  constructor() {
    super()
    this.menu = new MenuTipoEditarCliente()
  }
  processar(): void {
    this.processo = new EditarClienteTitular()
    this.processo.processar()
  }
}
