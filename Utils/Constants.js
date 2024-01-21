import craftsyGIF from "/craftsy.gif";
import netlifyGIF from "/netlify.gif";
import foodGIF from "/food.gif";
import wayGIF from "/waytome.gif";

export const items = [
  {
    id: 1,
    title: "Craftsy - Ecommerce",
    link: "https://craftsy.netlify.app/",
    tech: " React, Node, MongoDB, Express, CSS, Braintree, JWT.",
    githubLink:
      "https://github.com/ffxhxd/CRAFTSY-Ecommerce-web-app-for-Handmade-items",
    img: craftsyGIF,
    desc: `Craftsy was my final year project aimed at addressing the challenges faced by artisans in Kashmir. With a thriving market for handicrafts and millions of tourists, we observed that artisans were not reaping the deserved profits. To bridge this gap, we developed an e-commerce app using the MERN stack.

    I focused on UI and utilized ReactJS to create a user-friendly platform. The app allowed artisans to directly list and sell their handmade products globally, eliminating middlemen. Key features included product filtering, sorting, and secure user authentication. AXIOS was used for efficient API communication, and a fully functional shopping cart was implemented using React Context API.
    
    In addition, we also integrated payment gateway`,
  },
  {
    id: 2,
    title: "NETFLIX GPT",
    tech: " React, Tailwind CSS, Firebase, TMDB APIS, Redux Toolkit, Custom Hooks.",
    link: "https://netflixgptfahad.netlify.app/",
    githubLink: "https://github.com/ffxhxd/NetflixGPT",
    img: netlifyGIF,
    desc: "Netflix like web application with the Power of TMDB APIs to search any movie you want. Configured Tailwind CSS for responsive and visually appealing designs. Implemented a secure user authentication system with Firebase. Integrated The Movie Database APIs for a powerful movie search functionality. Integrated Redux for State management, allowing for efficient user session handling. Integrated with The Movie Database TMDB API to fetch data of movies. Utilized custom hooks to fetch and update movie data in the Redux store. Added Multi-Language support to the app.",
  },
  {
    id: 3,
    title: "FOOD ORDERING WEBSITE",
    link: "NOT LIVE [CORS ISSUE]",
    githubLink: "https://github.com/ffxhxd/React-Food-Ordering-Website",
    tech: " React, SCSS, Parcel, Live SIWIGGY.COM APIS, Redux Toolkit, JEST, RTK.",
    img: foodGIF,
    desc: `Food Ordering website like Swiggy.com 
    Developed Responsive UI using React.
    Utilized Parcel Bundler for project bundling.
    Maintained a Scalable and Organized codebase.
    Integrated Swiggy.com APIs seamlessly.
    Developed a shopping cart using Redux Toolkit.
    Conducted comprehensive Unit and Integration testing.
    Ensured application reliability using Jest and React Testing Library.
    Implemented Dynamic rendering of food items and details.
    NOT LIVE [CORS ISSUE] + Swiggy keeps changing their API`,
  },
  {
    id: 4,
    title: "Wayto.me ClONE",
    tech: " React, SCSS, Javascript",
    link: "https://waytomeclone.netlify.app/",
    githubLink: "https://github.com/ffxhxd",
    img: wayGIF,
    desc: `Clone of https://wayto.me/ using React.js and SCSS`,
  },
];
