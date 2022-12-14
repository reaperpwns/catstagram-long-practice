export const initializePage = () => {
    const mainContainer = document.createElement('section');
    mainContainer.className = "designContainer";
    mainContainer.style.display = "flex";
    mainContainer.style.width = "auto";
    mainContainer.style.alignItems = "center"
    mainContainer.style.flexDirection = "column";
    document.body.style.backgroundColor = "beige";
    document.body.appendChild(mainContainer);
}


export const createMainContent = () => {
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram"
    h1.style.color = "blue";
    const container = document.querySelector(".designContainer");
    const img = document.createElement('img');
    img.style.maxWidth = "500px";
    container.appendChild(h1)
    container.appendChild(img);
    fetchImg();
}

const fetchImg = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?size=small")
    const data = await response.json();
    const catImg = document.querySelector('img');
    catImg.src = data[0].url;
}

export const upvoteButton = () => {
    const upvoteButton = document.createElement('button');
    const downvoteButton = document.createElement('button');
    const container = document.querySelector('.designContainer');
    const p = document.createElement("p");
    upvoteButton.id = "up-vote-pic";
    upvoteButton.innerText = "Up-Vote"
    upvoteButton.type = "button"
    downvoteButton.id = "down-vote-pic";
    downvoteButton.innerText = "Down-Vote"
    downvoteButton.type = "button"
    container.appendChild(upvoteButton)
    container.appendChild(downvoteButton)
    container.appendChild(p)

    let count = 0
    upvoteButton.addEventListener("click", () => {
        count++;
        p.innerText = `this cat has ${count} votes!`
        localStorage.setItem("upvote", count)
    })

    downvoteButton.addEventListener("click", () => {
        count--;
        p.innerText = `this cat has ${count} votes!`
        localStorage.setItem("downvote", count)
    })
}

let commentArr = [];
const ul = document.createElement("ul")
document.body.appendChild(ul)

export const comment = () => {
    const commentButton = document.createElement('button');
    const commentInput = document.createElement('input');
    const container = document.querySelector('.designContainer');
    commentButton.id = "comment";
    commentButton.type = "button"
    commentButton.innerText = "comment"
    commentInput.id = "comment-input";
    commentInput.type = "input";
    commentInput.placeholder = "Say something nice!";
    container.appendChild(commentButton)
    container.appendChild(commentInput)
    let input = document.getElementById("comment-input")



    commentButton.addEventListener("click", () => {
        const li = document.createElement("li")
        const deleteButton = document.createElement('button');
        deleteButton.type = "button";
        li.innerText = input.value
        commentArr.push(input.value)
        localStorage.setItem(`comments`, JSON.stringify(commentArr))
        li.appendChild(deleteButton)
        ul.appendChild(li)
        input.value = "";
        deleteButton.innerText = "DELETE";
        deleteButton.addEventListener("click", () => {
            li.remove();
        })
    })
}


export const randomCat = () => {
    const container = document.querySelector('.designContainer');
    const randomCat = document.createElement('button');
    randomCat.id = "random-cat";
    randomCat.type = "button";
    randomCat.innerText = "random cat!"
    container.appendChild(randomCat)
    randomCat.addEventListener("click", () => {
        fetchImg();
    })
}

export function commentBoard() {
    if (localStorage.getItem(`comments`)) {
        let comments = JSON.parse(localStorage.getItem(`comments`));
        comments.forEach(comm => {
            const li = document.createElement("li")
            li.innerText = comm;
            ul.appendChild(li)
        });
    }
}
