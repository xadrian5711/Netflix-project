Netflix Dashboard - Glassmorphism UI
A high-fidelity frontend implementation of a modern streaming platform dashboard. This project focuses on advanced CSS styling, responsive Flexbox layouts, and the "Glassmorphism" aesthetic using Tailwind CSS.


🎨 Key Design Features
1. Glassmorphism Architecture

The UI is built on a translucent visual hierarchy using backdrop-filter.

Main Container: Uses bg-black/60 with backdrop-blur-3xl to create a frosted glass effect over the wallpaper.

Floating Elements: Search bars, buttons, and sidebars utilize semi-transparent backgrounds (bg-white/5) to maintain readability while blending with the background.

2. Complex Layout System (Flexbox)

The dashboard is divided into a 3-Column Layout designed to fit the viewport perfectly (h-screen):

Icon Rail (Left): Collapsed navigation for quick access icons.

Sidebar (Middle): Fixed header (Logo/Menu) with an independent vertical scrollable area for "New Trailers."

Main Stage (Right): Contains the Header, Hero Section, and Content Rows.

3. Scroll Interactions

Hidden Scrollbars: Custom utilities (no-scrollbar) are used to maintain the clean aesthetic while allowing functional scrolling.

Horizontal Lists: The "Anime" and "Movies" sections utilize overflow-x-auto for smooth horizontal swiping of content cards.

Independent Scrolling: The middle sidebar and the main content area scroll independently of each other.

4. Interactive Elements & Micro-Animations

Hover Effects: Cards utilize group-hover:scale-105 and brightness adjustments for tactile feedback.

Buttons: Custom gradients and shadow glows (shadow-red-600/50) on the "Play" and "Watch" buttons.

Inputs: The search bar features focus states that darken the background and highlight borders.

🛠️ Tech Stack
HTML5 - Semantic structure.

Tailwind CSS - Utility-first styling for rapid UI development.

Vite - Frontend build tool.

Google Fonts - Material Symbols Outlined for iconography.

🚀 How to Run
Clone the repository

Bash
git clone https://github.com/your-username/netflix-project.git
cd netflix-project
Install Dependencies

Bash
npm install
Start the Development Server

Bash
npm run dev
View in Browser Open the link provided in the terminal (usually http://localhost:5173).

📂 Project Structure
├── public/              # Static assets (images, logos)
├── src/
│   ├── main.js          # JavaScript entry point
│   ├── style.css        # Tailwind directives & custom CSS
├── index.html           # Main HTML structure
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Project dependencies
🔮 Future Improvements
Make the "Watch" buttons trigger a video modal.

Add Javascript to filter movies by category.

Implement a responsive mobile view (stacking columns).
