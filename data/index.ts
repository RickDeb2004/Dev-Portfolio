export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-white",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-white",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/next.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stacks",

    className: "lg:col-span-2 md:col-span-3 md:row-span-3 text-white",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-white",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI integrated business analysis platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center text-white",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "NestONDC - Digital Commerce Platform",
    des: "Our project is an ONDC (Open Network for Digital Commerce) site integrated with OpenStreetMap. Businesses and consumers across Bharat will benefit from seamless digital commerce experiences. Leveraging the OpenStreetMap API for location-based services, our platform not only visualizes shop locations on a dynamic geo map but also enhances the efficiency of site performance by 30%.",
    img: "/nest.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fire.svg"],
    link: "https://github.com/RickDeb2004/NestONDC",
    live: "https://nestondc.el.r.appspot.com/",
  },
  {
    id: 2,
    title: "Project Oregano",
    des: "Engineered to develop the website of HackNITR, one of the largest hackathons in India’s eastern region, which receives 12.1k monthly visits. Implemented the UI with good responsiveness and contributed to the web assembly of the website.",
    img: "/hack.png",
    iconLists: ["/next.svg", "/tail.svg"],
    link: "https://github.com/RickDeb2004/Project-Oregano",
    live: "https://hacknitr.com/",
  },
  {
    id: 3,
    title: "Banking Backend Service",
    des: "A loan management system powered by Node.js and Express.js, utilizing MySQL database for data storage. It offers functionalities including customer registration, loan eligibility checking, loan creation, payment processing, and statement viewing. With Docker containerization and Docker Compose for deployment, it ensures scalability and ease of setup.",
    img: "/bank.png",
    iconLists: ["/node.svg", "/postman.svg", "/sql.svg", "/dock.svg"],
    link: "https://github.com/RickDeb2004/Banking_Backend_Service",
    live: "https://github.com/RickDeb2004/Banking_Backend_Service",
  },
  {
    id: 4,
    title: "News-Store",
    des: "Expertly crafted a feature-rich Desktop News Application, resulting in a dynamic and intuitive interface tailored for both news readers and administrators. Utilized Electron to package the application for cross-platform compatibility, enabling seamless usage on Windows and macOS with a streamlined installation process and optimized performance. Implemented robust authentication and real-time database operations using Firebase, facilitating secure user login and efficient management of news articles and categories.",
    img: "/news.png",
    iconLists: ["/electron.svg", "/next.svg", "/fire.svg", "/tail.svg"],
    link: "https://github.com/RickDeb2004/News-Store",
    live: "https://github.com/RickDeb2004/package-desktop",
  },
];

export const testimonials = [
  {
    quote:
      "I met Debanjan via C4GT's DMP2024 program. His proposal was one of best out of 50 proposals, for a fullstack web dev project. His communication was clear and though he was not selected, he was willing to learn from this loss to improve himself ,It was the reason that I chose to start a new project with him. Over the course of the project he has delivered on time, ensured high level of quality and always ready to improve. I'm glad that I found a reliable professional like him and hoping to execute more projects.",
    name: "Arvind Kumar ",
    title: "COO of Vebsigns Technologies",
  },
  {
    quote:
      "I met Debanjan via C4GT's DMP2024 program. His proposal was one of best out of 50 proposals, for a fullstack web dev project. His communication was clear and though he was not selected, he was willing to learn from this loss to improve himself ,It was the reason that I chose to start a new project with him. Over the course of the project he has delivered on time, ensured high level of quality and always ready to improve. I'm glad that I found a reliable professional like him and hoping to execute more projects.",
    name: "Arvind Kumar ",
    title: "COO of Vebsigns Technologies",
  },
  {
    quote:
      "I met Debanjan via C4GT's DMP2024 program. His proposal was one of best out of 50 proposals, for a fullstack web dev project. His communication was clear and though he was not selected, he was willing to learn from this loss to improve himself ,It was the reason that I chose to start a new project with him. Over the course of the project he has delivered on time, ensured high level of quality and always ready to improve. I'm glad that I found a reliable professional like him and hoping to execute more projects.",
    name: "Arvind Kumar",
    title: "COO of Vebsigns Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Vebsigns",

    nameImg: "/veb.png",
  },

  {
    id: 2,
    name: "Ram Lakhan Charity",

    nameImg: "/ram.png",
  },
  {
    id: 3,
    name: "Intellirecruit",

    nameImg: "/int.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer (Intern)",
    desc: "Developing a business portfolio platform where the executives can easily manage the whole business operations effectively and the effective analysis report will help the growth of the client's business.",
    className: "md:col-span-2",
    thumbnail: "/veb.png",
  },

  {
    id: 2,
    title: "Full Stack Developer (Full-time)",
    desc: "Rebuilt and integrated the About, Media, Gallery, and Contact components of the website for Ram Lakhan Charitable Trust, optimizing architecture and increasing organic search traffic by 50%. Integrated Firebase Firestore and Storage, improving data retrieval speeds by 40% and reducing storage costs by 30%.",
    className: "md:col-span-2",
    thumbnail: "/ram.png",
  },
  {
    id: 3,
    title: "Full-Stack Developer (Part-time)",
    desc: "Revamped the login and register pages of Intellirecruit website, improving user engagement by 20% and reducing bounce rates by 15%. Implemented GraphQL for the API, enabling advanced skill-based searches and increasing user satisfaction by 25%. Improved data retrieval from Cloud SQL, reducing query response time by 30%.",
    className: "md:col-span-2",
    thumbnail: "/int.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/RickDeb2004",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/DebanjanNit",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/debanjan-mukherjee-181615224/",
  },
];
