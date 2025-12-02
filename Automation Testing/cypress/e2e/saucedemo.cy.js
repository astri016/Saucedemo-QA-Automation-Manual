const users = [
  "standard_user",
  "problem_user",
  "performance_glitch_user",
  "error_user",
  "visual_user"
];

users.forEach((user) => {

  describe(`Testing dengan user: ${user}`, () => {

    it('Login Test', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type(user);
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      cy.url().should('include', '/inventory.html');
    });

    it('Add to Cart berhasil', () => {
      cy.login(user);
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('.shopping_cart_badge').should('contain', '1');
    });

    it('Remove item dari cart', () => {
      cy.login(user);
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('#remove-sauce-labs-backpack').click();
      cy.get('.shopping_cart_badge').should('not.exist');
    });

    it('User bisa melihat isi cart', () => {
      cy.login(user);
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 1);
    });

    it('Checkout - mengisi Your Information', () => {
      cy.login(user);
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();

      cy.get('#first-name').type('Astri');
      cy.get('#last-name').type('Siahaan');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();

      cy.url().should('include', 'checkout-step-two');
    });

    it('Checkout Overview tampil dengan benar', () => {
      cy.login(user);
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();

      cy.get('#first-name').type('Astri');
      cy.get('#last-name').type('Siahaan');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();

      cy.get('.summary_info').should('be.visible');
    });

    it('Complete checkout - Finish Order', () => {
      cy.login(user);
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();

      cy.get('#first-name').type('Astri');
      cy.get('#last-name').type('Siahaan');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();

      cy.get('#finish').click();
      cy.contains('Thank you for your order!').should('be.visible');
    });

    // Sort Name (A - Z)
it('Sort Name (A - Z)', () => {
  cy.login(user);
  cy.get('[data-test="product-sort-container"]').select('az');

  let names = [];
  cy.get('.inventory_item_name').each(($el) => {
    names.push($el.text());
  }).then(() => {
    const sorted = [...names].sort();
    expect(names).to.deep.equal(sorted);
  });
});

// Sort Name (Z - A)
it('Sort Name (Z - A)', () => {
  cy.login(user);
  cy.get('[data-test="product-sort-container"]').select('za');

  let names = [];
  cy.get('.inventory_item_name').each(($el) => {
    names.push($el.text());
  }).then(() => {
    const sorted = [...names].sort().reverse();
    expect(names).to.deep.equal(sorted);
  });
});

// Sort Price (Low to High)
it('Sort Price (Low to High)', () => {
  cy.login(user);
  cy.get('[data-test="product-sort-container"]').select('lohi');

  let prices = [];
  cy.get('.inventory_item_price').each(($el) => {
    prices.push(parseFloat($el.text().replace('$', '')));
  }).then(() => {
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sorted);
  });
});

// Sort Price (High to Low)
it('Sort Price (High to Low)', () => {
  cy.login(user);
  cy.get('[data-test="product-sort-container"]').select('hilo');

  let prices = [];
  cy.get('.inventory_item_price').each(($el) => {
    prices.push(parseFloat($el.text().replace('$', '')));
  }).then(() => {
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).to.deep.equal(sorted);
  });
});


  }); 

}); 