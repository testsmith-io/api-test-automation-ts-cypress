describe("User Login API", () => {
    const credentials = {
      email: "customer@practicesoftwaretesting.com",
      password: "welcome01",
    };
  
    it("should return access token on successful login", () => {
      cy.request("POST", `/users/login`, credentials).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("access_token");
      });
    });
  });