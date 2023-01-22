import sdk from "@stackblitz/sdk";

/*
  Embed the project
 */
async function embedProject(example, id) {
  sdk.embedProject(
    `embed-${id}`,
    {
      title: "Example",
      description: "Example",
      template: "javascript",
      files: {
        "index.html": `<div id="app"></div>`,
        "index.js": `${example}`,
      },
      settings: {
        compile: {
          trigger: "auto",
          clearConsole: false,
        },
      },
    },
    {
      height: 200,
      openFile: "index.js",
      terminalHeight: 50,
      view: "editor",
    }
  );
}

export default embedProject;
