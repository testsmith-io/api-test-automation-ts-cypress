describe("Brands API", () => {
  
    it("should retrieve at least two brands", () => {
      cy.request(`/brands`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.gte(2);
      });
    });
  });
  