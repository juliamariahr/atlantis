import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import ImpressorCliente from "../impressores/impressorCliente"
import Impressor from "../interfaces/impressor"
import Cliente from "../modelos/cliente"

export default class ListagemDependentesPorTitular extends Processo {
  private clientes: Cliente[]
  private impressor!: Impressor

  constructor() {
    super()
    this.clientes = Armazem.InstanciaUnica.Clientes
  }
  
  processar(): void {
    console.clear()
    console.log("Iniciando a listagem dos dependentes de um cliente titular...")

    // Solicitar o nome de um titular para listar os dependentes
    let nomeTitular = this.entrada.receberTexto("Digite o nome de um titular para listar os dependentes:")

    // Encontrar o titular pelo nome e que seja um titular (não possua um Titular)
    let titular = this.clientes.find((cliente) => cliente.Nome === nomeTitular && !cliente.Titular)

    if (titular) {
      console.log("Dependentes associados ao titular", titular.Nome)
      titular.Dependentes.forEach((dependente) => {
        this.impressor = new ImpressorCliente(dependente)
        console.log(this.impressor.imprimir())
      })
    } else {
      console.log("Titular não encontrado ou não é um titular.")
    }
  }
}
