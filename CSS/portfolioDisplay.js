function showGallery(category) {
    // Get the div where the gallery will be displayed
    const galleryDiv = document.getElementById('imageGallery');

    // Clear the previous content of the gallery
    galleryDiv.innerHTML = '';


    // Create an array of image file names based on the selected category
    const imageFolder = `CSS/Images/Portfolio/${category}/`;
    let imageList = [];

    // Create an array of image file names based on the selected category
    switch (category) {
        case "Games":
            imageList = [
                'Project1.png',
                'Project2.png',
                'Project3.png',
                'Project4.png',
                'Project5.png',
                'Project6.png',
                'Project7.png',
                'Project8.png',
                'Project9.png',
            ];
            break;
        case "Art":
            imageList = [
                'Project1.png',
                'Project2.png',
                'Project3.png',
                'Project4.png',
                'Project5.png',
                'Project6.png',
                'Project7.png',
                'Project8.png',
                'Project9.png',
                'Project10.png',
                'Project11.png',
                'Project12.png',
            ];
            break;
        case "SpriteArt":
            imageList = [
                'Project1.png',
                'Project2.png',
                'Project3.png',
                'Project4.png',
                'Project5.png',
                'Project6.png',
                'Project7.png',
                'Project8.png',
                'Project9.png',
                'Project10.png',
                'Project11.png',
                'Project12.png',
            ];
            break;
        case "3DModels":
            imageList = [
                'Project1.png',
                'Project2.png',
                'Project3.png',
                'Project4.png',
                'Project5.png',
                'Project6.png',
                'Project7.png',
                'Project8.png',
                'Project9.png',
                'Project10.png',
                'Project11.png',
                'Project12.png',
            ];
            break;
    }

    // Create img elements and append them to the gallery div
    imageList.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = imageFolder + image;
        imgElement.alt = category;
        galleryDiv.appendChild(imgElement);
    });
}
