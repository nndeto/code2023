const slugEl = document.getElementById("url-slug")
const buttonEl = document.getElementById("download-button")
const downloadEl = document.getElementById("download-number")


function getDownloads() {
    // console.log(slugEl.value)
    let mod = slugEl.value

    fetch(`https://api.modrinth.com/v2/project/${mod}`)
        .then((response) => {
            // console.log(response) //checking that API data was returned
            return response.json() 
        })
        .then((data) => {
            //console.log(data) //checking that the data is parsing correctly

            
            //now I can drill down to get what I want, the downloads!
            let downloadNumber = data.downloads
            //console.log(downloadNumber) checking that I'm returning what I want

            downloadEl.textContent = `The ${mod} mod has ${downloadNumber} downloads.`
        })
}

// checking that the button click event listener works
// function checkMe() {
//     console.log("hello")
// }

buttonEl.addEventListener("click", getDownloads);
