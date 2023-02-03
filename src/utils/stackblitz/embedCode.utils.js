import sdk from "@stackblitz/sdk";

import { templateProject } from "./proyect";

/*
  Embed the project
 */
async function embedProject(title, example, id) {
  sdk.embedProject(`embed-${id}`, templateProject(title, example), {
    clickToLoad: true,
    hideDevTools: false,
    hideExplorer: true,
    showSidebar: false,
    height: 300,
    openFile: "index.js",
    view: "default",
    devToolsHeight: 100,
  });
}

export default embedProject;
