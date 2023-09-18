export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  // Your code here
  document.title = "Stephany's Portfolio";
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  // Your code here
  document.querySelector(".heading").innerText = "Stephany";
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  // Your code here
  document.querySelector("#paragraph").innerText =
    "I grew up in the city of Lima, Peru. Living in San Francisco for the past 6 years";
}
