const createLinkBtn = document.querySelector("#create-link")
const editorField = document.querySelector("#editor")
const toggleEditorBtn = document.querySelector("#toggle")
const getRangeBtn = document.querySelector("#get-range")
const getSelectionBtn = document.querySelector("#get-selection")

getSelectionBtn.onclick = () => {
    console.log(document.getSelection())
}
getRangeBtn.onclick = () => {
    const range = document.createRange();
    console.log(range);
}

const formatDoc = (command, value) => isEditing ? document.execCommand(command, false, value) : null

createLinkBtn.onclick = () => formatDoc('createLink', 'https://developer.mozilla.org/en-US/')

let isEditing = true;

toggleEditorBtn.onclick = () => {
    if(isEditing){
        editorField.setAttribute("contenteditable", false)
        isEditing = false
        editorField.style.backgroundColor = "whitesmoke"
    } else {
        editorField.setAttribute("contenteditable", true)
        isEditing = true 
        editorField.style.backgroundColor = "rgb(215, 235, 214)"

    }
}

