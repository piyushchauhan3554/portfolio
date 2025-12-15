// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from "./assets/tech_logo/redux.png";
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
// import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import codsoft from "./assets/company_logo/codsoft.jpeg";
import internshala from "./assets/company_logo/internshala.png";
import cognifyz from "./assets/company_logo/cognifyz.png";
import ybi from "./assets/company_logo/ybi.jpeg";

// Education Section Logo's
import stmary from "./assets/education_logo/st-mary.jpeg";
import coer from "./assets/education_logo/coer.jpeg";

// Project Section Logo's
import quickai from "./assets/work_logo/quickai.png";
import quickchat from "./assets/work_logo/quickchat.png";
import todo from "./assets/work_logo/todo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cognifyz,
    role: "Frontend Developer Intern",
    company: "Cognifyz",
    date: "September 2025 - October 2025",
    desc: "Worked as a Frontend Developer Intern, creating responsive and visually appealing user interfaces using ReactJS, JavaScript, HTML, CSS, and Tailwind CSS. Improved UI consistency, built reusable components, and collaborated with the team to enhance user experience and optimize website performance.",
    skills: ["ReactJS", "Redux", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    id: 1,
    img: ybi,
    role: "Data Science Intern",
    company: "YBI Foundation",
    date: "June 2024 - July 2024",
    desc: "Worked as a Data Science Intern, building and experimenting with various Machine Learning models. Performed data preprocessing, feature engineering, model training, and evaluation using Python-based ML libraries. Gained hands-on experience in supervised and unsupervised learning while working on real-world datasets.",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
      "Machine Learning",
      "Data Preprocessing",
    ],
  },
  {
    id: 2,
    img: codsoft,
    role: "Python Developer Intern",
    company: "CodSoft",
    date: "September 2023 - October 2023",
    desc: "Worked as a Python Developer Intern, building beginner-friendly and interactive Python applications such as a Rock-Paper-Scissors game, a calculator, and a Tic-Tac-Toe game. Developed clean and modular code, implemented logic-based functionalities, and strengthened problem-solving skills through hands-on project development.",
    skills: ["Python", "Problem Solving", "OOP", "Logic Building"],
  },

  {
    id: 3,
    img: internshala,
    role: "Fullstack Developer Intern",
    company: "Internshala",
    date: "June 2023 - August 2023",
    desc: "Developed full-stack features using the MERN stack, including building responsive UIs, creating reusable components, and integrating REST APIs. Optimized application performance and collaborated in an agile environment to deliver high-quality, scalable web solutions.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "React JS",
      "Node JS",
      "MongoDb",
      "Redux",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: coer,
    school: "Coer University, Roorkee",
    date: "Sept 2022 - Present",
    grade: "9.35 CGPA",
    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) from COER University, Roorkee. Throughout my academic journey, I have gained a solid understanding of core subjects such as Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, and Web Development. I have actively worked on multiple projects, participated in hackathons, and improved my skills in both frontend and backend development. My learning experience at COER has helped me grow technically and strengthened my problem-solving and teamwork abilities.",
    degree: "Bachelor of Technology in CSE",
  },
  {
    id: 1,
    img: stmary,
    school: "St. Mary's Sr. Sec. School, Haridwar",
    date: "Apr 2021 - March 2022",
    grade: "86.8%",
    desc: "I completed my Class 12 from St. Mary’s Sr. Sec. School, Haridwar, under the CBSE board, with Physics, Chemistry, and Mathematics (PCM) along with Information Practices (IP). My academic experience helped me build a strong foundation in analytical thinking, problem-solving, and basic programming concepts.",
    degree: "CBSE(XII) - PCM with Information Practices (IP)",
  },
  {
  id: 2,
  img: stmary,
  school: "St. Mary's Sr. Sec. School, Haridwar",
  date: "Apr 2019 - March 2020",
  grade: "77.8%",
  desc: "I completed my Class 10 from St. Mary’s Sr. Sec. School, Haridwar, under the CBSE board. This phase helped me develop strong fundamentals across all major subjects and shaped my discipline and academic mindset. It also sparked my early interest in computers and technology, motivating me to pursue the field of Computer Science in higher studies.",
  degree: "CBSE (X)",
}
];

export const projects = [
  {
    id: 0,
    title: "QuickAI - AI Saas Application",
    description:
      "A fully featured AI-powered SaaS application built using the PERN stack (PostgreSQL, Express.js, React.js, and Node.js). The platform integrates advanced AI capabilities to automate tasks, generate intelligent insights, and enhance user productivity. It provides secure authentication, real-time data processing, and a clean, intuitive UI for effortless interaction. Designed with scalability, performance, and modern cloud practices in mind, this application delivers a seamless end-to-end experience for both users and developers.",
    image: quickai,
    tags: [
      "PostgreSQL",
      "Express",
      "NodeJs",
      "React JS",
      "APIs",
      "Clerk",
      "Cloudinary",
      "Vercel"
    ],
    github: "https://github.com/piyushchauhan3554/QuickAi",
    webapp: "https://thequick-ai.vercel.app/",
  },
  {
    id: 1,
    title: "QuickChat - Full Stack Chat Application",
    description:
      "QuickChat is a full-stack, real-time messaging platform built to deliver fast, secure, and highly interactive communication between users. Powered by React.js on the frontend and Node.js with Express.js on the backend, the application uses Socket.IO to enable instant messaging, live typing indicators, and accurate online/offline user status—all without page reloads.",
    image: quickchat,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "socket.io"],
    github: "https://github.com/piyushchauhan3554/Chat-app",
    webapp: "https://the-chatapp-quickchat.vercel.app/",
  },
  {
    id: 2,
    title: "To-do List",
    description:
      "Users can add tasks, mark them as completed, edit them, or delete them with a clean and responsive interface. It includes category selection options such as Work, Personal, Study, and Others to keep tasks organized. Real-time updates ensure smooth interactions without refreshing the page. The app also features a modern dark mode for comfortable viewing. This project highlights strong use of DOM manipulation, event handling, and clean UI design using HTML, CSS, and JavaScript.",
    image: todo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/piyushchauhan3554/To-do-List",
    webapp: "https://the-todo-list-app.vercel.app/",
  },
];
