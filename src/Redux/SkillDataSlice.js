import { createSlice } from "@reduxjs/toolkit";
import pic_2 from "../Media/node.png";
import w_1_img from "../Media/weather_api/1.jpg";
import w_2_img from "../Media/weather_api/2.jpg";
import n_1_img from "../Media/notes_app/1.jpg";
import n_2_img from "../Media/notes_app/2.jpg";
import n_3_img from "../Media/notes_app/3.jpg";
import ns_1_img from "../Media/news_selector/1.jpg";
import ns_2_img from "../Media/news_selector/2.jpg";
import ns_3_img from "../Media/news_selector/3.jpg";
const initialState = {
  dataList: [
    { title: "C", value: 95 },
    { title: "C++", value: 90 },
    { title: "JavaScript", value: 85 },
    { title: "SQL", value: 80 },
    { title: "HTML", value: 95 },
    { title: "CSS", value: 95 },
    { title: "Git", value: 90 },
  ],
  skillLearning: [
    {
      name: "Node.js",
      img: pic_2,
    },
    {
      name: "Express.js",
      img: "https://www.sohamkamani.com/nodejs/expressjs-architecture/express-routing-logo.png",
    },
    {
      name: "MongoDB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
      // "https://assets.stickpng.com/images/58481021cef1014c0b5e494b.png",
    },
  ],
  experience: [
    {
      title: "As React Full Stack Web Developer",
      place: "at CodingShuttle.com",
      placeLink: "http://codingshuttle.com",
      duration: "November 2022 - Present",
      desc: `Learning Full Stack web development using React.js at codingshuttle.com with a 
      clear understanding of the usage of React Components, Redux working flow, fetching an API
      with asynchronous calls, manipulating HTML & CSS contents and properties by using DOM and
      Events concepts in JS, and having a good understanding on other ES6 concepts.
      <a href='https://www.linkedin.com/in/shivam-jaiswal-05500418a/'>Check out my Linkedin Profile(Click on me)</a>
      for the work I have done so far.`,
    },
    // {
    //   title: "As Aspiring Programmer",
    //   place: "at Unthinkable Solutions",
    //   placeLink: "https://www.unthinkable.co/",
    //   duration: "Joining will be in July 2023",
    //   desc: `Working as an Associate Software Engineer in a big firm like Unthinkable Solution is my short term Goal.`,
    // },
    {
      title: "As Full Stack Web Developer",
      place: "Freelancing",
      placeLink: "https://www.unthinkable.co/",
      duration: "Duration depends upon Project",
      desc: `As of now I'm comfortable to make new projects related to Web-Development and also freelancing is the best way to start your development journey.`,
    },
  ],
  contact: [
    {
      title: "Call Me",
      link: "tel:+919919522457",
      icon: ["fa-solid", "fa-phone"],
    },
    {
      title: "Mail Me",
      link: "mailto:sj9919522457@gmail.com",
      icon: ["fa-solid", "fa-paper-plane"],
    },
    {
      title: "GitHub",
      link: "https://github.com/Shivam123R",
      icon: ["fa-brands", "fa-square-github"],
    },
    {
      title: "Do Connect on LinkedIn",
      link: "https://www.linkedin.com/in/shivam-jaiswal-05500418a/",
      icon: ["fa-brands", "fa-linkedin"],
    },
  ],
  projects: [
    {
      title: "Weather-API",
      responsive: "Yes",
      codeLink: "https://github.com/Shivam123R/Weather-API-Demo",
      deployed: "Yes",
      deployedIn: "https://app.netlify.com/",
      deployLink: "https://web-api-by-shivam.netlify.app/",
      images: [w_1_img, w_2_img],
    },
    {
      title: "Notes-App",
      responsive: "Yes",
      codeLink: "https://github.com/Shivam123R/Notes-app.git",
      deployed: "Yes",
      deployedIn: "https://app.netlify.com/",
      deployLink: "https://note-app-by-shivam.netlify.app/",
      images: [n_1_img, n_2_img, n_3_img],
    },
    {
      title: "Infinite-News",
      responsive: "Yes",
      codeLink: "https://github.com/Shivam123R/infinite-news",
      deployed: "No",
      deployedIn: "----",
      deployLink: "----",
      images: [ns_1_img, ns_2_img, ns_3_img],
    },
  ],
};

const skillData = createSlice({
  name: "skillData",
  initialState,
  reducers: {
    sendData: (state, action) => {
      state.dataList = action.payload;
    },
    sendLearningData: (state, action) => {
      state.skillLearning = action.payload;
    },
  },
});
export default skillData.reducer;
export const { sendData, sendLearningData } = skillData.actions;
