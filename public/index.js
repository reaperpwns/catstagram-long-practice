import { createMainContent } from "./main.js";
import { initializePage } from "./main.js";
import { upvoteButton } from "./main.js";
import { comment } from "./main.js";
import { randomCat } from "./main.js";
import { commentBoard } from "./main.js";


window.onload = async () => {
    initializePage();
    createMainContent();
    randomCat();
    upvoteButton();
    comment();
    commentBoard();
}
