
//Quando quer testar uma página de forma visita ela sem precisar passar por outra 
it.only('Testa a página da politica de privacidade de forma independente',()=>{
    cy.visit('./src/privacy.html')

    cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible')
    
    cy.contains('p','Talking About Testing').should('be.visible')
})