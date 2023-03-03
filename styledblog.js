const postList = document.getElementById('postList');
const addPostButton = document.getElementById('addPostButton');
const postDialog = document.getElementById('postDialog');
const postTitle = document.getElementById('postTitle');
const postDate = document.getElementById('postDate');
const postSummary = document.getElementById('postSummary');
const submitButton = document.getElementById('submitButton');
const cancelButton = document.getElementById('cancelButton');

/*
let posts = [
    {
      id: 1,
      title: 'Pre-populated blog 1',
      date: '3/1/2023',
      summary: 'This is pre-populated for testing purposes.'
    },
    {
      id: 2,
      title: 'Pre-populated blog 2',
      date: '3/2/2023',
      summary: 'This is pre-populated for testing purposes.'
    },
    {
      id: 3,
      title: 'Pre-populated blog 3',
      date: '3/3/2023',
      summary: 'This is pre-populated for testing purposes.'
    }
];
*/

let posts = [];
if (localStorage.getItem('posts')) {
    posts = JSON.parse(localStorage.getItem('posts'));
    displayPosts();
}

function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.class = 'post'
      postElement.innerHTML = `
        <p id="title">Title: ${post.title}<p>
        <p id="date">Date: ${post.date}</p>
        <p id="summary">Summary: ${post.summary}</p>
        <button class="editButton" data-id="${post.id}"><i class="fas fa-pencil"></i></button>
        <button class="deleteButton" data-id="${post.id}"><i class="fas fa-trash"></i></button>
        <hr>
      `;
      postList.appendChild(postElement);
    });
}

//to show the pre-populated blogs
//window.addEventListener("load", displayPosts);

function editPost(id) {
    const post = posts.find(post => post.id === id);
    if (post) {
        postTitle.value = post.title;
        postDate.value = post.date;
        postSummary.value = post.summary;
        submitButton.dataset.mode = "edit";
        submitButton.dataset.id = id;
        postDialog.showModal();
    }
}

function deletePost(id) {
    posts = posts.filter(post => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
}

addPostButton.addEventListener("click", () => {
    postTitle.value = "";
    postDate.value = "";
    postSummary.value = "";
    submitButton.dataset.mode = "add";
    postDialog.showModal();
});

submitButton.addEventListener("click", () => {
    const title = postTitle.value;
    const date = postDate.value;
    const summary = postSummary.value;
    const mode = submitButton.dataset.mode;
    const id = submitButton.dataset.id;

    if (mode === "edit") {
        const index = posts.findIndex(post => post.id === parseInt(id));
        posts[index].title = title;
        posts[index].date = date;
        posts[index].summary = summary;
    } else if (mode === "add") {
        const newPost = {
            id: Date.now(),
            title,
            date,
            summary
        };
        posts.push(newPost);
    }

    postDialog.close();
    localStorage.setItem('posts', JSON.stringify(posts));
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