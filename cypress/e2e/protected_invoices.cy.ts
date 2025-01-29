describe("Protected Invoices API", () => {
    
    const credentials = {
      email: "customer@practicesoftwaretesting.com",
      password: "welcome01",
    };
  
    let accessToken: string;
  
    before(() => {
      // Perform login and store the access token
      cy.request("POST", `/users/login`, credentials).then((response) => {
        expect(response.status).to.eq(200);
        accessToken = response.body.access_token;
      });
    });
  
    it("should retrieve invoices with a valid token", () => {
      cy.request({
        method: "GET",
        url: `/invoices`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.length.gte(15);
      });
    });
  });
  