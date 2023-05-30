import { Project } from "./project";

let arrayValue: Project[] = []; // array for project objects

const etchsketch: Project = new Project
(
    "Etch-A-Sketch", 
    "A simple Etch-A-Sketch game made with HTML, CSS and JavaScript",
    "https://i.ibb.co/sJBsmxP/etchsketch.png", 
    ""
);

const projectTest2: Project = new Project
(
    "Test_2", 
    "Hey i am test 2", 
    "https://picsum.photos/200/300", 
    "https://www.google.com/"
);

arrayValue.push(etchsketch, projectTest2);
console.log(arrayValue);

export { arrayValue };