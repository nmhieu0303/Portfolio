// import emoji from "react-easy-emoji";

// import googlelogo from "./assets/img/icons/common/google.svg";
// import github from "./assets/img/icons/common/github.svg";
// import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
	name: "Nguyen Minh Hieu",
	title: "Hi all, I'm Nguyen Minh Hieu",
	description:
		"A passionate Front-End Web Developer having an experience of building Web applications with JavaScript / Reactjs and some other  UI libraries.",
	linkCv: "https://drive.google.com/file/d/1TJoTZOhxd2INm7nCZJLr1LnqkJu_eiP7/view?usp=sharing",
};

export const contact = {
	title:"Reach out to me!",
	subTitle:"I'm Front-End Web Developer",
	phone:"0845606616",
	mail: "nmhieu03032000@gmail.com"
};

export const socialData = [
	{
		text: "Facebook",
		link: "https://www.facebook.com/nmhieu0303",
		icon: <i class="fab fa-facebook-square"></i>,
		color: '#3b5999'

	},
	{
		text: "Instagram",
		link: "https://www.instagram.com/nm_hieu.0303",
		icon: <i class="fab fa-instagram"></i>,
		color: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
	},
	{
		text: "Github",
		link: "https://github.com/nmhieu0303",
		icon: <i class="fab fa-github"></i>,
		color: '#000'
	},
	{
		text: "LinkedIn",
		link: "https://www.linkedin.com/in/minh-hi%E1%BA%BFu-nguy%E1%BB%85n-38a97a206",
		icon: <i class="fab fa-linkedin-in"></i>,
		color: '#0a66c2'
	},
];


export const skillsSection = {
	title: "What I do",
	subTitle:
		"I have basic knowledge and used a few techs, libraries, tools,...",
	subTitleSoftSkills: "And a few soft skills as: fast learning, teamwork",
	softwareSkills: [
		{
			skillName: "HTML",
			icon: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS",
			icon: "vscode-icons:file-type-css",
		},
		{
			skillName: "SASS",
			icon: "logos:sass",
		},
		{
			skillName: "JavaScript",
			icon: "logos:javascript",
		},
		{
			skillName: "C#",
			icon: "logos:c-sharp",
		},
		{
			skillName: "MySQL",
			icon: "vscode-icons:file-type-mysql",
		},
		{
			skillName: "ReactJS",
			icon: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "Ant Design",
			icon: "logos:ant-design"
		},
		{
			skillName: "MDBootstrap",
			icon: "fa-brands:mdb"
		},
		{
			skillName: "Bootstrap",
			icon: "logos:bootstrap"
		},
		{
			skillName: "Git",
			icon: "logos:git-icon",
		},
		{
			skillName: "Gitlab",
			icon: "logos:gitlab",
		},



	],
};


export const educationInfo = [
	{
		schoolName: "University of Science",
		major: "Infomation Technology",
		duration: "Aug 2018 - Sep 2021",
		gpa:7.5,
		desc: "I have spent three years improving my skills in coding.",
	},
];

export const experience = [
	{
		role: "Front-End Developer",
		company: "CCT",
		img: "CCT",
		color: "#ff9800",
		date: "Jun 2021 – Jul 2021",
		desc: ["Convert from design to Reactjs"]
	},
	{
		role: "Front-End Developer Intern",
		company: "PKH",
		img: "pkh",
		color: "#0084ff",
		date: "Mar 2021 - Jun 2021",
		desc: [
			"Winform C#: developing application features, maintain, improve code performance and integrate with API",
			"Reactjs: convert from design to Reactjs"
		]
	},
];

export const projects = [
	{
		name: "GunoStore",
		desc: " This is a website that sells shoes, it helps people to shop online",
		technologies:[ "PHP", "JS", "MySQL" ],
		github: "https://github.com/nmhieu0303/GunoStore",
	},
	{
		name: "Cinejun",
		desc: " This is a movie ticket booking website, helping users to book tickets and admins to manage cinemas",
		technologies:[ "Reactjs", "Nodejs", "PostgreSQL"],
		github: "https://github.com/nguyenduchoa0130/cinema-manager",
		demo:"https://cinemajun.herokuapp.com/"
	},
	{
		name: "To do list",
		desc: "To do list is a mini project during my learning redux and saga",
		technologies:[ "Reactjs", "Redux"],
		github: "https://github.com/nmhieu0303/ToDoListReactJS",
		demo:"http://todolist-redux-learning.surge.sh/"
	},{
		name: "Task manager",
		desc: "This is a mini project I created while learning Redux-Saga. It allows us to  manage projects and tasks just like Jira.",
		technologies:[ "Reactjs", "Redux-Saga"],
		github: "https://github.com/nmhieu0303/Jira-Clone.git",
		demo:"http://jira-clone-2021.surge.sh/"
	},

	
];
