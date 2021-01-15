//variable to hold the image url
let uploadedImageUrl = "";
//init the widget
var myCropWidget = cloudinary.createUploadWidget(
  {
    cloudName: "quarantinepics",
    uploadPreset: "karsgrro",
    folder: "images",
    cropping: false,
  },
  (error, result) => {
    //console.log(error, result);
    console.log("this is what it results ", result);
    if (result.info.url) {
      console.log(result.info.url); // This here will return the image url uploaded onto the webpage
      //replace the stock photo with the one the user uploads
      uploadedImageUrl = result.info.url;
      document.getElementById("post-image").src = uploadedImageUrl; //This sets the stock image with the uploaded one;
    }
  }
);

//show the menu
function uploadMenuHandler(event) {
  event.preventDefault();
  let data = myCropWidget.open();
  console.log("data object", data);
  //After this menu the file is uploaded to the server
}

//send request to post api to save as new post
function makePostHandler(event) {
  console.log("Making post!");
  event.preventDefault();
  const caption = document.querySelector("#caption").value.trim();
  const tags = document.querySelector("#tags").value.trim();
  const image = document.getElementById("post-image").src;
  console.log(
    `Making new post with ${image} image, ${caption} caption, ${tags} tags`
  );
}
//Add listener to add image page
document
  .querySelector("#post-image")
  .addEventListener("click", uploadMenuHandler);

//add listener for upload button
document.querySelector("#upload").addEventListener("click", makePostHandler);