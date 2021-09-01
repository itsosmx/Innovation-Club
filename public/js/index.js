


window.onload = () => {
    Typing("Content_Head", 0)
}

function Typing(Hid, i) {
    var content = ["From Nahda to the world", "Welcome to Innovation Club", "Keep your eyes on the stars", "and your feet on the ground"]
    var id = document.getElementById(Hid);
    var LastContent = ""
    var index = 0
    var Timer = setInterval(() => {
        if (index === content[i].length - 1) {
            clearInterval(Timer)
            setTimeout(async () => {
                await ClearTyping(id, content[i])
                index = 0
                id.innerHTML = ""
                LastContent = ""
                i++
                if (i > content.length - 1) {
                    i = 0
                }
                Typing("Content_Head", i)
            }, 1500);
        }
        LastContent += content[i][index]
        id.innerHTML = LastContent
        index++
    }, (100))
}

async function ClearTyping(id, content) {
    var LastContent = content
    var index = content.length
    var Timer = setInterval(() => {
        if (index === 0) {
            clearInterval(Timer)
        }
        LastContent = LastContent.slice(0, -1)
        id.innerHTML = LastContent
        index--
    }, 10)
}
function mobileShowNav() {
    var mobileBtnID = document.getElementById("mobileNav")
    var Content_Head = document.getElementById('Content_Head')
    console.log(mobileBtnID.classList.contains("activeNav"))
    if (mobileBtnID.classList.contains("activeNav")) {
        mobileBtnID.classList.remove("activeNav")
        Content_Head.classList.remove('Content_Head_visibility')
    } else {
        mobileBtnID.classList.add("activeNav")
        Content_Head.classList.add('Content_Head_visibility')
    }
}