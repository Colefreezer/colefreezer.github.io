function showGallery(category) {
    const galleryDiv = document.getElementById('imageGallery');
    galleryDiv.innerHTML = '';

    const imageFolder = `CSS/Images/Portfolio/${category}/`;
    let imageList = [];

    switch (category) {
        case "Games":
            imageList = ['Project1.png', 'Project2.png', 'Project3.png', 'Project4.png', 'Project5.png', 'Project6.png', 'Project7.png', 'Project8.png', 'Project9.png'];
            break;
        case "Art":
            imageList = ['Project1.png', 'Project2.png', 'Project3.png', 'Project4.png', 'Project5.png', 'Project6.png', 'Project7.png', 'Project8.png', 'Project9.png', 'Project10.png', 'Project11.png', 'Project12.png'];
            break;
        case "SpriteArt":
            imageList = ['Project1.png', 'Project2.png', 'Project3.png', 'Project4.png', 'Project5.png', 'Project6.png', 'Project7.png', 'Project8.png', 'Project9.png', 'Project10.png', 'Project11.png', 'Project12.png'];
            break;
        case "Models":
            imageList = ['Project1.png', 'Project2.png', 'Project3.png', 'Project4.png', 'Project5.png', 'Project6.png', 'Project7.png', 'Project8.png', 'Project9.png', 'Project10.png', 'Project11.png', 'Project12.png'];
            break;
    }

    imageList.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = imageFolder + image;
        imgElement.alt = category;
        galleryDiv.appendChild(imgElement);
    });

    setActive(category);
}

function setActive(selectedCategory) {
    const categories = document.querySelectorAll('.navCategory');
    categories.forEach(cat => {
        cat.classList.remove('active');
        if (cat.textContent.trim() === selectedCategory.replace(/([A-Z])/g, ' $1').trim()) {
            cat.classList.add('active');
        }
    });
}
