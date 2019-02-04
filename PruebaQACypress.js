

describe('Test1', () => {


    beforeEach(() => {

        cy.visit('http://stage.panel.stage.do.linkitox.com/')

    })

    it('abrir web y login', () => {

        var random_number = Math.floor((Math.random() * 100000000) + 1)  + 'com.app.test';
        
        cy.get('.btn-login').click()
        cy.get(':nth-child(2) > :nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input')
        .type('jairohm81@outlook.es')
        cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('qajairo')
        cy.get('.js-login').click()

        cy.get('.v-speed-dial > .v-btn').click()
        cy.get(':nth-child(4) > .v-btn__content').click()
        cy.get('.v-form > :nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input')
        .type('Prueba' + Date.now())
        cy.get('.chipOS_selected > .v-chip__content > span').click()
        cy.get(':nth-child(4) > .v-input__control > .v-input__slot > .v-text-field__slot > input').
        type(random_number)
        cy.get('textarea')
        .type('Esto es una prueba automática.' + '\n' + 'BundleID =' + random_number)


        cy.uploadFile('Drop', 'image.png')
        cy.wait(5000)
    


    })
    
    
})