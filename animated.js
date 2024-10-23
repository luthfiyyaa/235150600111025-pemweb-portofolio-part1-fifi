const texts = ["I'm Luthfiyya", "I'm Fifi"];
let currentTextIndex = 0;
let charIndex = 0;
const nameSpan = document.getElementById("name");

function typeEffect() {
    const currentText = texts[currentTextIndex];
    if (charIndex < currentText.length) {
        nameSpan.textContent += currentText.charAt(charIndex); // Tambahkan karakter satu per satu
        charIndex++;
        setTimeout(typeEffect, 100); // Lanjutkan mengetik karakter berikutnya
    } else {
        setTimeout(deleteEffect, 2000); // Tunggu 2 detik, lalu mulai menghapus teks
    }
}

function deleteEffect() {
    const currentText = texts[currentTextIndex];
    if (charIndex > 0) {
        nameSpan.textContent = currentText.substring(0, charIndex - 1); // Hapus satu karakter
        charIndex--;
        setTimeout(deleteEffect, 100); // Lanjutkan menghapus karakter berikutnya
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Pindah ke teks berikutnya
        setTimeout(typeEffect, 500); // Mulai mengetik teks baru
    }
}

// Mulai efek ketikan
typeEffect();
