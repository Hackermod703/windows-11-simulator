document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('.time');
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }, 1000);

    // Taskbar Menu Click Handling
    const menuIcons = document.querySelectorAll('.menu-icon');
    const menus = document.querySelectorAll('.menu');

    menuIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const menuToOpen = document.getElementById(icon.dataset.menu);
            menus.forEach(menu => menu.style.display = 'none');
            menuToOpen.style.display = 'block';
        });
    });

    // Start Button Click Handling
    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', () => {
        alert('Launchpad Opened!');
    });
});
