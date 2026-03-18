import terrariaCover from "../assets/projects/terraria/terraria-mod-cover.png";
import terrariaEnemyVideo from "../assets/projects/terraria/terraria-enemy.mp4";
import terrariaBossWebp from "../assets/projects/terraria/terraria-boss.webp";
import arduinoCover from "../assets/projects/arduino/arduino-cover.jpg";
import mouseOnlyCover from "../assets/projects/gungeon/mouse-only-mod-cover.png";
import hyperdeathCover from "../assets/projects/hyperdeath/hyperdeath-cover.png";
import hyperdeathTrailer from "../assets/projects/hyperdeath/hyperdeath-trailer.mp4";
import gamePageCover from "../assets/projects/igme235/game-page-cover.png";
import gamePageReference from "../assets/projects/igme235/game-page-reference.jpg";
import shmupCover from "../assets/projects/igme202/shmup-cover.png";
import boidsCover from "../assets/projects/igme202/boids-cover.png";
import bloodOfChristCover from "../assets/projects/bloodOfChrist/bloodOfChrist-cover.png";
import bloodOfChristPlaythrough from "../assets/projects/bloodOfChrist/bloodOfChrist-playthrough.mp4";
import {
    externalLink,
    gamepadLink,
    githubLink,
    globeLink,
    imageMedia,
    referenceGroup,
    steamLink,
    videoMedia,
    wordpressLink,
    youtubeMedia,
} from "./projectBuilders";

const projects = [
    {
        slug: "terraria-mod",
        title: "The Good, The Bad, and The Intoxicated",
        period: "Aug 2025 - Dec 2025",
        course: "IGME-424 - Game Modification",
        summary:
            "A Terraria mod built in a 5-person team featuring custom enemies and bosses with state-machine-based AI.",
        role: "Enemy / Boss Programmer",
        collaboration: "team",
        stack: ["tModLoader", "C#", "Modding", "AI", "State Machines", "Animation"],
        image: terrariaCover,
        extraMedia: [
            youtubeMedia("Playthrough", "https://www.youtube.com/embed/Mq-BWM2v3_4?si=ZrMGJTmKw4iL6LWd"),
            videoMedia("Enemy Showcase", terrariaEnemyVideo),
            imageMedia("Spider Boss", terrariaBossWebp),
        ],
        featured: true,
        sections: {
            overview:
                `This Terraria mod was made by a 5-person team using tModLoader.  
                I worked on enemies and a boss, including AI, attack patterns, and spawn behavior.
                I made four custom enemies, one boss, and an item and furniture system that summons the boss.`,
            contributions: [
                "Implemented four custom enemies and one boss using C# with tModLoader, including AI logic, attack patterns, and animation control.",
                "Built state-based AI systems to control enemy behavior, targeting, movement, and projectile attacks.",
                "Created a custom physics system for a spider boss that hangs from the ceiling and swings using a pendulum-like motion, reacting to player attacks.",
                "Created a custom spawn system using an item and furniture interaction to trigger the boss fight.",
                "Modified enemy spawn behavior for a subworld by overriding default spawn rules."
            ],
            challenges: [
                "Designing boss AI that felt natural, especially for a spider boss that required custom pendulum-like physics without breaking other behaviors.",
                "Balancing enemy and boss difficulty so fights were challenging but still fair.",
                "Working within tModLoader limitations where many systems had to be overridden instead of changed directly.",
                "Debugging AI behavior, spawn logic, and custom physics inside an existing game without access to the original source code."
            ],
            outcome:
                `This project helped me understand game AI, modding tools, and how to work in an existing codebase.  
                I also got more practice with state-based behavior, custom physics, animation control, and teamwork using version control.`
        },
        links: [
            githubLink("https://github.com/kaigidwani/TheGoodTheBadAndTheIntoxicated"),
            steamLink("https://steamcommunity.com/sharedfiles/filedetails/?id=3624097144"),
            globeLink("https://www.nexusmods.com/terraria/mods/129", "NexusMods"),
        ]
    },
    {
        slug: "arduino-interactive-projects",
        title: "Arduino Interactive Projects",
        period: "Aug 2025 - Dec 2025",
        course: "IGME-470 - Physical Computing and Alternative Interfaces",
        summary:
            "A collection of Arduino-based physical computing projects focused on sensors, alternative interfaces, and interactive prototyping.",
        role: "Physical Computing Programmer",
        collaboration: "solo",
        stack: ["Arduino", "Unity", "C++", "C#", "Physical Computing", "Serial Communication", "Prototyping"],
        image: arduinoCover,
        featured: false,
        sections: {
            overview:
                `This work brings together four Arduino projects from a physical computing class.
                I used sensors, LEDs, LCD output, sound, and serial communication across the projects.
                They focused on hardware input, alternative controls, and connecting Arduino with Unity.`,
            contributions: [
                "Built multiple Arduino prototypes using sensors such as DHT11, MPU6050, and force sensitive resistors.",
                "Designed and assembled circuits on a breadboard with components including LEDs, an LCD, a piezo, and sensor modules.",
                "Wrote Arduino IDE code to read sensor data and control outputs such as text display, LED feedback, and sound.",
                "Connected Arduino projects to Unity through serial communication for interactive gameplay and audio-reactive visuals.",
                "Tested hardware behavior, adjusted thresholds and logic, and debugged issues during both circuit setup and programming."
            ],
            challenges: [
                "Balancing sensor input and output behavior so each prototype felt clear and responsive in use.",
                "Debugging hardware problems such as LCD contrast issues, unstable IMU behavior, and physical cable limitations.",
                "Working around technical limits when some original ideas were too difficult or unreliable to finish within the project scope.",
                "Integrating Arduino data with Unity in a stable way while keeping the projects simple enough to complete on time."
            ],
            outcome:
                `These projects made me more comfortable with Arduino, circuits, and sensor-based interaction design.
                I got more practice reading hardware input, controlling physical output, and debugging both code and wiring.
                They also helped me connect physical systems with interactive Unity projects.`
        },
        links: [
            wordpressLink("https://hp5817igme470.wordpress.com/"),
        ]
    },
    {
        slug: "mouse-only-mod",
        title: "Mouse Only Mod",
        period: "Jan 2025 - May 2025",
        course: "IGME-560 - AI for Game Environments",
        summary:
            "A Enter the Gungeon mod that enables mouse-only play by overriding default input and automating navigation and dodging.",
        role: "Gameplay / Systems Programmer",
        collaboration: "solo",
        stack: ["ETGMod", "C#", "Modding", "AI", "Input Systems"],
        image: mouseOnlyCover,
        featured: true,
        extraMedia: [
            youtubeMedia("Demo Video", "https://www.youtube.com/embed/RGl7DA1Xy1c?si=D3PophNjSQnsGIkM"),
        ],
        sections: {
            overview:
                `This mod makes Enter the Gungeon playable with only the mouse.
                Outside combat, the player moves toward the cursor. During combat, the mod controls movement and dodging by checking nearby threats.
                I built it in C# with ETGMod, with a focus on input systems, gameplay systems, and rule-based AI.`,
            contributions: [
                "Implemented a mouse-only control system in C# by overriding the default player input used by Enter the Gungeon through ETGMod.",
                "Created dual-mode movement logic that switches between cursor-based movement outside combat and automated movement during combat.",
                "Built rule-based AI that checks enemy positions, bullets, and player state to control movement and dodging without keyboard input.",
                "Modified player movement and animation behavior to work with custom input while keeping the original game systems working.",
                "Tested and debugged the mod inside the live game environment, which required careful integration with existing gameplay code."
            ],
            challenges: [
                "Making automated movement feel natural instead of random, especially during fast combat situations.",
                "Preventing custom input logic from breaking existing game features such as shooting, animations, and collision.",
                "Working inside a modding framework where many systems could not be changed directly and had to be overridden.",
                "Balancing automation and responsiveness so the player still felt controllable even when movement was handled by the mod."
            ],
            outcome:
                `This project helped me improve my gameplay programming, input systems, and AI logic.
                I also got more practice reverse-engineering and debugging behavior inside an existing game.
                It made me more confident changing systems in C# without breaking the original game.`
        },
        links: [
            githubLink("https://github.com/MaeNaut/EtG-MouseOnlyMod"),
        ]
    },
    {
        slug: "hyperdeath-robotika",
        title: "Hyperdeath Robotika",
        period: "Jan 2024 - May 2024",
        course: "IGME-320 - Game Design & Development II",
        summary:
            "A Unity top-down shooter built in a 5-person team with gameplay systems, camera movement, and UI/HUD implementation.",
        role: "UI/UX Designer & Programmer",
        collaboration: "team",
        stack: ["Unity", "C#", "Gameplay Systems", "UI / HUD", "Camera System"],
        image: hyperdeathCover,
        extraMedia: [
            videoMedia("Trailer", hyperdeathTrailer),
        ],
        featured: true,
        sections: {
            overview:
                `Hyperdeath Robotika is a dieselpunk top-down co-op shooter made in Unity by a 5-person team.
                Players can switch between four different characters during gameplay, so the camera and HUD needed to stay clear.
                I worked on gameplay systems, camera behavior, and UI/HUD implementation.`,
            contributions: [
                "Implemented UI and HUD systems including health bars, character indicators, and menu screens using C# in Unity.",
                "Developed camera follow and control logic for top-down gameplay.",
                "Worked on player movement, character switching system, and core gameplay scripts.",
                "Assisted with debugging and general programming during team development."
            ],
            challenges: [
                "Making sure the UI and camera stayed clear while switching between multiple characters during combat.",
                "Ensuring the active character was always visible and easy to indentify during fast-paced action.",
                "Working with the version control without making critical merge conflicts in Unity scenes and prefabs.",
            ],
            outcome:
                `This project improved my Unity and C# skills, especially in UI, HUD, and camera work.
                It also taught me how gameplay systems, visual clarity, and player feedback need to work together during combat.
                Working with a team helped me get better at sharing responsibilities and organizing code.`
        },
        links: [
            githubLink("https://github.com/Auden-Clifford/Hyperdeath-Robotika"),
        ]
    },
    {
        slug: "web-development-projects",
        title: "Web Development Projects",
        period: "Aug 2023 - Dec 2023",
        course: "IGME-235 - Intro to Game Web Tech",
        summary:
            "A collection of web development projects built with HTML, CSS, and JavaScript, including API integration and a small game using PixiJS.",
        role: "Frontend Developer",
        collaboration: "solo",
        stack: ["HTML", "CSS", "JavaScript", "PixiJS", "API", "Frontend Development"],
        image: gamePageCover,
        featured: false,
        sections: {
            overview:
                `This work combines three web development projects built with HTML, CSS, and JavaScript.
                The projects include a custom game information page, a Giphy search tool, and a small browser game made with PixiJS.
                They helped me learn frontend basics, API use, and interactive programming.`,
            contributions: [
                "Built a custom game information webpage using HTML and CSS, referencing a provided concept image and additional visual references for layout and structure.",
                "Implemented a GIF search tool using the Giphy API with search filters, pagination, and clipboard copy feature.",
                "Developed a browser-based math game using PixiJS with score system, timer, and game over logic.",
                "Wrote JavaScript for user input handling, API requests, and dynamic UI updates.",
            ],
            challenges: [
                "Handling API requests and updating the page dynamically based on user input.",
                "Managing multiple UI elements while keeping the layout clear.",
                "Debugging JavaScript logic when game or search behavior did not work correctly.",
                "Learning new libraries such as PixiJS while building a working game."
            ],
            outcome:
                `These projects gave me a strong base in frontend development with HTML, CSS, and JavaScript.
                I also got experience with APIs, user input, and interactive page behavior.
                They helped me learn how to organize code for small web apps and browser games.`
        },
        links: [
            externalLink("https://people.rit.edu/hp5817/235/project1/", "Project 1"),
            externalLink("https://people.rit.edu/hp5817/235/project2/", "Project 2"),
            externalLink("https://people.rit.edu/hp5817/235/project3/", "Project 3"),
        ],
        references: [
            referenceGroup("Project 1", [
                externalLink(gamePageReference, "Design Reference"),
            ]),
        ]
    },
    {
        slug: "gameplay-simulation-projects",
        title: "Gameplay & Simulation Projects",
        period: "Aug 2023 - Dec 2023",
        course: "IGME-202 - Interactive Media Development",
        summary:
            "A collection of Unity projects focused on gameplay programming, steering behaviors, and simulation systems.",
        role: "Gameplay / Simulation Programmer",
        collaboration: "solo",
        stack: ["Unity", "C#", "Gameplay Programming", "AI", "State Machines", "Simulation"],
        image: [shmupCover, boidsCover],
        featured: false,
        sections: {
            overview:
                `This group of class projects focuses on gameplay programming and simulation systems in Unity.
                One project is a top-down shooter with player controls, enemies, scoring, and game-over logic.
                The other is a boids-style simulation that uses steering behaviors and state changes.
                Together, they gave me practice building gameplay systems in C#.`,
            contributions: [
                "Implemented player movement, shooting, enemy spawning, and score system in a Unity shooter project.",
                "Built game over logic, UI display, and collision-based health system.",
                "Developed steering behavior simulation using seek, flee, wander, and separation logic.",
                "Created state-based agent behavior for different bird types.",
                "Wrote gameplay scripts in C# and tested behavior in real time."
            ],
            challenges: [
                "Handling multiple gameplay systems working together such as movement, collision, and spawning.",
                "Debugging behavior logic when agents did not move as expected.",
                "Tuning steering parameters to make the simulation feel natural.",
                "Managing state transitions without breaking existing behavior."
            ],
            outcome:
                `These projects helped me improve my gameplay programming in Unity, especially movement, collision, and state-based behavior.
                I also got experience building both action systems and agent simulations in C#.
                They made me more comfortable debugging complex behavior across multiple scripts.`
        },
        links: [
            gamepadLink("https://igme-202-2231.github.io/project-1-MaeNaut/", "Live Demo 1"),
            gamepadLink("https://igme-202-2231.github.io/project-2-MaeNaut/", "Live Demo 2"),
        ],
        references: [
            referenceGroup("Project 1", [
                externalLink("https://www.nicepng.com/ourpic/u2q8a9y3a9r5i1r5_vector-spaces-ship-8-bit-spaceship-sprite/#google_vignette", "Player Ship"),
                externalLink("https://opengameart.org/content/spaceship-set-4-pixel-art-space-ships", "Enemy Ships"),
                externalLink("https://www.seekpng.com/ipng/u2w7e6t4e6q8e6t4_pixel-asteroid-png-jpg-pixel-art-deadpool-logo/", "Asteroid"),
                externalLink("https://www.clipartkey.com/view/ihxwRbJ_pixel-missile-sprite/", "Missile"),
                externalLink("https://handsomeunicorn.itch.io/fireball-sprite", "Fireball"),
                externalLink("https://opengameart.org/content/heart-pixel-art", "Life Icon"),
                externalLink("https://pixabay.com/illustrations/seamless-tile-background-abstract-1315326/", "Background"),
                externalLink("https://www.1001fonts.com/joystix-font.html", "Font"),
            ]),
            referenceGroup("Project 2", [
                externalLink("https://www.birdguides.com/species-guide/ioc/gypaetus-barbatus", "Bird Reference"),
                externalLink("https://www.freeimages.com/photo/clear-sky-1363026", "Sky Image"),
                externalLink("https://pngimg.com/image/106463", "Airplane Image"),
            ]),
        ]
    },
    {
        slug: "blood-of-christ",
        title: "Blood of Christ",
        period: "Jan 2023 - May 2023",
        course: "IGME-106 - Game Dev & Algo Prob Solve II",
        summary:
            "A 2D stealth platformer built in C# using MonoGame as part of a 4-person team, featuring physics, level loading, and file-based map data.",
        role: "Gameplay / Systems Programmer",
        collaboration: "team",
        stack: ["MonoGame", "C#", "Gameplay Programming", "Physics", "Level Systems", "File I/O"],
        image: bloodOfChristCover,
        extraMedia: [
            videoMedia("Playthrough", bloodOfChristPlaythrough),
        ],
        featured: false,
        sections: {
            overview:
                `Blood of Christ is a 2D stealth platformer made in MonoGame by a 4-person team.
                The player controls a vampire moving through a church while avoiding enemies and light.
                I worked on core systems such as physics, collision, level loading, and data-driven map generation.`,
            contributions: [
                "Implemented 2D physics and collision handling for player, enemies, and level objects.",
                "Built file I/O system for loading level data and generating maps from external files.",
                "Created tiling and level systems to support multiple stages.",
                "Worked on tutorial elements and gameplay logic."
            ],
            challenges: [
                "Managing collision and physics logic across multiple game objects.",
                "Debugging level loading when file data did not match expected format.",
                "Working in a team codebase while avoiding merge conflicts.",
                "Building gameplay systems in MonoGame without engine-level tools."
            ],
            outcome:
                `This was my first full team game project, so it taught me a lot about how larger systems work together.
                I got experience with shared code, physics, file-based level systems, and gameplay architecture in C#.
                It also showed me how important early planning is when a project starts to grow.`
        },
        links: [
            githubLink("https://github.com/yaboiedchoi/Blood-of-Christ"),
        ],
        references: [
            referenceGroup("", [
                externalLink("https://blackspirestudio.itch.io/medieval-pixel-art-asset-free", "Tile Asset Source"),
            ]),
        ]
    }
];

export default projects;
