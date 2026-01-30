// 1. Select all the links inside the nav menu
const links = document.querySelectorAll('#nav-menu a');

// 2. Define what happens when a link is clicked
function handleLinkClick(event) {
    // Prevent the link from jumping to top of page
    event.preventDefault(); 
    
    // The specific link that was clicked
    const clickedLink = event.currentTarget;

    // --- RESET ALL LINKS ---
    links.forEach(link => {
        // Reset Text
        link.classList.remove('text-white');
        link.classList.add('text-gray-400');
        
        // Reset Dot
        const dot = link.querySelector('.nav-dot');
        dot.classList.remove('bg-red-600', 'shadow-[0_0_8px_rgba(220,38,38,0.8)]', 'border-none');
        dot.classList.add('bg-transparent', 'border', 'border-gray-500');
    });

    // --- ACTIVATE CLICKED LINK ---
    // Set Text
    clickedLink.classList.remove('text-gray-400');
    clickedLink.classList.add('text-white');

    // Set Dot
    const activeDot = clickedLink.querySelector('.nav-dot');
    activeDot.classList.remove('bg-transparent', 'border', 'border-gray-500');
    activeDot.classList.add('bg-red-600', 'shadow-[0_0_8px_rgba(220,38,38,0.8)]', 'border-none');
}

// 3. Attach the event listener to every link
links.forEach(link => {
    link.addEventListener('click', handleLinkClick);
});

// Optional: Automatically click the first one on load
if(links.length > 0) {
    handleLinkClick({ currentTarget: links[0], preventDefault: () => {} });
}