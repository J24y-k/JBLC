describe('My Application', () => {
    it('should be running correctly', () => {
        cy.visit('/');
        cy.contains('Welcome'); // Adjust the text based on your application's content
    });
});