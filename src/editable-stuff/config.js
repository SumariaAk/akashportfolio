// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Akash",
  middleName: "",
  lastName: "Sumaria",
  message: " Passionate about technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/SumariaAk",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/akashsumaria/",
    }
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/akashlinkedin.jpg"),
  imageSize: 375,
  message:
    "Hey, my name is Akash Sumaria, a software developer with extensive experience in Java, Spring, Node js, React, and AWS. I graduated with Master of Science in Information Systems from Northeastern University, Boston in May 2023. I have 3+ years experience as software developer",
  resume: "https://drive.google.com/file/d/1sJupgTdxCgrLFK0z-eJmrZHfIqRPhSma/view?usp=drive_link",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "SumariaAk", 
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Spring Boot", value: 85 },
    { name: "AWS", value: 85 },
    { name: "JavaScript | Node js", value: 90 },
    { name: "React js | HTML | CSS ", value: 85 },
    { name: "Python", value: 65 },
    { name: "C#", value: 80 },
    { name: "SQL", value: 75 },
  ],
  softSkills: [
    { name: "Communication", value: 95 },
    { name: "Collaboration", value: 85 },
    { name: "Learning mindset", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Attention to detail", value: 90 },
    { name: "Self-motivation", value: 75 },
    { name: "Business acumen", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm actively looking for full-time Software Developer opportunity! If you know of any positions available, if you are hiring, or if you just want to say hello, please feel free to email me at",
  email: "sumaria.ak@northeastern.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Developer Intern',// Here Add Company Name
      companylogo: require('../assets/img/bphc.png'),
      date: 'June 2022 – Dec 2022',
    },
    {
      role: 'Senior Software Engineer',
      companylogo: require('../assets/img/capgemini.png'),
      date: 'Sep 2018 – Jul 2021',
    },
  ]
}


export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
