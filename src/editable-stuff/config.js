// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shanyi",
  middleName: "",
  lastName: "Liow",
  message: "Full-Stack Developer | Enjoys Web3 Development.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/syliow",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/syliow1107",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sy_liow.jpg"),
  imageSize: 300,
  message:
    "Hello 👋 My name is Liow Shan Yi. I have experience in both Front-end and Back-end development, specialising in MERN stack (MongoDB, Express, React, Node). I am passionate about blockchain technologies and cryptocurrency, currently working on personal projects related with Web 3.0 and NFT.",
  resume: require("../editable-stuff/LiowShanYi_Resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "All Projects",
  gitHubUsername: "syliow", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    "coinpengin-frontend",
    "coinpengin-backend",
    "pengin-nft-website",
    "pengin-nft-minting-website",
    "Volcanic-LandingPage",
    "mdis-cafe",
  ],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Recent Project",
  message:
    "Both Coinpengin and Pengin Club are based on my own personal NFT collection called Pengin which are listed on Opensea testnet. This is my first project in blockchain and I am excited to finish it and share it with the world, I am also glad that I have been able to learn a lot from it and I am looking forward to continue to learn more about NFT and blockchain development.",
  images: [
    {
      img: require("../assets/img/Untitled.png"),
      label: "Coinpengin",
      paragraph: "A crypto price tracker website inspired by Coingecko.",
    },
    {
      img: require("../assets/img/pengin-club.png"),
      label: "Pengin Club NFT",
      paragraph: "Landing page for Pengin NFT collection.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: true,
  heading: "Work Experiences",
  data: [
    {
      role: "Full-Stack Developer (Current)", // Here Add Company Name
      companylogo: require("../assets/img/tatsu.png"),
      date: "Tatsu Works",
    },
    {
      role: "Full-Stack Developer (2022)", // Here Add Company Name
      companylogo: require("../assets/img/dmdasher.png"),
      date: "DM. Dasher",
    },
    {
      role: "Software Engineer Intern (2021)",
      companylogo: require("../assets/img/codeforasia.png"),
      date: "Code for Asia",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
