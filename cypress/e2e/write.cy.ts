describe("write e2e", ()=>{
  it("write redireciton and posting",() => {
    // cy.setCookie('next-auth.session-token', '85b1017e-6df7-4327-98eb-9a452a76d4d9'	)
    cy.visit('http://localhost:3000')

    // cy.get('[data-testId="writeLink"]').click();
    // cy.get('[data-testId="writeTitleInput"]').type('Live automated post test');
    // cy.get('[data-testId="writeSelectCat"]').select(1);
    // cy.get('[data-testId="writeTextArea"] .ql-editor.ql-blank p').type('this is an automated live test')
    // cy.get('[data-testId="writePublishBtn"]').click()

    // cy.url().should('include', '/live-automated-post-test')
    // cy.get('[data-testId="postsTitle"]').contains('Live automated post test')
  })
})