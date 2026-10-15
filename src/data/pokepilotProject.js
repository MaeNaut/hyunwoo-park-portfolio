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
        "A competitive team-building app with a shared damage calculator, account sync, and AI strategy review, built from daily use into a deployed full-stack product.",
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
        "Cloudflare Workers",
        "Cloudflare D1",
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
            "Built a Showdown-first data model for Pokemon, forms, items, abilities, moves, and Regulation M-C legality, with daily Champions usage statistics.",
            "Integrated a shared damage engine and kept the same editable team state available in both the builder and calculator.",
            "Added Google sign-in, encrypted personal API keys, and account-scoped team, history, and preference sync on Cloudflare D1.",
            "Developed structured AI analysis with deterministic evidence, repeated quality evaluations, and preflight time, token, and cost estimates.",
            "Added English and Korean localization, accessible keyboard controls, touch interactions, dark mode, and automated regression coverage.",
        ],
        challenges: [
            "Reconciling form, Mega Evolution, legality, localization, usage, and asset identifiers across multiple upstream data sources.",
            "Keeping dense competitive information readable without fragmenting the workflow into separate tools or pages.",
            "Making AI analysis useful without allowing model output to override deterministic legality, stat, or damage facts.",
            "Handling stale saves and account changes across tabs and devices without turning conflict resolution into the user's job.",
        ],
        outcome:
            "The deployed beta combines the builder and calculator with account-backed saves and personal-key AI analysis. Automated release checks and live onboarding QA support continued iteration; broad public adoption is still ahead.",
    },
    links: [
        globeLink("https://pokepilot.app", "Live App"),
        globeLink("https://pokepilot.app/help/kabamanda-en.html", "Analysis Examples"),
        githubLink("https://github.com/MaeNaut/pokepilot"),
    ],
    caseStudy: {
        mark: pokepilotMark,
        title: "Building PokePilot",
        subtitle:
            "I wanted my team builder and damage calculator to work together. Building that small convenience turned into a deployed product, with accounts, synchronized saves, and an AI system I had to learn how to evaluate.",
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
                navLabel: "Battle data",
                title: "Getting the right data at the right time",
                paragraphs: [
                    "The first version used PokeAPI for most of its data. It worked well enough until I started testing actual teams.",
                    "The same Pokémon could have different names and identifiers across sources. Gender-specific artwork needed one mapping, while Mega Evolution and legal moves needed another. A form could look correct and still load the wrong battle data.",
                    "Two bugs made the problem clear: gender-specific forms could lose their artwork, and switching out of Mega Evolution could lose the ability chosen before it. Fixing the visible symptom was not enough. The editor had to preserve the identity and choices behind it, with regression tests for the round trip.",
                    "Eventually, I moved the core Pokémon, move, item, and legality data toward Pokémon Showdown. It was a large change, but it made much more sense. Showdown already understands competitive formats, so PokePilot should speak the same language.",
                    "Getting the rules right did not solve another problem: the usage data could already be old. I originally used monthly Showdown statistics, published at the start of the next month. Champions regulation changes did not wait for that schedule. New Pokémon and items could arrive early or midway through a month, leaving the app without statistics for the new format for two or three weeks.",
                    "Regulation M-C made that gap concrete. It started on September 9, but waiting for the September monthly report meant waiting until October. That was a bad time for a team-building tool to be missing its most useful information: right when people were exploring the new format.",
                    "I replaced the monthly usage source with daily Champions battle statistics. Usage ranks and automatic samples can now refresh without waiting for the next monthly report. I kept the statistics adapter separate from the supported battle rules, retained source dates and seasons, and made stale data explicit during an outage. A more frequent feed helps only if I can still tell what it represents.",
                ],
            },
            {
                id: "annoyances",
                navLabel: "Small annoyances",
                title: "Most features came from being annoyed",
                paragraphs: [
                    "Many PokePilot features did not come from a feature checklist. They came from moments when I was using the app and thought, ‘This is annoying.’",
                    "The bench is probably my favorite example. When I test a team, I often remove a Pokémon and later realize that I need it again. Other team builders made me rebuild the old set or keep it somewhere else. I wanted a seventh tab where removed sets could wait without being part of the active team. That became the bench.",
                    "Drag and drop came from the same kind of problem. I wanted to reorder moves and Pokémon without opening more menus. On desktop, dragging felt natural. On mobile, holding and moving felt natural. Making both interactions work without fighting text selection was much harder than expected, but the final result was worth it.",
                    "Even small things followed this pattern. Showdown text should select itself when it opens. The last team should return after refreshing. Empty slots should open search immediately. On mobile, selectors became explicit dialogs, and analysis estimates opened on a click instead of relying on hover.",
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
                id: "accounts",
                navLabel: "Accounts & sync",
                title: "A saved team should still be there on my phone",
                paragraphs: [
                    "Local storage was enough when I used PokePilot in one browser. Once I wanted to continue on my phone, a save button meant something different. The app needed an account, and the saved team needed to belong to that account rather than whichever browser happened to hold it.",
                    "I added Google sign-in and moved account data to Cloudflare D1. Teams, analysis history, and preferences now synchronize across signed-in devices. But the difficult part was not the first successful save. It was deciding what should happen when two tabs had different ideas of the same team.",
                    "I did not want people to choose between a local version, a server version, and keeping both every time something changed. I moved team storage to individual records with revision checks. Saving team A no longer invalidates an unrelated team B. When a remote update is detected, the app explains what will happen before applying it. If the same team has changed in both places, the server copy wins after that notice; if another team is being edited, that work is saved first.",
                    "Accounts also gave personal API keys a clear owner. A key belongs to the signed-in account, not a shared browser setting. Handling a logout, a pending request, or a second account on the same device became just as important as the happy path.",
                ],
                engineeringNote: {
                    title: "Sessions and personal keys",
                    entries: [
                        {
                            label: "Authentication",
                            text: "Google OAuth runs through the Worker. Secure, HttpOnly session cookies and account-bound requests keep a stale tab from writing into a different signed-in account.",
                        },
                        {
                            label: "Personal keys",
                            text: "Keys are encrypted with AES-GCM in account-scoped D1 storage, decrypted for server-side calls, and never returned by the key-status endpoint or retained in browser storage.",
                        },
                    ],
                },
            },
            {
                id: "ai",
                navLabel: "The AI part",
                title: "Making the AI actually useful",
                paragraphs: [
                    "For a long time, the PokePilot panel was only rule-based. It could count weaknesses and identify roles, but it mostly repeated information already visible on the page. Honestly, it felt like decoration. That was a problem because the whole app was named PokePilot.",
                    "I wanted it to understand why a team works. Early results sometimes treated two possible Mega Evolutions as a mistake, even though a player might choose only one depending on the opponent. Other results listed the right moves but missed how they worked together. Recognizing the ingredients was not the same as understanding the plan.",
                    "Giving it hints about my own teams made the answers look better, but that was the wrong test. I removed the team-specific hints and expanded evaluation to published teams, Singles and Doubles, and less obvious strategies. A polished answer for one familiar team was not enough.",
                    "My first instinct was to add more instructions and repeat important facts. That did not reliably improve the answers. I compared compact inputs against repeated evidence and tested reasoning levels on the same input. The extra text cost more without a dependable quality gain, so I kept the compact representation. I started treating prompt changes like experiments: compare before and after, review the actual claims, and roll back changes that made them worse.",
                    "Then I found that my own validator could be wrong. One answer correctly described one teammate's Poison immunity and another teammate's Steel resistance. The checker mixed the two relationships and demanded that both Pokémon justify both types. It flagged a correct explanation as a failure. Adding validation had not removed the need to question the validation itself.",
                    "I narrowed those checks to the relevant claims and separated resistance from immunity. I replayed saved responses through the changed checker so I could distinguish fixing a false alarm from improving the model. The two are not interchangeable. A schema pass is not a strategy-quality score, and a warning is not automatically a factual error.",
                    "I also stopped disguising failed AI calls as a successful rules-based analysis. If a request fails, the user gets an explicit error. A usable response with internal grounding warnings is handled differently: it can remain visible while the warnings are recorded for review. The goal is to preserve useful output without pretending that the checker can prove every sentence correct.",
                ],
            },
            {
                id: "code-and-ai",
                navLabel: "Code + AI",
                title: "Not everything needed to be AI",
                paragraphs: [
                    "Moving away from rule-based answers did not mean throwing away ordinary code. The calculator already knew how to calculate stats and damage. Asking the model to work them out again would spend paid reasoning on something I could calculate and inspect directly.",
                    "I split the job. Catalogs and deterministic engines supply the set, legal options, and supported matchup evidence. For calculator-backed sample recommendations, code searches supported Stat Point and loadout changes and records their outcomes. The model gets those candidates and explains the tradeoffs in the context of the team, instead of being asked to invent a spread and justify it afterward. Applying a recommendation uses the structured candidate, not a build parsed from the explanation.",
                    "That gave me two useful things at once: reproducible numerical evidence under the entered assumptions, and less need to spend model tokens on arithmetic or an open-ended search. I also compact repeated evidence into shared records rather than sending the same details over and over. This is not a promise that every request is cheaper; it is a way to keep the paid input focused on facts and decisions the explanation needs.",
                    "The useful question for the model becomes something like, 'This candidate survives one more hit, but gives up this Speed benchmark. Is that a good trade for this team?' That is a different job from calculating the damage. Code can verify the supported numerical comparison; the strategic judgment still needs evaluation.",
                ],
            },
            {
                id: "cost",
                navLabel: "Who pays?",
                title: "A cheap call was not a free product",
                paragraphs: [
                    "My original plan was to pay for analysis with my own API key and give each account a small daily allowance. An individual call was inexpensive, so that initially seemed reasonable.",
                    "The problem was the multiplication. A cheap call, several times a day, across an unknown number of users becomes a recurring bill. A daily limit per account did not give me a predictable total budget. I did not need a large real-world invoice to see that I could not promise to fund that indefinitely, and I did not want to attract people with free access only to take it away later.",
                    "I changed the launch plan to personal keys. People sign in, register their own OpenAI key, and OpenAI charges their account. Team building and damage calculation stay usable without a key. This adds setup friction, so I published real analysis examples and a key guide instead of expecting visitors to pay before they understood the service.",
                    "Owning the key should also mean understanding the call. Pressing Analyze opens a confirmation with estimated time, total tokens, and cost. Preparing that estimate happens locally and does not call OpenAI. It uses the prepared input for token counting and historical profiles for output and time; it is not a billing quote or spending cap, and it assumes no cache discount.",
                    "After confirmation, the app saves the team before sending the paid request. The result shows actual duration and token usage, with estimated cost, below the analysis rather than competing with it. Those details return with the history entry. I wanted the user to be able to ask both 'Was this useful?' and 'What did it cost?' without the app hiding either answer.",
                ],
            },
            {
                id: "now",
                navLabel: "Where it is now",
                title: "Where the project is now",
                paragraphs: [
                    "The beta now runs on Cloudflare Workers with D1 account storage and Redis request and capacity protection. It supports team and Pokémon analysis, roster recommendations, and alternative sets alongside the shared builder and calculator.",
                    "I checked onboarding with a separate account, from the locked no-key screen through registration and a real analysis, then restored the saved team, result, and usage metadata after a reload and in another tab. That is more meaningful to me than checking that an endpoint returned 200: it follows the work a person is actually trying to do.",
                    "GitHub Actions runs lint, regression tests, a build, a Worker dry run, and a dependency audit before deploying main. Bounded aggregate API metrics help me investigate reliability and usage without collecting raw team or analysis text in those metrics. These checks give me evidence about the product, not proof that every strategy is correct or that every device works perfectly.",
                    "The next step is broader use outside my own teams and devices. I want to learn which recommendations people actually find useful and improve the weak cases without adding complexity just to make the project look bigger. The most useful lesson so far has been learning when to add something, when to measure it, and when to take it back out.",
                ],
            },
        ],
    },
};

export default pokepilotProject;
