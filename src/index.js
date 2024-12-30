import './styles/style.css';
import projects from './components/projects';
import image from './assets/images/pexels-moh-adbelghaffar-771742.jpg';
import image2 from './assets/images/pexels-axh-sui-442882235-16388418.jpg'
import github from './assets/images/github.png';
import linkedin from './assets/images/linkedin.png';
import twitter from './assets/images/twitter.png';
import call from './assets/images/phone-call.png';
import emailIcon from './assets/images/email.png';

const imgContainer = document.querySelector('.img-con');
const h1 = document.querySelector('.name');
const profileCon = document.querySelector('.profile-con');
const footerLinkIcon = document.querySelector('.footer-link-icon');
const number = document.querySelector('.number-span');
const email = document.querySelector('.email-span');

const createImg = (src, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}

const img = createImg(image, 'Profile Picture');
imgContainer.insertBefore(img, h1);

const img2 = createImg(image2, 'Profile Picture');
profileCon.appendChild(img2);

const linkCon = document.querySelector('.link-con');

const createSocialLink = (href, imgSrc, alt) => {
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = alt;
    img.classList.add('social-icon');
    link.appendChild(img);
    return link;
}

linkCon.appendChild(createSocialLink('', github, 'Github'));
linkCon.appendChild(createSocialLink('', linkedin, 'Linkedin'));
linkCon.appendChild(createSocialLink('', twitter, 'Twitter'));
footerLinkIcon.appendChild(createSocialLink('', github, 'Github'));
footerLinkIcon.appendChild(createSocialLink('', linkedin, 'Linkedin'));
footerLinkIcon.appendChild(createSocialLink('', twitter, 'Twitter'));
number.appendChild(createImg(call, 'Phone Number'));
email.appendChild(createImg(emailIcon, 'Email'));

const projectsContainer = document.querySelector('.projects-con');

for (const projectKey in projects) {
    const project = projects[projectKey];

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectImg = document.createElement('img');
    projectImg.src = project.image;
    projectImg.alt = project.title;

    const projectTitleContainer = document.createElement('div');
    projectTitleContainer.classList.add('project-title-container');
    const projectTitle = document.createElement('h2');
    projectTitle.textContent = project.title;

    const projectIconCon = document.createElement('div');
    projectIconCon.classList.add('project-icon-con');

    //Github repository
    const githubLink = document.createElement('a');
    githubLink.href = project.github;
    githubLink.target = '_blank';
    const githubImg = document.createElement('img');
    githubImg.src = project.githubImg;
    githubImg.alt = 'Github';
    githubImg.classList.add('project-link-icon');
    githubLink.appendChild(githubImg);
    projectIconCon.appendChild(githubLink);

    //Live Demo
    const projectLink = document.createElement('a');
    projectLink.href = project.link; // Project URL
    projectLink.target = '_blank';
    const projectIcon = document.createElement('img');
    projectIcon.src = project.linkImg;
    projectIcon.alt = 'Live Demo Icon';
    projectIcon.classList.add('project-link-icon');
    projectLink.appendChild(projectIcon);
    projectIconCon.appendChild(projectLink);

    // Append GitHub and live demo links beside the title
    projectTitleContainer.appendChild(projectTitle);
    projectTitleContainer.appendChild(projectIconCon);

    const projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description');
    projectDescription.textContent = project.description;

    projectDiv.appendChild(projectImg);
    projectDiv.appendChild(projectTitleContainer);
    projectDiv.appendChild(projectDescription);

    projectsContainer.appendChild(projectDiv);
}