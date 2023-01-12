const sendChangeBtn = document.getElementById('change-text');
const toFind = document.getElementById('toFind');
const toReplace = document.getElementById('toReplace');
const changePara = document.getElementById('change-p');
const toPara = document.getElementById('toPara');
const supriseBtn = document.getElementById('suprise');

sendChangeBtn.onclick = async function (e) {
    function gotTabs(tabs) {
        let message = {
            change: 'text',
            findTxt: toFind.value,
            replaceTxt: toReplace.value
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }

    let queryOptions = { active: true, currentWindow: true };
    await chrome.tabs.query(queryOptions, gotTabs);
    // await toFind.value = '';
    // await toReplace.value = '';
    // await document.getElementById('toFind').value = '';
    // await document.getElementById('toReplace').value = ''; 


};

changePara.onclick = async function (e) {
    let queryOptions = { active: true };
    await chrome.tabs.query(queryOptions, gotTabs);
  
    function gotTabs(tabs) {
        let message = {
            change: 'paragraph',
            replaceTxt: toPara.value
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }
};

supriseBtn.onclick = async function (e) {
    let queryOptions = { active: true, currentWindow: true };
    await chrome.tabs.query(queryOptions, gotTabs);

    const random = ['supriseLink', 'supriseVideo']
  
    function gotTabs(tabs) {
        let message = {
            change: random[Math.floor(Math.random() * 2)],
            Link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }
};