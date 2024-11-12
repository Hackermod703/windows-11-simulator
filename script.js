document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('.time');
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }, 1000);

    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', () => {
        alert('Start Menu Clicked!');
    });
});
