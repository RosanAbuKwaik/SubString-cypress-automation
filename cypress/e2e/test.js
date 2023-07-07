/// <reference types ="cypress"/>

describe("Substring Strings ", () => {
  it("get the first three characters for the product name", () => {
    cy.visit("https://magento.softwaretestingboard.com/"); //visit the website
    cy.get("#ui-id-5").click(); // go to the men header tab
    cy.get(".item").contains("Hoodies & Sweatshirts").click(); // go to the "Hoodies and Sweatshirts section "
    cy.get(":nth-child(5) > .field > .control > #limiter").select("36"); // to select the page that conatins all the items
    cy.get(".name").as("ProductNames");
    cy.get("@ProductNames").each((element, index, list) => {
      let item = element.text();
      cy.log("products is :" + item); //to get the products names
      let str = item.trim().substring(0, 3); // to get the first three charcteres
      cy.log("substring is :" + str);
    });
  });
});
