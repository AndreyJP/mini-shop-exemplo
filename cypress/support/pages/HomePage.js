export class HomePage {

    // ==== Seletores ====
    brandNavegacao = () => cy.contains('span', 'MiniShop');
    botaoContato = () => cy.contains('a.btn', 'Contato');
    botaoSair = () => cy.get('button[onclick="logout()"]');
    listaProdutos = () => cy.get('#product-list');
    cardProdutos = () => cy.get('#product-list .card');

    // ==== Ações ====
    visitar() {
        cy.visit('./html/home.html');
    }

    clicarContato() {
        this.botaoContato().click();
    }

    clicarSair() {
        this.botaoSair().click();
    }

    verificarProdutosVisiveis() {
        this.listaProdutos().should('be.visible');
    }

    verificarTitulo() {
        cy.title().should('be.eq', 'MiniShop - Home')
    }
}