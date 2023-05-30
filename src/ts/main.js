"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
var Project = /** @class */ (function () {
    function Project(title, description, image, link) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.link = link;
    }
    return Project;
}());
exports.Project = Project;
var arrayValue = []; // array for project objects
var etchsketch = new Project("Etch-A-Sketch", "A simple Etch-A-Sketch game made with HTML, CSS and JavaScript", "https://i.ibb.co/sJBsmxP/etchsketch.png", "");
var projects = document.querySelector('.projects');
function createProject(projectObject) {
    var project = document.createElement('div');
    project.classList.add('project');
    projects.append(project);
    var projectTitle = document.createElement('a');
    projectTitle.classList.add('title');
    projectTitle.textContent = projectObject.title;
    projectTitle.href = projectObject.link;
    project.append(projectTitle);
    var pic_card = document.createElement('div');
    pic_card.classList.add('pic-card');
    project.append(pic_card);
    var pic_inner = document.createElement('div');
    pic_inner.classList.add('pic-inner');
    pic_card.append(pic_inner);
    var pic_front = document.createElement('div');
    pic_front.classList.add('pic-front');
    pic_inner.append(pic_front);
    var pic_image = document.createElement('img');
    pic_image.classList.add('image');
    pic_image.src = projectObject.image;
    pic_front.append(pic_image);
    var pic_back = document.createElement('div');
    pic_back.classList.add('pic-back');
    pic_inner.append(pic_back);
    var pic_description = document.createElement('div');
    pic_description.classList.add('desc');
    pic_description.textContent = projectObject.description;
    pic_back.append(pic_description);
}
arrayValue.forEach(function (projectObject) {
    createProject(projectObject);
});
