import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ExclusaoClienteTitular extends Processo {

    processar(): void {
        console.log('Iniciando a exclusão de um cliente...');
        let nome = this.entrada.receberTexto('Qual o nome do cliente que deseja excluir?');
    
        let clientes = Armazem.InstanciaUnica.Clientes;
    
        let indiceClienteEncontrado = clientes.findIndex(cliente => cliente.Nome === nome);
        
        if (indiceClienteEncontrado !== -1) {
            let clienteEncontrado = clientes[indiceClienteEncontrado];
            
            console.log('Cliente encontrado:', clienteEncontrado.Nome, 'aka', clienteEncontrado.NomeSocial);
            
            clientes.splice(indiceClienteEncontrado, 1);
            
            console.log('Cliente removido com sucesso!.');
        } else {
            console.log('Cliente não encontrado, insira outro nome.');
            this.processo = new ExclusaoClienteTitular()
            this.processo.processar()
        }
    }
    
}