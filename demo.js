// We use this code, known as Objects, to control toggling like / unlike status

let glyphStates = {
  "♡": "♥",
  "♥": "♡",
};

let colorStates = {
  red: "",
  "": "red",
};

// This code is what lets JavaScript find the elements that we want to make clickable.
// Without JS, clicking on these heart shapes does nothing. Uncomment this code and refresh the demo page.

let articleHearts = document.querySelectorAll(".like-glyph");

//We use DOM Manipulation to update the screen and mimic Server Communication to only update the screen if the sending of information to the server succeeds.
function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function (serverMessage) {
      alert("You've notified the server!");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function (error) {
      alert("Something went wrong!");
    });
}

// In order for the call to the server and the update of the screen to work,
// the element we identify in the beginning need to be told to run that that update code when an "event" is fired.
// This is Event Handling.

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// When all the STEPs' code changes have been complete, you'll be able to see a working demonstration of our reference example.
// Sure, it's maybe not as pretty as a professional site, but they're only different from our site in style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
