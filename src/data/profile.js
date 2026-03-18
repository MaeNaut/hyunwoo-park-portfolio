import profilePhoto from "../assets/profile/profile-photo.jpg";

const profile = {
    name: "Hyunwoo Park",
    title: "Game / Web / Software Developer",
    bio: "Game Design & Development student at RIT with experience in gameplay programming, UI systems, modding, and frontend development. Interested in game, web, and software roles.",
    email: "qkrgus7799@gmail.com",
    phone: "(929) 988-2653",
    linkedin: "https://linkedin.com/in/hyunwoo-park-rit/",
    github: "https://github.com/MaeNaut",
    heroImage: profilePhoto,
    about: [
        "I am a Game Design and Development student at RIT. I like building interactive projects with a focus on gameplay, UI, input, and player experience.",
        "My main background is in C#, Unity, and gameplay programming. I have worked on game mods, combat systems, physics, HUDs, and AI in both team and solo projects.",
        "I also have experience with web development using JavaScript, HTML, CSS, React, and APIs. This has helped me work on both game projects and user-facing web projects.",
        "In all of my work, I try to make things clear, responsive, and well organized, whether I am building a game system, a physical computing project, or a small web app."
    ],
    education: [
        {
            school: "Rochester Institute of Technology (RIT)",
            location: "Rochester, NY",
            period: "Expected May 2026",
            program: "Bachelor of Science in Game Design and Development",
            gpa: "3.70",
            highlights: [
                "Dean's List: Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024, Fall 2025"
            ]
        },
        {
            school: "Queensborough Community College (QCC)",
            location: "Bayside, NY",
            period: "Aug 2021 - May 2022",
            program: "Computer Science Coursework",
            gpa: "3.95",
            highlights: [
                "Dean's List: Fall 2021, Spring 2022"
            ]
        }
    ],
    skills: [
        {
            category: "Languages",
            items: ["C#", "C++", "JavaScript", "HTML", "CSS"]
        },
        {
            category: "Engines & Tools",
            items: ["Unity", "MonoGame", "tModLoader", "ETGMod", "React", "PixiJS", "Git", "GitHub"]
        },
        {
            category: "Gameplay & Systems",
            items: ["Gameplay Programming", "Input Systems", "AI", "State Machines", "Physics", "UI / HUD", "Simulation", "File I/O"]
        },
        {
            category: "Technical Skills",
            items: ["Frontend Development", "API Integration", "Physical Computing", "Serial Communication", "Modding"]
        }
    ]
};

export default profile;
