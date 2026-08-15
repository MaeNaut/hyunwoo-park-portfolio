import pokepilotBuilder from "../assets/projects/pokepilot/pokepilot-builder.png";
import pokepilotCalculator from "../assets/projects/pokepilot/pokepilot-calculator.png";
import pokepilotMobile from "../assets/projects/pokepilot/pokepilot-mobile.png";
import pokepilotMark from "../assets/projects/pokepilot/pokepilot-mark.svg";
import { githubLink, globeLink } from "./projectBuilders";

const pokepilotProject = {
    slug: "pokepilot",
    title: "PokePilot",
    period: "Jul 2026 - Present",
    course: "Independent Product Project",
    summary:
        "An AI-assisted competitive team builder and damage calculator that unifies legality, usage data, matchup diagnostics, and strategy guidance.",
    role: "Product Designer & Full-Stack Developer",
    collaboration: "solo",
    stack: [
        "React",
        "TypeScript",
        "Vite",
        "Pokémon Showdown",
        "Smogon Calc",
        "OpenAI API",
        "Upstash Redis",
        "Vitest",
        "Vercel",
    ],
    image: pokepilotBuilder,
    imageFit: "contain",
    featured: true,
    detailVariant: "case-study",
    sections: {
        overview:
            "PokePilot brings competitive team building, legality validation, damage calculation, matchup diagnostics, and AI-assisted strategy review into one continuous workspace.",
        contributions: [
            "Designed and implemented the complete responsive product experience across desktop, tablet, and mobile.",
            "Built a Showdown-first data model for Pokemon, forms, items, abilities, moves, and Regulation M-B legality.",
            "Integrated a shared damage engine and kept the same editable team state available in both the builder and calculator.",
            "Developed structured GPT-5.6 analysis with deterministic evidence checks, prompt caching, history, cooldown controls, and offline fallback.",
            "Added English and Korean localization, accessible keyboard controls, touch interactions, dark mode, and automated regression coverage.",
        ],
        challenges: [
            "Reconciling form, Mega Evolution, legality, localization, usage, and asset identifiers across multiple upstream data sources.",
            "Keeping dense competitive information readable without fragmenting the workflow into separate tools or pages.",
            "Making AI analysis useful without allowing model output to override deterministic legality, stat, or damage facts.",
            "Controlling hosted-model cost and abuse risk while preserving a responsive public-beta experience.",
        ],
        outcome:
            "The deployed public beta now keeps team building, damage calculation, and strategy analysis in one shared workspace across desktop, tablet, and mobile.",
    },
    links: [
        globeLink("https://pokepilot-ai.vercel.app", "Live App"),
        githubLink("https://github.com/MaeNaut/pokepilot"),
    ],
    caseStudy: {
        mark: pokepilotMark,
        title: "Building PokePilot",
        subtitle:
            "This project started as a small tool for myself. It became a much bigger lesson in data, interaction design, and what AI should actually do in a product.",
        hero: {
            image: pokepilotBuilder,
            alt: "PokePilot team builder showing a configured competitive team and AI analysis",
            width: 1920,
            height: 889,
            priority: true,
        },
        opening: [
            "PokePilot started from a very simple problem. I like building Pokémon teams, but I was always moving between too many websites. I used one site to build a team, Pokémon Showdown to check legality, another site for usage data, and a damage calculator for EV adjustments.",
            "None of these tools were bad. I actually used them a lot. I just wanted them to work together. So I thought, ‘Why not make my own?’",
            "At first, I expected this to be a small team builder. Pick a Pokémon, choose four moves, set EVs, and save the team. That sounded manageable. It was not.",
        ],
        chapters: [
            {
                id: "forms",
                navLabel: "Forms",
                title: "Pokémon forms were my first enemy",
                paragraphs: [
                    "The first version used PokeAPI for most of its data. It worked well enough until I started testing actual teams.",
                    "Then I found Rotom forms, regional forms, gender differences, Mega Evolutions, battle-only forms, and Pokémon with names that did not match between PokeAPI and Showdown. Pyroar disappeared from search for no clear reason. Female Pokémon sometimes returned as male after Mega Evolution. Galarian Slowbro had a Mega button even though it should not. Floette-Eternal lost Light of Ruin after Mega Evolution.",
                    "I fixed many of these bugs more than once. This was when I learned that showing Pokémon data and building a legal competitive Pokémon were very different problems.",
                    "Eventually, I moved the core Pokémon, move, item, and legality data toward Pokémon Showdown. It was a large change, but it made much more sense. Showdown already understands competitive formats, so PokePilot should speak the same language.",
                ],
                engineeringNote: {
                    title: "Where each data source stops",
                    entries: [
                        {
                            label: "Battle identity",
                            text: "Showdown IDs are stored for Pokémon, forms, moves, items, and abilities, so legality and exports use the same vocabulary.",
                        },
                        {
                            label: "Display data",
                            text: "PokeAPI adds Korean names, descriptions, and artwork through adapters without changing the saved competitive identity.",
                        },
                        {
                            label: "Shared contract",
                            text: "Builder state, local storage, Showdown text, usage data, and AI requests all refer to that same canonical ID.",
                        },
                    ],
                },
            },
            {
                id: "annoyances",
                navLabel: "Small annoyances",
                title: "Most features came from being annoyed",
                paragraphs: [
                    "Many PokePilot features did not come from a feature checklist. They came from moments when I was using the app and thought, ‘This is annoying.’",
                    "The bench is probably my favorite example. When I test a team, I often remove a Pokémon and later realize that I need it again. Other team builders made me rebuild the old set or keep it somewhere else. I wanted a seventh tab where removed sets could wait without being part of the active team. That became the bench.",
                    "Drag and drop came from the same kind of problem. I wanted to reorder moves and Pokémon without opening more menus. On desktop, dragging felt natural. On mobile, holding and moving felt natural. Making both interactions work without fighting text selection was much harder than expected, but the final result was worth it.",
                    "Even small things followed this pattern. Showdown text should select itself when it opens. The last team should return after refreshing. Empty slots should open search immediately. Mobile selectors should not pretend that hover exists.",
                    "None of these features sound very exciting by themselves. Together, they make the app much easier to live with.",
                ],
                figure: {
                    image: pokepilotMobile,
                    alt: "PokePilot mobile team builder interface",
                    portrait: true,
                    width: 375,
                    height: 812,
                    afterParagraph: 4,
                    caption: "I stopped trying to squeeze the desktop UI into a phone and rebuilt the selection flow around touch.",
                },
            },
            {
                id: "calculator",
                navLabel: "Calculator",
                title: "The calculator became part of the team builder",
                paragraphs: [
                    "I originally imagined the damage calculator as a separate page. That idea did not last long.",
                    "When adjusting a set, I do not want to rebuild my Pokémon inside another tool. I want to use the same team, change an EV, check the damage, and continue building.",
                    "So the calculator became another view of the same workspace. My saved Pokémon stays editable. I can compare all four attacks, change battle conditions, switch the attacker and defender, and adjust current HP.",
                    "This created a lot of UI problems, especially on tablets and phones. Desktop had enough room for two Pokémon and the damage results. Mobile definitely did not. The final mobile calculator uses separate swipeable panels. It is not just a smaller desktop layout. This part taught me that responsive design is not only about making boxes narrower.",
                ],
                engineeringNote: {
                    title: "Persistent team, temporary opponent",
                    entries: [
                        {
                            label: "Saved",
                            text: "My team, bench, forms, items, moves, natures, and EVs remain the source of truth in both workspaces.",
                        },
                        {
                            label: "Session only",
                            text: "The opponent, current HP, status, weather, field, and other battle conditions stay inside the calculator session.",
                        },
                        {
                            label: "Shared controls",
                            text: "Both views reuse the same selectors and editing behavior, including legality, keyboard navigation, and touch input.",
                        },
                    ],
                },
                figure: {
                    image: pokepilotCalculator,
                    alt: "PokePilot damage calculator with editable Pokémon and strategy analysis",
                    width: 1920,
                    height: 889,
                    afterParagraph: 3,
                    caption: "The calculator keeps all four damage results visible while the saved set remains editable.",
                },
            },
            {
                id: "ai",
                navLabel: "The AI part",
                title: "Making the AI actually useful",
                paragraphs: [
                    "For a long time, the PokePilot panel was only rule-based. It could count weaknesses and identify roles, but it mostly repeated information already visible on the page. Honestly, it felt like decoration. That was a problem because the whole app was named PokePilot.",
                    "I wanted it to understand why a team works. My Scrafty Trick Room team became one of the main tests. Scrafty uses Coaching, Mawile is the primary Mega attacker, and Tyranitar is an alternate Mega for matchups where Mawile struggles. Basculegion can also finish games after Trick Room ends.",
                    "Early AI results misunderstood this often. It treated two Mega Stones as a mistake or assumed the faster Pokémon meant the team should sometimes avoid Trick Room.",
                    "Another difficult test was my Round team. Zoroark disguises itself as Farigiraf, then chains Round with Primarina or Drampa to focus down one target before the real Farigiraf changes the game into Trick Room. The AI could see every Pokémon and move. Seeing the actual plan was much harder.",
                    "For a while, I gave it very specific hints. The answers improved, but I did not like the solution. It was becoming good at analyzing my team instead of becoming good at analyzing teams.",
                    "I removed those team-specific hints even though the next answers looked less impressive. Then I built fixtures and repeated the same evaluations after each prompt change. I wanted an improvement that survived a different team, not one perfect screenshot.",
                    "The result is still not perfect. But now PokePilot sometimes notices ideas that are not written anywhere directly. That was the first time the AI felt useful instead of decorative.",
                ],
                engineeringNote: {
                    title: "What the model can and cannot decide",
                    entries: [
                        {
                            label: "Code owns",
                            text: "Legality, move ownership, stats, damage, and the exact contents of each set come from deterministic data and calculations.",
                        },
                        {
                            label: "The model owns",
                            text: "GPT-5.6 connects those facts into strategy, tradeoffs, matchup plans, and recommendations.",
                        },
                        {
                            label: "Before display",
                            text: "Schema and evidence checks reject unsupported output; prompt caching, Upstash cooldowns, and a rules-based fallback handle cost or availability problems.",
                        },
                    ],
                },
            },
            {
                id: "now",
                navLabel: "Where it is now",
                title: "Where the project is now",
                paragraphs: [
                    "PokePilot is much larger than the small team builder I first imagined. It now has team and bench management, Showdown import and export, legality checking, usage-based defaults, a damage calculator, responsive touch controls, image export, localization, dark mode, and AI analysis.",
                    "There are still many things I want to build. Set and EV recommendations are probably the most interesting ones. I also want PokePilot to help users prepare for specific matchup threats instead of only describing the current team.",
                    "But I am happy that the project grew this way. I did not begin with a perfect product plan. I built something, used it, found something annoying, and improved it.",
                    "Sometimes I spent far too long fixing a tiny interaction. Sometimes a feature worked on the first try and surprised me. Sometimes an old bug returned after a large data migration. That process made PokePilot feel personal.",
                ],
            },
        ],
    },
};

export default pokepilotProject;
