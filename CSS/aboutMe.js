document.addEventListener("DOMContentLoaded", () => {
    const textList = [
        "Hi, I'm Cole Dennie!",
        'public string name = "Cole Dennie";',
        'var name: String = "Cole Dennie"',
        'String name = "Cole Dennie";',
        '$name = "Cole Dennie";',
        'asdfsIBNFaaaaaaaahffhhf',
        'Sorry, that was my cat.',
        'Wait, how do I stop this?',
        'Oh! I think this button repeats it!',
        "Hi, I'm Cole Dennie!",
        'Shoot, that only repeats the first message.',
        'Ok, NOW I think I got it.'
    ];

    const targetElement = document.getElementById("introText");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = textList[textIndex];

        if (isDeleting) {
            // Slowly delete text
            targetElement.innerHTML = currentText.substring(0, charIndex) + '<span class="cursor">_</span>';
            charIndex--;

            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textList.length
            }
        } else {
            // Type text
            targetElement.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor">_</span>';
            charIndex++;

            if (charIndex === currentText.length) {
                // Wait before deleting
                setTimeout(() => isDeleting = true, 3000);
            }
        }

        const speed = isDeleting ? 30 : 70;
        setTimeout(typeText, speed);
    }

    typeText();
});
