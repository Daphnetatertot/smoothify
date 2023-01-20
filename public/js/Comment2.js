window.onload = function setTemplate() {
    document.getElementById('allComments').innerHTML = localStorage.getItem('template');
};

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {

    console.log("addComment event", ev);

    let commentText, wrapDiv;

    const textBox = document.createElement('div');

    const replyButton = document.createElement('button');
    replyButton.class = 'reply';
    replyButton.innerHTML = 'Reply';

    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.class = 'likeComment';

    const deleteButton = document.createElement('button');

    deleteButton.innerHTML = 'Delete';

    deleteButton.class = 'deleteComment';

    if(hasClass(ev.target.parentElement, 'container')) {

        const wrapDiv = document.createElement('div');
        wrapDiv.class = 'wrapper';
        wrapDiv.style.marginLeft = 0;

        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText;

        textBox.style.backgroundColor = "cornflowerblue";
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "paleturquoise";
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    }
    setOnLocalStorage();
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.class.split(' ').indexOf(className) > -1;
}
document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.class = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '20px';
        const addButton = document.createElement('button');
        addButton.class = 'addReply';
        addButton.innerHTML = 'Add';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.class='cancelReply';
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);

    } else if(hasClass(e.target, 'addReply')) {
        addComment(e);
    } else if(hasClass(e.target, 'likeComment')) {
         const likeBtnValue = e.target.innerHTML;
         e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 : 1;
        setOnLocalStorage();
    } else if(hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
        setOnLocalStorage();
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }

    else{
        console.log("allComments no conditions passed")
    }
});


// const commentForm = document.getElementById('comment-form');


// commentForm.addEventListener("submit", addNewComment);




// function addNewComment(event){
//       event.preventDefault();
//       const newComment = {
//         "name": document.getElementById('new_comment_name').value,
//         "email": document.getElementById('new_comment_email').value,
//         "comment": document.getElementById('new_comment_text').value
//       }

//       const xhr = new XMLHttpRequest();
//       xhr.open("POST", serverUrl+"comment", true);
//       xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//       xhr.onreadystatechange = function () {
//         if (xhr.readyState != 4 || xhr.status != 200) return;

//         // On Success of creating a new Comment
//         console.log("Success: " + xhr.responseText);
//         commentForm.reset();
//       };
//       xhr.send(JSON.stringify(newComment));
// }
// const commentsList = document.getElementById('comments-list'),
//     commentTemplate = document.getElementById('comment-template');

// channel.bind('new_comment',newCommentReceived);

//     function newCommentReceived(data){
//       const newCommentHtml = commentTemplate.innerHTML.replace('{{name}}',data.name);
//       newCommentHtml = newCommentHtml.replace('{{email}}',data.email);
//       newCommentHtml = newCommentHtml.replace('{{comment}}',data.comment);
//       const newCommentNode = document.createElement('div');
//       newCommentNode.classList.add('comment');
//       newCommentNode.innerHTML = newCommentHtml;
//       commentsList.appendChild(newCommentNode);
//     }