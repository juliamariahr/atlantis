import Menu from "../interfaces/menu";

export default class MenuTipoCadastroCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o nome do Cliente que deseja excluir? `)
        console.log(`----------------------`)
    }
}