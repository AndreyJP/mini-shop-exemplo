export class LoginPage{
    // ==== Ações ====
    login(usuario, senha){
        cy.preencherCamposLoginESubmeter({ usuario: usuario, senha: senha })
    }
}