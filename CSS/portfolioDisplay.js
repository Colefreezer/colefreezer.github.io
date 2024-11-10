function showGallery(category) {
    closeVideoModal();

    const galleryDiv = document.getElementById('imageGallery');
    galleryDiv.innerHTML = '';

    const imageFolder = `CSS/Images/Portfolio/${category}/`;
    let imageList = [];
    let gameTitleList = [];
    let gameDescriptionList = [];
    let gamePreviewList = [];

    switch (category) {
        case "Games":
            imageList = [
                'Box1.png', 'Box2.png', 'Box3.png', 'Box4.png', 'Box5.png',
                'Box6.png', 'Box7.png', 'Box8.png',
            ];
            gameTitleList = [
                'Clockwork: Shadows', 'Dollhouse', 'Heartsick', 'Analog', 'Heartsick: Infinite',
                'Down Below', 'Heartsick: Homecoming', 'Hyper Looper',
            ];
            gameDescriptionList = [
                'A first-person shooter with a cel-shaded, steampunk detective aesthetic.',
                'A 2D horror game set in a mansion full of Dolls.',
                "An RPG set in the early 2000's centered around Robotics and Anomalies.",
                'Set inside of a CRT TV, Analog is a horror game with a cryptic Story.',
                'A 2D action game starring Charie, who accidentally enters an endless realm and desperately seeks a way out..',
                'A first-person shooter exploration game set in an old, time-forgotten fallout bunker.',
                'A homecoming story with horror and mystery elements.',
                'A fast-paced arcade shooter with time manipulation.',
            ];
            gamePreviewList = [
                'Preview1.mp4', 'Preview2.mp4', 'Preview3.mp4', 'Preview4.mp4', 'Preview5.mp4', 'Preview6.mp4',
                'Preview7.mp4', 'Preview8.mp4',
            ];
            break;
        case "Art":
        case "SpriteArt":
        case "Models":
            imageList = [
                'Project1.png', 'Project2.png', 'Project3.png', 'Project4.png',
                'Project5.png', 'Project6.png', 'Project7.png', 'Project8.png',
                'Project9.png', 'Project10.png', 'Project11.png', 'Project12.png'
            ];
            break;
    }

    imageList.forEach((imageName, index) => {
        const imageContainer = document.createElement('div');

        const imgElement = document.createElement('img');
        imgElement.src = `${imageFolder}${imageName}`;
        imgElement.alt = category;

        // Only set the onclick event to show video if the category is "Games"
        if (category === "Games") {
            imgElement.onclick = function () {
                showVideoAlert(`CSS/Previews/${gamePreviewList[index]}`);
            };
        }

        imageContainer.appendChild(imgElement);

        if (category === "Games") {
            const textContainer = document.createElement('div');
            imageContainer.classList.add('gameContainer');
            imageContainer.classList.add('imageContainer');
            textContainer.classList.add('textContainer');

            const title = document.createElement('h1');
            title.textContent = gameTitleList[index];

            const description = document.createElement('p');
            description.textContent = gameDescriptionList[index];

            textContainer.appendChild(title);
            textContainer.appendChild(description);

            imageContainer.appendChild(textContainer);
        } else {
            imageContainer.classList.add('galleryContainer');
        }

        galleryDiv.appendChild(imageContainer);
    });

    setActive(category);
}


function showVideoAlert(videoSrc) {
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    videoModal.classList.add('show'); // Add show class for animation
    videoModal.style.display = 'flex';
    videoPlayer.play();
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause();
    videoPlayer.src = '';
    videoModal.classList.remove('show'); // Remove show class when closing
    videoModal.style.display = 'none';
}
