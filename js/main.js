const savedList = document.getElementById('saved-list');
const savedImagesBox = document.getElementById('saved-images');
const imageGridContainer = document.getElementById('image-grid-container');
const toggleSavedImagesButton = document.getElementById('toggle-saved-images');

// Function to toggle the visibility of the "Saved Images" box
function toggleSavedImagesBox() {
    savedImagesBox.classList.toggle('hidden');
    if (savedImagesBox.classList.contains('hidden')) {
        imageGridContainer.style.width = '100%';
    } else {
        imageGridContainer.style.width = 'calc(100% - 300px)';
    }
}

function toggleSaveImage(image) {
    const src = image.src;
    const name = image.nextElementSibling.querySelector('.name').textContent;
    const description = image.nextElementSibling.querySelector('.description').textContent;
    
    const existingSavedItem = Array.from(savedList.children).find(
        item => item.querySelector('img').src === src
    );

    if (existingSavedItem) {
        savedList.removeChild(existingSavedItem);
    } else {
        const savedItem = document.createElement('div');
        savedItem.className = 'saved-list-item';
        
        const savedImage = document.createElement('img');
        savedImage.src = src;
        savedImage.alt = name;
        savedImage.className = 'saved-list-image';
        
        const savedName = document.createElement('span');
        savedName.textContent = name;
        savedName.className = 'name';

        const savedDescription = document.createElement('span');
        savedDescription.textContent = description;
        savedDescription.className = 'description saved-image-description'; // Adds the required class
        
        savedItem.appendChild(savedImage);
        savedItem.appendChild(savedName);
        savedItem.appendChild(savedDescription);
        savedList.appendChild(savedItem);

        // Show the saved images box if it's hidden
        if (savedImagesBox.classList.contains('hidden')) {
            toggleSavedImagesBox();
        }
    }
}

// Add click event to all images in the grid
document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', function() {
        toggleSaveImage(this);
    });
});

// Add click event to the basket button
toggleSavedImagesButton.addEventListener('click', toggleSavedImagesBox);

// Initial setup: Ensure savedList is empty on load
savedList.innerHTML = '';
savedImagesBox.classList.add('hidden');

// Toggle visibility of the Index section
function toggleIndex() {
    const indexSection = document.getElementById('fungi-index');
    indexSection.style.display = indexSection.style.display === 'block' ? 'none' : 'block';
}

// Highlight the clicked fungus image
function highlightFungus(id) {
    const element = document.getElementById(id);

    if (element) {
        console.log(`Element found: ${id}`);

        // Remove previous highlights
        document.querySelectorAll('.image-container').forEach((img) => {
            img.classList.remove('highlighted');
        });

        // Add highlight class
        element.classList.add('highlighted');
        console.log(`Class added: highlighted`);

        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        console.error(`Element with ID ${id} not found`);
    }
}



