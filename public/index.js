import { createMainContent } from "./main.js";
import { initializePage } from "./main.js";
import { interaction } from "./main.js";


window.onload = async () => {
    initializePage()
    createMainContent()
    interaction();
    // console.log(document.body)
}
