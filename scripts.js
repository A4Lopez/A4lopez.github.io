document.addEventListener('DOMContentLoaded', () => {
    const stickers = document.querySelectorAll('.sticker');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closeBtn = document.querySelector('.close-btn');
    const container = document.querySelector('.sticker-container');

    // Function to get a random position
    function getRandomPosition(max) {
        return Math.floor(Math.random() * max) + 'px';
    }

    // Randomly position each sticker
    stickers.forEach(sticker => {
        sticker.style.top = getRandomPosition(container.clientHeight - sticker.clientHeight);
        sticker.style.left = getRandomPosition(container.clientWidth - sticker.clientWidth);

        sticker.addEventListener('click', (event) => {
            const info = event.target.getAttribute('data-info');
            popupContent.innerHTML = info;
            popup.style.display = 'block';
            popup.style.left = `${event.pageX}px`;
            popup.style.top = `${event.pageY}px`;
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
