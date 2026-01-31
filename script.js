// This will be the home for our 3D World
console.log("Life Basis Logic Loaded!");

// Let's create a simple 'Save' system for your Coins
let playerStats = {
    coins: 0,
    hasKrogerCard: false,
    currentYear: 2026,
    role: "Human"
};

// This function will eventually trigger the 'Rebirth'
function rebirthPlayer() {
    console.log("Rebirthing...");
    playerStats.coins = 0; // Resetting life
    alert("The world fades... You are being reborn!");
    // Here is where we will teleport the 3D camera to a new spot
}
// --- Game State ---
let playerStats = {
    coins: 0,
    hasKrogerCard: false,
    currentYear: 2026,
    role: "Human"
};

// --- Time Machine Logic ---
function changeEra(year) {
    playerStats.currentYear = year;
    
    // Update the text on the screen
    document.getElementById('era-display').innerText = year;
    
    // Find our UI menu
    const uiMenu = document.getElementById('ui-layer');
    
    if (year === '1990') {
        // Add the retro look
        uiMenu.classList.add('retro-ui');
        console.log("Welcome to the 90s! Watch out for dial-up internet.");
    } else {
        // Remove the retro look for the modern 2026 feel
        uiMenu.classList.remove('retro-ui');
        console.log("Back to 2026. Don't forget your smartphone.");
    }
}

// --- Role Logic ---
function setRole(role) {
    playerStats.role = role;
    document.getElementById('role-display').innerText = role;
    
    if (role === 'Dog') {
        alert("Woof! You are now a dog. Your main goal: find treats and a human.");
    } else {
        alert("You are now a human. Good luck with those grocery prices.");
    }
}

// --- Rebirth System ---
function rebirthPlayer() {
    playerStats.coins = 0;
    alert("Rebirthing... Choose your new era and start your life over!");
    // Later we will add code here to move your 3D character to a random spot
}
/* 1. First, we tell the game to load the 3D Engine */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });

// This sets the background to a dark "Huber Heights at Night" vibe
scene.background = new THREE.Color(0x0a0a0a); 

/* 2. Add a 'Placeholder' for your character (A Green Cube for now) */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
const player = new THREE.Mesh(geometry, material);
scene.add(player);

camera.position.z = 5;

/* 3. The Animation Loop (The Heartbeat of the game) */
function animate() {
    requestAnimationFrame(animate);
    
    // Make the player spin a little so we know the game is 'alive'
    player.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}
animate();
