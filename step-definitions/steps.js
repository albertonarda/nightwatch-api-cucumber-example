import { client } from "nightwatch-api";
import { Given, Then, When } from "cucumber";

Given("I open Google`s search page", async () => {
  await client.url("http://google.com");
});

Then("the Google search form exists", async () => {
  await client.assert.visible('input[name="q"]');
});

/*GENERIC STEPS*/

Then("the title is {string}", async text => {
  await client.assert.title(text);
});

Given("I open the url {string}", async text => {
  await client.url(text);
});

When("I click on the element {string}", async text => {
  await client.click(text);
});

Then("the url should be {string}", async text => {
  await client.assert.urlEquals(text);
});

Then("the title should be {string}", async text => {
  await client.assert.title(text);
});

Then("the element {string} should contain {string}", async (elm, text) => {
  await client.expect.element(elm).text.to.contain(text);
});

Then("the element {string} should be visible", async text => {
  await client.assert.visible(text);
});
