import { Project } from "./project";
export { arrayValue }

let arrayValue: Project[] = []; // array for project objects

const projectTest: Project = new Project
(
    "Test_1", 
    "Hello i am test 1 ", 
    "https://picsum.photos/200/300", 
    "https://www.google.com/"
);

const projectTest2: Project = new Project
(
    "Test_2", 
    "Hey i am test 2", 
    "https://picsum.photos/200/300", 
    "https://www.google.com/"
);

arrayValue.push(projectTest, projectTest2)
