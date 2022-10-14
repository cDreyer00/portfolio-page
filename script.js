const about = document.querySelector("#about");
const experiences = document.querySelector("#experiences");
const projects = document.querySelector("#projects");
const topics_selector = document.querySelector(".topics-selector")

let list = document.querySelectorAll("li");

const about_nav = list[0];
const experiences_nav = list[1];
const projects_nav = list[2];

experiences.style.display = "none";
projects.style.display = "none";

let enabled = "none";
let disabled = "none";

function OnClick(id){
    about.style.display = id == 0 ? "" : "none";
    experiences.style.display =id == 1 ? "" : "none";
    projects.style.display = id == 2 ? "" : "none";

    let pos = id == 0 ? 0 : id == 1 ? 200 : 400;
    topics_selector.style.transform = `translate(${pos}px)`
}