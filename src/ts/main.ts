import './style.css'
import { Project } from './project'
import { arrayValue } from './data'

const projects: HTMLDivElement = <HTMLDivElement>document.querySelector('.projects');

function createProject(projectObject: Project) {
    const project: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    project.classList.add('project');
    projects.append(project);

    const projectTitle: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    projectTitle.classList.add('title');
    projectTitle.textContent = projectObject.title;
    projectTitle.href = projectObject.link;
    project.append(projectTitle);

    const pic_card: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    pic_card.classList.add('pic-card');
    project.append(pic_card);

    const pic_inner: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    pic_inner.classList.add('pic-inner');
    pic_card.append(pic_inner);

    const pic_front: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    pic_front.classList.add('pic-front');
    pic_inner.append(pic_front);

    const pic_image: HTMLImageElement = <HTMLImageElement>document.createElement('img');
    pic_image.classList.add('image');
    pic_image.src = projectObject.image;
    pic_front.append(pic_image);

    const pic_back = document.createElement('div') as HTMLDivElement;
    pic_back.classList.add('pic-back');
    pic_inner.append(pic_back);

    const pic_description = document.createElement('div') as HTMLDivElement;
    pic_description.classList.add('desc');
    pic_description.textContent = projectObject.description;
    pic_back.append(pic_description);
}

arrayValue.forEach(each => createProject(each))