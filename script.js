// App Showcase JavaScript
// Main functionality for loading and displaying apps

document.addEventListener('DOMContentLoaded', () => {
    const appGrid = document.getElementById('appGrid');
    const loadingIndicator = document.getElementById('loadingIndicator');

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Function to create a single app card
    function createAppCard(app) {
        // Main card container
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-lg overflow-hidden card-hover-effect flex flex-col';

        // App icon
        const iconImg = document.createElement('img');
        iconImg.className = 'w-full h-48 object-cover'; // Adjusted height for better aspect ratio
        iconImg.src = app.icon;
        iconImg.alt = `${app.title} Icon`;
        iconImg.onerror = () => { // Fallback if image fails to load
            iconImg.src = 'https://placehold.co/400x300/cccccc/FFFFFF?text=Image+Not+Found';
            iconImg.alt = 'Image not found';
        };
        card.appendChild(iconImg);

        // Content container
        const contentDiv = document.createElement('div');
        contentDiv.className = 'p-6 flex flex-col flex-grow'; // flex-grow to make content area expand
        card.appendChild(contentDiv);

        // App title
        const title = document.createElement('h3');
        title.className = 'text-2xl font-semibold text-gray-800 mb-2';
        title.textContent = app.title;
        contentDiv.appendChild(title);
        
        // App category (optional)
        if (app.category) {
            const category = document.createElement('span');
            category.className = 'inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3';
            category.textContent = app.category;
            contentDiv.appendChild(category);
        }

        // App description
        const description = document.createElement('p');
        description.className = 'text-gray-600 text-sm mb-4 app-description'; // Using the CSS class for line clamping
        description.textContent = app.description;
        contentDiv.appendChild(description);
        
        // Spacer to push button to the bottom
        const spacer = document.createElement('div');
        spacer.className = 'flex-grow';
        contentDiv.appendChild(spacer);

        // Download button
        const downloadButton = document.createElement('a');
        downloadButton.href = app.downloadLink;
        downloadButton.setAttribute('download', app.fileName);
        downloadButton.className = 'mt-auto inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center download-button';
        downloadButton.innerHTML = '<i class="fas fa-download mr-2"></i>Download';
        
        // Add click tracking (optional)
        downloadButton.addEventListener('click', () => {
            console.log(`Download initiated for: ${app.title}`);
        });
        
        contentDiv.appendChild(downloadButton);

        return card;
    }

    // Fetch app data from JSON and render cards
    async function loadApps() {
        try {
            const response = await fetch('apps.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const apps = await response.json();

            if (loadingIndicator) {
                loadingIndicator.style.display = 'none'; // Hide loading indicator
            }
            
            if (apps.length === 0) {
                appGrid.innerHTML = '<p class="text-center col-span-full text-gray-500">No apps to display currently.</p>';
                return;
            }

            // Clear the grid
            appGrid.innerHTML = '';

            apps.forEach(app => {
                const appCard = createAppCard(app);
                appGrid.appendChild(appCard);
            });

        } catch (error) {
            console.error('Error fetching or parsing apps.json:', error);
            if (loadingIndicator) {
                loadingIndicator.style.display = 'none';
            }
            appGrid.innerHTML = `<p class="text-center col-span-full text-red-500">Failed to load apps. Please check the console for errors and ensure 'apps.json' is correctly formatted and accessible.</p>`;
        }
    }

    // Initialize the app
    loadApps();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
