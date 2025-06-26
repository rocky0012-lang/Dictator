const modal = document.getElementById('authModal');

document.querySelector('.btn-open').onclick = () => toggleModal(true);

function toggleModal(show) {
 modal.classList.toggle('active', show);
}

function switchTab(tab) {
document.getElementById('tab-login').classList.remove('active');
document.getElementById('tab-signup').classList.remove('active');
document.getElementById('form-login').classList.remove('active');
document.getElementById('form-signup').classList.remove('active');

if (tab === 'login') {
document.getElementById('tab-login').classList.add('active');
document.getElementById('form-login').classList.add('active');
} else {
document.getElementById('tab-signup').classList.add('active');
document.getElementById('form-signup').classList.add('active');
}
}
// Hacker-style number rain animation
const canvas = document.getElementById("hackerCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01010111010101001101010101010110101";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrixRain() {
ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#0f0"; // Green text
ctx.font = `${fontSize}px monospace`;

drops.forEach((y, index) => {
const text = letters[Math.floor(Math.random() * letters.length)];
const x = index * fontSize;
ctx.fillText(text, x, y * fontSize);

if (y * fontSize > canvas.height && Math.random() > 0.975) {
drops[index] = 0;
}

drops[index]++;
});
}

setInterval(drawMatrixRain, 33); // ~30 FPS

window.addEventListener('resize', () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});

const signupForm = document.getElementById("form-signup");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

const email = document.getElementById("signup-email").value;
const password = document.getElementById("signup-password").value;

firebase.auth().createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
const user = userCredential.user;
alert("Signup successful! Welcome " + user.email);
})
.catch((error) => {
alert("Error: " + error.message);
});
});