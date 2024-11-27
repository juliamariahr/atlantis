import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitularPorDependente extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos clientes titulares...');

        // Solicitar o nome de um dependente para buscar os titulares
        let nomeDependente = this.entrada.receberTexto('Digite o nome de um dependente para listar os titulares:');

        // Encontrar o dependente pelo nome
        let dependente = this.clientes.find(cliente => cliente.Nome === nomeDependente);

        if (dependente) {
            console.log('Titulares associados ao dependente', dependente.Nome);
            dependente.Dependentes.forEach(dependenteDoDependente => {
                let titular = dependenteDoDependente.Titular;
                if (titular) {
                    this.impressor = new ImpressorCliente(titular);
                    console.log(this.impressor.imprimir());
                } else {
                    console.log('Este usuário é um Titular!')
                }
            });
        } else {
            console.log('Dependente não encontrado.');
        }
    }
}
