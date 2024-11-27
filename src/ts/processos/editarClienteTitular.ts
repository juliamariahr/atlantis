import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class EdicaoClienteTitular extends Processo {

    processar(): void {
        console.log('Iniciando a edição de informações do cliente...');

        let nome = this.entrada.receberTexto('Qual o nome do cliente que deseja editar?');
        
        let clientes = Armazem.InstanciaUnica.Clientes;
        
        let clienteEncontrado = clientes.find(cliente => cliente.Nome === nome);

        if (clienteEncontrado) {
            console.log('Cliente encontrado:', clienteEncontrado.Nome, 'aka', clienteEncontrado.NomeSocial);

            // Usando setters para editar as informações do cliente
            clienteEncontrado.Nome = this.entrada.receberTexto('Novo nome:');
            clienteEncontrado.NomeSocial = this.entrada.receberTexto('Novo nome social:');
            clienteEncontrado.DataNascimento = this.entrada.receberData('Nova data de nascimento (AAAA-MM-DD):');
            
            this.processo = new CadastroEnderecoTitular(clienteEncontrado);
            this.processo.processar();
            
            this.processo = new CadastrarDocumentosCliente(clienteEncontrado);
            this.processo.processar();
            
            console.log('Informações do cliente editadas com sucesso!.');
        } else {
            console.log('Cliente não encontrado.');
        }
    }
}
