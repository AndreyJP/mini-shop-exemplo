import { HomePage } from "../support/pages/HomePage";
import { LoginPage } from "../support/pages/LoginPage";

describe('Página Home - MiniShop', () => {
    const home = new HomePage()
    const login = new LoginPage()

    beforeEach(() => {
        cy.fixture('usuarios').as('usuarios')

        cy.get('@usuarios').then((usuarios) => {
            const usuario = usuarios.usuarioPadrao
            home.visitar()
            login.login(usuario.usuario, usuario.senha)
        })
    })

    it('deve exibir o título correto', () => {
        home.verificarTitulo()
    });

    it('deve exibir a lista de produtos', () => {
        home.verificarProdutosVisiveis()
    });
})