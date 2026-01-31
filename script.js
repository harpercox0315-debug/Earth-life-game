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
