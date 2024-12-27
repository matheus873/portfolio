import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works"]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "CRUD and AWS Integration",
        description : "In this project, I developed a powerful RESTful API using Django that interacts seamlessly with client applications. The API is designed to facilitate efficient CRUD (create, read, update, delete) operations. I also integrated the API with AWS services to improve performance and scalability. And I contributed to build responsive and pixel-perfect user-friendly interfaces.",
        tech : [ "Python", "Django", "RESTful API", "AWS", "PostgreSQL", "React" ],
        code : '#',
        live : 'https://halcyon-counsel.com',
        thumnail : "openhousesdirect.png",
        featured : true
    },
    

    {
        title : "Custom Error Handling",
        description : "Here, I implemented a custom error handler that delivers meaningful error messages in a consistent format, improving the user experience. I also optimized the application performance to make it 15% faster.",
        tech : [ "python", "GraphQL", "MySQL", "AWS" ],
        code : '#',
        live : 'https://mantis.kilobyte.live',
        thumnail : "mantis.png",
        featured : true
    },
    
    {
        title : "Unit and API Testing ",
        description : "I contributed to the unit tests using unittest and pytest and to the API tests using Postman.",
        tech : [ "Python", "API", "Unittest", "Pytest", "Postman" ],
        code : '#',
        live : 'https://heycultivation.com/',
        thumnail : "heycultivation.png",
        featured : true
    },

    {
        title : "Content Management Systems (CMS)",
        description : "In this project, I contributed to implement a custom CMS using Laravel",
        tech : [ "Laravel", "Vue.js" ],
        code : '#',
        live : 'https://www.preregmaster.co.uk',
        thumnail : "preregmaster.png",
        featured : true
    },

    // {
    //     title : "Crosssy Road",
    //     description : "A Crossy Road game made with Three.js",
    //     tech : [ "Three.js", "WebGL", "Javascript" ],
    //     code : '#',
    //     live : 'https://crossy-road.glitch.me/',
    //     thumnail : "3dgame2.png",
    //     featured : true
    // },

    {
        title : "APIs",
        description : " Here, I created APIs for third-party integrations, providing data access over HTTP and developed more flexible APIs that allow clients to request exactly the data they need.",
        tech : [ "Laravel", "React.js" ],
        live : 'https://www.rome2rio.com/',
        code: '#',
        thumnail : "rome2rio.png",
        featured : true
    },

    {
        title : "Delivery and Courier Services",
        description : "",
        tech : [],
        live : 'https://www.parcel2go.com/',
        code: '#',
        thumnail : "parcel2go.png",
    },

    {
        title : "Fast, Reliable Drone Deliveries",
        description : "",
        tech : [],
        live : 'https://blip-delivery.com/',
        code: '#',
        thumnail : "blip.png",
    },

    // {
    //     title : "Theiceman Film",
    //     description : "I built a platform that allows users to easily animate 3D characters. Overall, the platform gives users creative freedom to explore and express their ideas.",
    //     tech : [ "React", "three.js", "AWS"],
    //     code : '#',
    //     live : 'https://www.theicemanfilm.com',
    //     thumnail : "theicemanfilm.png",
    //     featured : true
    // },

    // {
    //     title : "Water Underground",
    //     description : "3D data visualization project that lets users explore data related to underground water. It uses interactive graphics to show things like water flow and distribution beneath the surface, making complex data easier to understand. The goal is to create an engaging, visual experience for users to learn more about water-related topic",
    //     tech : [ "Three.js", "Blender" ],
    //     live : 'https://milcktoast.com/water-underground',
    //     code: "#",
    //     thumnail : "waterunderground.png",
    //     featured : true
    // },

    // {
    //     title : "Careerly Chrome Extension",
    //     description : "This is a careerly chrome extension to manage the team. In this project, I implemented the multi page popup window using chrome extension router and implemented firebase google auth, taking the screenshot of current tab.",
    //     tech : [ "React", "Tailwind CSS", "Firebase", "MV3" ],
    //     live : 'https://www.quizclothing.co.uk/',
    //     code: '#',
    //     thumnail : "womanclothes.png",
    //     featured : true
    // },

    // {
    //     title : "Elixr Landing Page",
    //     description : "This is a landing page project was developed using GSAP, React and Tailwind CSS. I implemented the 3D animation, text animation and scroll animation using GSAP.",
    //     tech : [ "GSAP", "React", "Tailwind CSS" ],
    //     live : 'https://www.elixr.earth/',
    //     code: "#",
    //     thumnail : "elixr.png",
    //     featured: false
    //     },

    {
        title : "NFsounds",
        description : "",
        tech : [ ],
        live : 'https://nfsounds.mkaits.com/',
        code: '#',
        thumnail : "nfsound.png"
    },

    {
        title : "AGL",
        description : "",
        tech : [  ],
        live : 'https://www.agl.com.au/',
        code: '#',
        thumnail : "agl.png"
    },
    
    {
        title : "Supermodel Entrepreneur",
        description : "",
        tech : [],
        live : 'https://www.karliekloss.com/',
        code: '#',
        thumnail : "karliekloss.png"
    },

    {
        title : "Facility Management System",
        description : "",
        tech : [],
        live : 'https://facility-management-system.netlify.app/',
        code: '#',
        thumnail : "floorplan.png"
    },

    {
        title : "Finding Friends",
        description : "",
        tech : [],
        code : '#',
        live : 'https://myfriendmypartner.com/',
        thumnail : "myfriendmypartner.png"
    },

    // {
    //     title : "Hipa Drive",
    //     description : "I created a user-friendly and pixel-perfect UI component with Tailwind CSS. The component is designed to be responsive, adapting to different screen sizes for a great experience on all devices. Using Tailwind's utility-first approach, I focused on precise alignment and spacing to match the design specifications. The component includes intuitive interactions and accessibility features, making it easy to use for everyone. I also carried out testing to confirm its performance and visual accuracy, resulting in a polished final product",
    //     tech : [ "React", "Neuxt.js", "Tailwind CSS" ],
    //     live : 'https://www.hipadrive.com/',
    //     code: '#',
    //     thumnail : "hipadrive.png",
    //     featured: true
    // },

    // {
    //     title : "E-Commerce Site",
    //     description : "This is an e-commerce platform was developed using React and Node.js. In this project, I used MongoDB for a database. And I implement the multi filter function to find the suitable products quickly.",
    //     tech : [ "React", "Redux", "Node", "Stripe" ],
    //     code : '#',
    //     live : 'https://atem-ecommerce.netlify.app/',
    //     thumnail : "ecommerce.png",
    //     featured: true
    // },

    // {
    //     title : "MyVN",
    //     description : "I develope the gmail alert chrome extension based on MV3 and in this project, I used Gmail API, React and Typescript. When you receive a new gmail, you can get a alert as full screen modal.",
    //     tech : [ "Next.js", "GetServerSideProps"],
    //     code : '#',
    //     live : 'https://www.myvn.com',
    //     thumnail : "myvn.png"
    // },

    // {
    //     title : "Wheel Size",
    //     description : "I leveraged the built-in Next.js next/image component for automatic image optimization, lazy loading, and responsive images. This approach streamlined the loading process to improve performance and provide an optimized experience across devices while effectively displaying wheel sizes. (Next.js, image optimization",
    //     tech : [ "Next.js", "IMG Optimization"],
    //     code : '#',
    //     live : 'https://wheel-sizes.com',
    //     thumnail : "wheelsize.png"
    // }
    
]