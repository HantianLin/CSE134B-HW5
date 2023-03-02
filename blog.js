const postList = document.getElementById('postList');
const addPostButton = document.getElementById('addPostButton');
const postDialog = document.getElementById('postDialog');
const postTitle = document.getElementById('postTitle');
const postDate = document.getElementById('postDate');
const postSummary = document.getElementById('postSummary');
const submitButton = document.getElementById('submitButton');
const cancelButton = document.getElementById('cancelButton');

const modalMode = "add"

let posts = [];

function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <p>Title: ${post.title}<p>
        <p>Date: ${post.date}</p>
        <p>Summary: ${post.summary}</p>
        <button class="editButton" data-id="${post.id}">Edit</button>
        <button class="deleteButton" data-id="${post.id}">Delete</button>
        <hr>
      `;
      postList.appendChild(postElement);
    });
}

function editPost(id) {
    const post = posts.find(post => post.id === id);
    if (post) {
        postTitle.value = post.title;
        postDate.value = post.date;
        postSummary.value = post.summary;
        modalMode = "edit";
        submitButton.dataset.id = id;
        postDialog.showModal();
    }
}

function deletePost(id) {
    posts = posts.filter(post => post.id !== id);
    displayPosts();
}

addPostButton.addEventListener("click", () => {
    modalMode = "add";
    postDialog.showModal();
});

submitButton.addEventListener("click", () => {
    const mode = submitButton.dataset.mode;
    const id = submitButton.dataset.id;
    const title = postTitle.value;
    const date = postDate.value;
    const summary = postSummary.value;

    if (modalMode === "edit") {
        const index = posts.findIndex(post => post.id === parseInt(id));
        posts[index].title = title;
        posts[index].date = date;
        posts[index].summary = summary;
    } else if (modalMode === "add") {
        const newPost = {
            id: Date.now(),
            title,
            date,
            summary
        };
        posts.push(newPost);
    }

    postDialog.close();
    displayPosts();
});

cancelButton.addEventListener("click", () => {
    postDialog.close();
});

postList.addEventListener("click", (event) => {
    const target = event.target;
    const id = parseInt(target.dataset.id);

    if(target.classList.contains('editButton')) {
        editPost(id);
    }
    if(target.classList.contains('deleteButton')) {
        deletePost(id);
    }
});