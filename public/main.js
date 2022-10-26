export const initializePage = () => {
    const mainContainer = document.createElement('section');
    mainContainer.className = "designContainer";
    mainContainer.style.display = "flex";
    mainContainer.style.width = "500px";
    mainContainer.style.justifyContent = "center"
    mainContainer.style.alignItems = "center"
    mainContainer.style.flexDirection = "column";
    document.body.appendChild(mainContainer);
}


export const createMainContent = () => {
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram"
    const container = document.querySelector(".designContainer");
    container.appendChild(h1)
    const img = document.createElement('img');
    img.style.width = "100px";
    container.appendChild(img);
    fetchImg();
}

const fetchImg = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?size=small")
    const data = await response.json();
    const catImg = document.querySelector('img');
    catImg.src = data[0].url;
}

export const interaction = () => {
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    const button2Input = document.createElement('input');
    button1.id = "vote-pic";
    button1.innerText = "vote"
    button1.type = "button"
    button2.id = "comment";
    button2.type = "button"
    button2.innerText = "comment"
    button2Input.id = "comment-input";
    button2Input.type = "input";
    button2Input.placeholder = "Say something nice!";
    button3.id = "random-cat";
    button3.type = "button";
    button3.innerText = "random cat!"
    const container = document.querySelector('.designContainer');
    container.appendChild(button1)
    container.appendChild(button2)
    container.appendChild(button2Input)
    container.appendChild(button3)
}
