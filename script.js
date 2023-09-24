//your code here
cy.get('blockquote').eq(index).children().should('have.length', 1);
cy.get('p').eq(index).then(ans => {
  let text = ans.text().trim();
  expect(text).to.eq("Who is the President of India?"); // Update the expected text here
});
