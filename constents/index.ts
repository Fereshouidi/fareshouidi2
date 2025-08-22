import { Socket } from "socket.io";
import { io } from "socket.io-client";

export const backendServer = "https://fareshouidi2-backend.vercel.app/routes";
export const socket = io('https://fareshouidi2-backend.vercel.app');

export const Skill_data = [
    {
      skill_name: "Html 5",
      Image: "/html.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Css",
      Image: "/css.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Java Script",
      Image: "/js.png",
      width: 65,
      height: 65,
    },
    {
      skill_name: "Tailwind Css",
      Image: "/tailwind.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React",
      Image: "/react.png",
      width: 80,
      height: 80,
    },
    // {
    //   skill_name: "Redux",
    //   Image: "/redux.png",
    //   width: 80,
    //   height: 80,
    // },
    // {
    //   skill_name: "React Query",
    //   Image: "/reactquery.png",
    //   width: 80,
    //   height: 80,
    // },
    {
      skill_name: "Type Script",
      Image: "/ts.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Next js 13",
      Image: "/next.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Framer Motion",
      Image: "/framer.png",
      width: 80,
      height: 80,
    },
    // {
    //   skill_name: "Stripe Payment",
    //   Image: "/stripe.webp",
    //   width: 80,
    //   height: 80,
    // },
    {
      skill_name: "Node js",
      Image: "/node-js.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Mongo db",
      Image: "/mongodb.png",
      width: 40,
      height: 40,
    },
  
  ];
  
  export const Socials = [
    {
      name: "Facebook",
      src: "/facebook.svg",
      url: "https://www.facebook.com/profile.php?id=100006758537339",
    },
    {
      name: "GitHub",
      src: "/gitwhite.png",
      url: "https://github.com/Fereshouidi",
    },
    {
      name: "LinkedIn",
      src: "/linkedIn.png",
      url: "https://www.linkedin.com/in/fares-houidi-b93346305",
    }
  ];
  
  export const Frontend_skill = [
    {
      skill_name: "Html 5",
      Image: "/html.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Css",
      Image: "/css.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Java Script",
      Image: "/js.png",
      width: 65,
      height: 65,
    },
    {
      skill_name: "Tailwind Css",
      Image: "/tailwind.png",
      width: 80,
      height: 80,
    },
    // {
    //   skill_name: "Material UI",
    //   Image: "/mui.png",
    //   width: 80,
    //   height: 80,
    // },
    {
      skill_name: "React",
      Image: "/react.png",
      width: 80,
      height: 80,
    },
    // {
    //   skill_name: "Redux",
    //   Image: "/redux.png",
    //   width: 80,
    //   height: 80,
    // },
    // {
    //   skill_name: "React Query",
    //   Image: "/reactquery.png",
    //   width: 80,
    //   height: 80,
    // },
    {
      skill_name: "Type Script",
      Image: "/ts.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Next js 13",
      Image: "/next.png",
      width: 80,
      height: 80,
    },
  ];
  
  export const Backend_skill = [
    {
      skill_name: "Node js",
      Image: "/node-js.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Express js",
      Image: "/express.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Mongo db",
      Image: "/mongodb.png",
      width: 40,
      height: 40,
    },
    // {
    //   skill_name: "Fire base",
    //   Image: "/Firebase.png",
    //   width: 55,
    //   height: 55,
    // },
    {
      skill_name: "Postger SQL",
      Image: "/postger.png",
      width: 70,
      height: 70,
    },
    {
      skill_name: "My SQL",
      Image: "/mysql.png",
      width: 70,
      height: 70,
    },
    // {
    //   skill_name: "Prisma",
    //   Image: "/prisma.webp",
    //   width: 70,
    //   height: 70,
    // },
    // {
    //   skill_name: "Graphql",
    //   Image: "/graphql.png",
    //   width: 80,
    //   height: 80,
    // },
  ];
  
  export const Full_stack = [
    {
      skill_name: "React Native",
      Image: "/ReactNative .png",
      width: 70,
      height: 70,
    },
    // {
    //   skill_name: "Tauri",
    //   Image: "/tauri.svg",
    //   width: 70,
    //   height: 70,
    // },
    // {
    //   skill_name: "Docker",
    //   Image: "/docker.webp",
    //   width: 70,
    //   height: 70,
    // },
  
    // {
    //   skill_name: "Figma",
    //   Image: "/figma.png",
    //   width: 50,
    //   height: 50,
    // },
  
  ];
  
  
  
  export const Other_skill = [
    // {
    //   skill_name: "Go",
    //   Image: "/go.png",
    //   width: 60,
    //   height: 60,
    // },
  ];

  // export const projects = [
  //   {
  //     src: '/NextWebsite.png',
  //     title: 'Modern next.js portfolio',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  //   {
  //     src: '/CardImage.png',
  //     title: 'Interactive Website Cards',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  //   {
  //     src: '/SpaceWebsite.png',
  //     title: 'Space Themed Website',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  // ]

  export const projects = [
    {
      _id: "673d9db03838c5c74bd04b6e",
      name: "Chating Web Application",
      background_img: "https://res.cloudinary.com/daduiowmw/image/upload/v1732278913/fares_houidi/jmtwkm2e6m2lwd8j3wjd.jpg",
      about: "A messaging platform that supports features like sending invitations, sending images in conversations, and account management.",
      discription: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
  <p style="font-size: 16px; margin-bottom: 15px;">
    A communication platform developed with mern stack technology to make users communicate by sending messages and images. 
    The platform includes a set of basic features that make the process of communicating with others more effective, such as:
  </p>

  <ul style="padding-left: 20px; margin-bottom: 15px;">
    <li><strong>Relationship Building</strong>: The platform supports the feature of sending friend requests and accepting or rejecting them. And block unwanted users.</li>
    <li><strong>Image Sharing in Conversations</strong>: The platform allows users to send and share images within conversations..</li>
    <li><strong>Account Management</strong>: The platform offers flexible options for managing personal accounts, such as updating personal information and changing avatars, along with security and privacy tools.</li>
    <li><strong>Activate Accounts</strong>: The platform activates accounts by sending an email with an activation code if the user creates a new account or wants to change his password.</li>
    <li><strong>Calculate Time</strong>: The platform supports calculating times such as the date of creating accounts, the date of sending messages, the date of sending friendship invitations, the duration of the relationship, the age of users, etc.</li>
  </ul>

  <p style="font-size: 15px; margin-bottom: 15px;">
    <strong>Disclaimer:</strong> This project is just a simple experiment I developed for fun and to enhance my programming skills. 
    The project is not intended to offer advanced features or a professional application, but rather serves as an opportunity for me to explore new technologies and improve my coding abilities.
  </p>

  <div padding: 12px; border-radius: 6px; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
    <p style="margin: 0 0 8px 0;">
      you can take a look at it from 
      <a href="https://github.com/Fereshouidi/hf-frontend.git" style="color: #007bff; text-decoration: none;">this link</a>
    </p>
    <p style="margin: 0;">
      you can take a look at the back-end from 
      <a href="https://github.com/Fereshouidi/hf-backend.git" style="color: #007bff; text-decoration: none;">this link</a>
    </p>
  </div>
</div>

`,
      images: [
        "/chatApp/R.jpg",
        "/chatApp/2.jpg",
        "/chatApp/3.jpg",
        "/chatApp/4.jpg",
        "/chatApp/5.jpg",
        "/chatApp/6.jpg",
        "/chatApp/7.jpg",
        "/chatApp/8.jpg",
        "/chatApp/9.jpg",
        "/chatApp/10.jpg",
        "/chatApp/11.jpg",
        "/chatApp/12.jpg",
        "/chatApp/13.jpg",
        "/chatApp/14.jpg",
        "/chatApp/15.jpg",
        "/chatApp/16.jpg",
        "/chatApp/17.jpg",
        "/chatApp/18.jpg",
        "/chatApp/19.jpg",
        "/chatApp/20.jpg",
        "/chatApp/21.jpg"
      ],
      sense: 'julay, 2024',
      __v: 0
    },
    {
      _id: "67cf4f129444a6f6c8c47367",
      name: "e-commerce web Application",
      background_img: "https://res.cloudinary.com/daduiowmw/image/upload/v1741948397/fast_buy/a6dyqkghvh3xtrvpfwry.png",
      about: "An e-commerce application with integrated features including a shopping cart, delivery tracking, reviews, discounts, and interactive tools to enhance user experience.",
      discription: "<div ><h2 style='text-align: center; color: white; font-size: 24px; margin-bottom: 15px;'>Comprehensive E-commerce Application with a Multifaceted User Experience</h2><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'>The application is an e-commerce platform built using MERN Stack technology. It offers the ability to browse a selection of products through organized hierarchical categories that simplify access to available options, and users can add products to their shopping cart and review order details before purchase.</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'>The application allows users to track the delivery progress by displaying the order stages from preparation to shipment arrival. It also includes a product rating feature that enables users to submit their ratings and write reviews. Additionally, it offers a discount feature with the ability to apply coupon codes for reduced prices, along with an advertisement board displaying promotional offers and a slider for showcasing products and offers dynamically.</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify;'>The application also supports dark mode and switching between Arabic and English. It was developed using proven technologies to ensure stable performance and fast response times, with a simple and clear user interface.</p><div class='links-div' style='margin-top: 10px;'><p style='margin: 0;'>You can take a look at it from github <a href='https://github.com/Fereshouidi/fast_buy' style='color: #007bff; text-decoration: none;'>this link</a></p><p style='margin: 0;'>You can take a look at the back-end from <a href='https://github.com/Fereshouidi/fastBuy_backEnd' style='color: #007bff; text-decoration: none;'>this link</a></p><p style='margin: 0;'>You can view the application deployed on Vercel from <a href='https://fast-buy-eta.vercel.app/' style='color: #007bff; text-decoration: none;'>this link</a></p></div></div>",
      images: [
        "/e-commerce/1.png",
        "/e-commerce/2.png",
        "/e-commerce/3.png",
        "/e-commerce/4.png",
        "/e-commerce/5.png",
        "/e-commerce/6.png",
        "/e-commerce/7.png",
        "/e-commerce/8.png",
        "/e-commerce/9.png",
        "/e-commerce/10.png"
      ],
      sense: 'january, 2025',
      __v: 0
    },
    {
      _id: "67e7fb4036af764baccef46a",
      name: "E-commerce Management System",
      background_img: "https://res.cloudinary.com/daduiowmw/image/upload/v1743261860/fares_houidi/fastBuyForCompany/gqntqqctixsbhhamidpy.png",
      about: "A management system for businesses to oversee and control their e-commerce operations, including product management, order tracking, analytics, and promotions.",
      discription: "<div ><h2 style='text-align: center; color: white; font-size: 24px; margin-bottom: 15px;'>Integrated E-commerce Management System</h2><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'>The company's e-commerce management application is an integrated system consisting of 6 main pages that offer comprehensive control over various aspects of the online store:</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'><strong>Statistics Page:</strong> Provides analysis of some important information regarding the store's performance.</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'><strong>Products Management Page:</strong> Allows CRUD operations on products, as well as managing categories and discounts.</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'><strong>Orders Management Page:</strong> Enables linking orders to delivery agents, modifying order status, and displaying information such as the number of orders per agent, user location, and phone numbers.</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'><strong>Customers Management Page:</strong> Displays customer data, including favorite products and purchase history.</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'><strong>Administrators Management Page:</strong> Allows viewing administrators' data, adding or deleting administrators, modifying their permissions and schedules, as well as managing delivery agents.</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'><strong>Company Management Page:</strong> Enables modification of basic information such as the logo, name, advertisement board, discount codes, customer registration terms, client website backgrounds, and social media settings.</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify; margin-bottom: 20px;'>🔹 The application supports two types of delivery agents: fixed schedule and freelance. Anyone can download the delivery agent app to search for nearby orders and start working, or work on a fixed schedule with a fixed salary.</p><p style='font-size: 16px; line-height: 1.6; color: white; text-align: justify;'>🔹 The application also features a dark mode and supports two languages (Arabic and English) to ensure a comprehensive user experience.</p><div class='links-div' style='margin-top: 10px;'><p style='margin: 0;'>You can take a look at it from github <a href='https://github.com/Fereshouidi/fast_buy_company' style='color: #007bff; text-decoration: none;'>this link</a></p><p style='margin: 0;'>You can take a look at the back-end from <a href='https://github.com/Fereshouidi/fastBuy_backEnd' style='color: #007bff; text-decoration: none;'>this link</a></p><p style='margin: 0;'>You can view the application deployed on Vercel from <a href='https://fast-buy-company.vercel.app/' style='color: #007bff; text-decoration: none;'>this link</a></p></div></div>",
      images: [
        "/e-commerceSystem/1.png",
        "/e-commerceSystem/2.png",
        "/e-commerceSystem/3.png",
        "/e-commerceSystem/4.png",
        "/e-commerceSystem/5.png",
        "/e-commerceSystem/6.png",
        "/e-commerceSystem/7.png",
        "/e-commerceSystem/8.png",
        "/e-commerceSystem/9.png",
        "/e-commerceSystem/10.png",
        "/e-commerceSystem/11.png",
        "/e-commerceSystem/12.png",
        "/e-commerceSystem/13.png",
        "/e-commerceSystem/14.png",
        "/e-commerceSystem/15.png",
        "/e-commerceSystem/16.png",
        "/e-commerceSystem/17.png",
        "/e-commerceSystem/18.png",
        "/e-commerceSystem/19.png",
        "/e-commerceSystem/20.png",
        "/e-commerceSystem/21.png",
        "/e-commerceSystem/22.png",
        "/e-commerceSystem/23.png",
        "/e-commerceSystem/24.png",
        "/e-commerceSystem/25.png",
      ],
      sense: 'march, 2025',
      __v: 0
    },
  ]

  export const personalInformation = {
    fullName: "Fares Houidi",
    dateOfBirth: "12/10/2003",
    location: "Tunisia, Sfax, Jbeniana, Hzag 3026",
    language: [
      {language: "Aabic", level: "( native )"},
      {language: "English", level: "( a2-b1 )"}
    ],
    bio: "specializing in building advanced web applications & mobile applications using modern technologies like JavaScript, React, and Node.js. I started my journey of learning programming on my own after dropping out of education early (since high school) due to not feeling comfortable.. I am committed to continuously improving my skills to ensure excellence in every project I work on, with a focus on delivering high quality and performance. If you're looking for an innovative developer who can turn your vision into a remarkable digital reality, I am here to make that happen."
  }
  
  export function getAgeFromDateString(dateString: string) {
  const [day, month, year] = dateString.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day); // month is 0-based
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // Check if birthday has occurred this year
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}
