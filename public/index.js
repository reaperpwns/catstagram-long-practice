window.onload = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json()
    console.log("res: ", res)
    console.log("data: ", data)


    const url = data[0].url
    console.log("url: ", url)

    // const urlParts = url.split("/")
    // console.log("urlParts: ", urlParts)
    // const randomCat = urlParts[4]
    // console.log("randomCat: ", randomCat)

    const img = document.createElement("img");

    console.log(img)

    img.setAttribute("src", url)
    // img.id = "cat-image"







}
