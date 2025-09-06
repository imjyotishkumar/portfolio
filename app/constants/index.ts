export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "project",
		title: "projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	// {
	// 	title: "Wordpress Developer & UI/UX Designer",
	// 	company_name: "A.V.M Auto",
	// 	icon: "/company/avm.webp",
	// 	iconBg: "#383E56",
	// 	date: "2020 -  2023",
	// 	points: [
	// 		"Self-Taught Expertise: Gained proficiency in WordPress and UI/UX design through independent learning.",
	// 		"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity.",
	// 		"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
	// 		"Positive Business Impact: Contributed to +54.25% sales and overall business growth through the improved website."
	// 	],
	// },
	// {
	// 	title: "Next.JS Developer",
	// 	company_name: "Sparkbright Engineering",
	// 	icon: "/company/sparkbright.webp",
	// 	iconBg: "#E6DEDD",
	// 	date: "2023 - 2024",
	// 	points: [
	// 		"Self-Taught Expertise: Gained proficiency in React.JS and Next.JS through independent learning.",
	// 		"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
	// 		"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity."
	// 	],
	// },
	{
		title: "",
		company_name: "",
		icon: "",
		iconBg: "#",
		date: "",
		points: [
			"",
		],
	},
];

const testimonials = [
	
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Jyotish kumar",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/imjyotishkumar/",
	},
	
	
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Jyotish kumar",
		image: "/tech/github.webp",
		link: "https://github.com/imjyotishkumar",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	
	{
		name: "Portfolio",
		description:
			" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/portfolio.png",
		source_code_link: "https://github.com/imjyotishkumar/",
		platform: "Web",
		deploy_link: "https://imjyotishkumar.xyz/",
	},
	{
		name: "Game",
		description:
			"A responsive Full stack Game (color prediction, roultee, wheel game) showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful full stack website made using Next js and Tailwind CSS.",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/game.png",
		source_code_link: "https://github.com/imjyotishkumar/cgame",
		platform: "Vercel",
		deploy_link: "https://game.imjyotishkumar.xyz/",
	},
        {
		name: "Ecommerce",
		description:
			"A responsive Full stack E-commerce website showcasing different features such as various payment gateways integration,  advanced security, etc. It has a beautiful full stack website made using Next js and Tailwind CSS.",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/Ecommerce.png",
		source_code_link: "https://github.com/imjyotishkumar/metaman-frontend",
		platform: "Vercel",
		deploy_link: "https://metaman-frontend-iota.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
