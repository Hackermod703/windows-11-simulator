body {
    margin: 0;
    background-image: url('assets/wallpapers/tranquil-forest.jpg');
    background-size: cover;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.taskbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
}

.start-button {
    font-size: 24px;
    cursor: pointer;
    color: white;
}

.taskbar-icons img {
    width: 30px;
    height: 30px;
    margin: 0 10px;
    cursor: pointer;
}

.desktop {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 20px;
}

.desktop-icons img {
    width: 60px;
    margin: 10px;
    cursor: pointer;
}

/* Menu Styles */
.menu {
    display: none;
    position: fixed;
    top: 20%;
    left: 20%;
    width: 60%;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

.menu h2 {
    margin-top: 0;
}

.menu p {
    margin-bottom: 0;
}

.time {
    color: white;
    font-size: 16px;
}
