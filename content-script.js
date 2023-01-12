chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage (message, sender, sendResponse) {
    if (message.change === 'text') {
        let text = document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7, p, li, td, a, caption, span');
        const capitalized = message.findTxt.slice(0, 1).toUpperCase() + message.findTxt.slice(1)
        console.log(capitalized)
        // const regex = new RegExp(message.findTxt, 'gi');

        for(let i = 0; i < text.length; i++) {
            if (text[i].innerText.includes(message.findTxt) || text[i].innerText.includes(message.findTxt.toUpperCase()) || text[i].innerText.includes(capitalized)) {
                let copyText = text[i].innerText.split(" ");
                console.log(copyText)
                for(let i = 0; i < copyText.length; i++) {
                    if(copyText[i].toLowerCase() === message.findTxt.toLowerCase()) {
                        copyText[i] = message.replaceTxt;
                    }
                }
                text[i].innerText = copyText.join(' ');
            }
            // text[i].innerText = text[i].innerText.replace(regex, message.replaceTxt);
        }
    }
    else if (message.change === 'paragraph') {
        let paragraph = document.querySelectorAll('p, div')
        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].innerText = message.replaceTxt
        }
    }
    else if (message.change === 'supriseVideo') {
        let allLinks = document.querySelector('body')
        allLinks.innerHTML = '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="400px" width="600px" allowfullscreen></iframe>'
    }
    else if (message.change === 'supriseLink') {
        let allLinks = document.querySelectorAll('a')
        for (let i = 0; i <allLinks.length; i++) {
            allLinks[i].href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    }
}