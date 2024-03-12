import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  it("displays loading state", () => {
    cy.intercept("GET", "/api/projects", () => {
      it("displays loader when data is loading", () => {
        cy.intercept("GET", "/api/projects", { fixture: "projects.json" }).as(
          "getProjects",
        );
        cy.visit("/http://localhost:3000/dashboard");

        cy.wait("@getProjects"); // Wait for the data request to complete
        cy.get(".loaderContainer").should("be.visible");
      });
    });
  });

  it("handles error state correctly", async () => {
    cy.intercept("GET", "/api/projects", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          error: true,
          message: "Error fetching projects",
        },
      });
    });

    //Visit the page where the component using the hook is rendered
    cy.visit("http://localhost:3000/dashboard");

    it("displays error state when useGetProjects hook returns an error", () => {
      // Assert that the error message is displayed in the UI
      cy.contains("There was a problem while loading the project data").should(
        "be.visible",
      );
    });
  });

  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusNames = ["Critical", "Warning", "Stable"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          if (index < mockProjects.length) {
            // Add your assertions here using the mockProjects data
            cy.wrap($el).contains(mockProjects[index].name);
            cy.wrap($el).contains(languageNames[index]);
            cy.wrap($el).contains(mockProjects[index].numIssues);
            cy.wrap($el).contains(mockProjects[index].numEvents24h);
            cy.wrap($el).contains(statusNames[index]);
            cy.wrap($el)
              .find("a")
              .should("have.attr", "href", "/dashboard/issues");
          } else {
            console.log("each() function is not working as expected");
          }
        });
    });
  });
});
