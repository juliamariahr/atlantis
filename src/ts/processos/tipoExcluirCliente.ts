import Processo from "../abstracoes/processo"
import MenuTipoExcluirCliente from "../menus/menuTipoExcluirCliente"
import ExclusaoClienteTitular from "./exclusaoClienteTitular"

export default class TipoExcluirCliente extends Processo {
  constructor() {
    super()
    this.menu = new MenuTipoExcluirCliente()
  }
  
  processar(): void {
    this.processo = new ExclusaoClienteTitular()
    this.processo.processar()
  }
}
