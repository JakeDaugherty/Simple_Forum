function send(topic) {
const name = document.getElementById("name").value;
const subject = document.getElementById("subject").value;
const post = document.getElementById("para").value;

if (!name || !subject || !post) {
    alert("Please fill out all fields.");
    return;
}

const postData = {
    name: name,
    subject: subject,
    post: post,
    topic: topic
};

console.log("Post submitted:", postData);

document.getElementById("postsSection").innerHTML += `
    <div class="post">
        <h2>${subject}</h2>
        <p><strong>By:</strong> ${name}</p>
        <p>${post}</p>
        <hr>
    </div>
`;

document.getElementById("name").value = "";
document.getElementById("subject").value = "";
document.getElementById("para").value = "";

}