// Preecher campos de login e enviar

Cypress.Commands.add('preencherCamposLoginESubmeter', (dados = {
    usuario: 'teste',
    senha: '123'
}) => {

    // Campo Usuário
    cy.get('#username')
        .as('usuario')
        .clear()
        .should('be.visible')

    if (dados.usuario !== undefined && dados.usuario !== null && dados.usuario !== '') {
        cy.get('@usuario').type(dados.usuario)
        cy.get('@usuario').should('have.value', dados.usuario)
    } else {
        cy.get('@usuario').should('have.value', '')
    }

    // Campo Senha
    cy.get('#password')
        .as('senha')
        .clear()
        .should('be.visible')
    
    if (dados.senha !== undefined && dados.senha !== null && dados.senha !== '') {
        cy.get('@senha').type(dados.senha)
        cy.get('@senha').should('have.value', dados.senha)
    } else {
        cy.get('@senha').should('have.value', '')
    }

    // Botão Enviar
    cy.get('button[type=submit]')
        .should('be.visible')
        .click()
})