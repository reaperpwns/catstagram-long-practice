window.onload = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json()
    // console.log("res: ", res)
    // console.log("data: ", data)


    const url = data[0].url
    // console.log("url: ", url)

    // const urlParts = url.split("/")
    // console.log("urlParts: ", urlParts)
    // const randomCat = urlParts[4]
    // console.log("randomCat: ", randomCat)

    const div = document.createElement("div")
    const img = document.createElement("img");

    console.log(img)

    img.setAttribute("src", url)
    // img.id = "cat-image"

    document.body.append(div)
    div.append(img)
    img.style.width = "400px" // hard coded
    const buttons = document.createElement("buttons");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    const input = document.createElement("input");



    div.append(buttons)
    buttons.append(button1)
    buttons.append(button2)
    buttons.append(button3)
    button1.id = "vote-pic"
    button2.id = "delete-comment"
    button3.id = "new-kitten"
    button1.innerText = "vote"
    button2.innerText = "delete comment"
    button3.innerText = "random cat"
    button1.type = "button"
    button2.type = "button"
    button3.type = "button"



    div.append(input);
    input.type = "text"
    input.id = "comment"

    console.log(document.body)


    // input.addEventListener("input", function (event) {
    //     if (event.key === "Enter") {
    //         event.preventDefault();
    //         const comment = document.getElementById("comment").click();
    //     }
    // })
}
