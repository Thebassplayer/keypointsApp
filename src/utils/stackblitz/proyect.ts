export const templateProject = (title: string, example: string) => {
  return {
    title: title,
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
  };
};
