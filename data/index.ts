const GuardianSaga = "/GuardianSaga.png"
const Praxeum = "/Praxeum.png"
const ZoomCLone = "/ZoomClone.png"
const appleClone = "/AppleClone.png"
const Library = "/Library.png"

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize creative and out-of-the-box thinking",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Creating beautiful web applications since 2020",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Frontend engineer with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "I'm always open to new software opportunities.",
      description: "",
      link: "See my resume",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "I'd love to hear from you!",
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
      title: "The Praxeum",
      des: "Commercial application for The Praxeum. Fully responsive. Collaborated with writers to ensure meaningful content. Continued development fulfilling feature requests. Features: user sign-ups, appointment scheduling, popups, announcement banners.",
      img: Praxeum,
      iconLists: ["html5-brands-solid.svg","css3-alt-brands-solid.svg","js-brands-solid.svg","wordpress-brands-solid.svg"],
      link: "https://thepraxeum.com/",
    },
    {
      id: 2,
      title: "Guardian Saga Support",
      des: "Commercial application for Guardian Saga Support. Fully responsive. Reusable components to promote scalability. Features: animations, carousels, dropdowns, animated timeline, application submission.",
      img: GuardianSaga,
      iconLists: ["html5-brands-solid.svg","css3-alt-brands-solid.svg","js-brands-solid.svg","/next.svg","/gsap.svg",],
      link: "https://www.guardiansaga.support/",
    },
    {
      id: 3,
      title: "Zoom Clone",
      des: "Clone of a zoom style website. Supports account creation, video meetings, multiple participants, meeting scheduling. Give it a try! (Personal Project)",
      img: ZoomCLone,
      iconLists: ["html5-brands-solid.svg","css3-alt-brands-solid.svg","/next.svg","/tail.svg", "/ts.svg",],
      link: "https://zoom-clone-green-six.vercel.app/",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. (Personal Project)",
      img: appleClone,
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://apple-clone-a332a4b85e7d.herokuapp.com/",
    },
    {
      id: 5,
      title: "Library",
      des: "E-Commerce website, includes listing all books and supports dynamic filtering by price and rating. (Personal Project)",
      img: Library,
      iconLists: ["html5-brands-solid.svg","css3-alt-brands-solid.svg","js-brands-solid.svg","/re.svg",],
      link: "https://libraryapp-jrhoe-2d6fdd61dd18.herokuapp.com/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Developer Contract",
      desc: "Rebuilt outdated website to improve user experience, SEO, navigation, and performance, which increased user acquisition and retention.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Frontend Engineer Intern",
      desc: "Modernized HTML, CSS, and React site into a responsive, dynamic, and interactive application prioritizing user experience and device compatibility",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Frontend Consultant",
      desc: "Consulted on performance enhancements as well as visual updates to ensure an optimal user experience.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Frontend Developer Contract",
      desc: "Transformed a completely static HTML, CSS application into an interactive user interface using animations, transitions, and carousels with Next.js. Improving user interaction and satisfaction.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/james-rhoe/"
    },
    {
      id: 2,
      img: "/git.svg",
      link: "https://github.com/JRhoe"
    },
    {
      id: 3,
      img: "/file-pdf-regular.svg",
      link:"/James Rhoe Resume.pdf"
    },
  ];