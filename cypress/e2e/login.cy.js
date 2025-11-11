/// <reference types="cypress" />

describe('Testes de login na Aplicação Mini Shop', () => {

  beforeEach(() => {
    cy.visit('./html/index.html')
  })

  it('Verifica o título da aplicação', () => {
    cy.title().should('be.eq', 'MiniShop - Login')
  })

  it('Login com campos não preenchidos', () => {
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('button[type=submit]').click()

    //Asserção
    cy.get('div[role=alert]').should('be.visible')
  })

  it('Login com usuário e senha em branco por comando', () => {

    cy.preencherCamposLoginESubmeter({ usuario: '', senha: '' })

    //Asserção
    cy.get('div[role=alert]').should('be.visible')
    cy.get('div[role=alert]').should('be.visible').and('contain.text', 'Usuário ou senha inválidos.')
  })

  it('Login com usuário e senha incorretos', () => {

    const dados = {
      usuario: 'usuario1',
      senha: 'master'
    }

    cy.preencherCamposLoginESubmeter(dados)

    //Asserção
    cy.get('div[role=alert]').should('be.visible')
  })

  it('Login com usuário e senha corretos', () => {

    const dados = {
      usuario: 'admin',
      senha: '12345'
    }

    cy.preencherCamposLoginESubmeter(dados)

    //Asserção
    cy.title().should('be.eq', 'MiniShop - Home')
    //Atributo
    cy.get('button[onclick="logout()"]').should('exist')
    //Contains
    cy.contains('button', 'Sair').should('exist')
  })

})