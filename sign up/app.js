// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCNfe6t6KpR1DdZc-dLObuhE2BG0q3n2M",
    authDomain: "web-app-project-bb6e8.firebaseapp.com",
    projectId: "web-app-project-bb6e8",
    storageBucket: "web-app-project-bb6e8.firebasestorage.app",
    messagingSenderId: "995424022140",
    appId: "1:995424022140:web:06e32105de5453973223f9",
    measurementId: "G-J6KGXDDV6Q"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign-up function
function signUp() {
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('signUpConfirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("User signed up successfully!");
            window.location.href = 'login.html'; // Redirect to login page after signup
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}
    


// Function to handle Login
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Login successful!");
            // Redirect to home or dashboard after login
            window.location.href = 'dashboard.html';  // Replace with your target page
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}