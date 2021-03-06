//posts the comment onto the webpage
async function postCommentHandler(event) {
  event.preventDefault();
  const post_id_local = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const user_id_local = 1; //TODO replace with session auth

  // Get user_id dynamically
  const sessionUser = document.getElementById('session_user').value;

  const comment_text_local = document.getElementById("comment").value.trim();

  //Make request to the server
  const response = await fetch("/api/comments/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      comment_text: comment_text_local,
      user_id: sessionUser,
      post_id: post_id_local,
    }),
  });

  console.log(response);
  document.getElementById("comment").value = "";
  document.location.reload();
}

//find the post button
document
  .getElementById("post-comment")
  .addEventListener("click", postCommentHandler);
