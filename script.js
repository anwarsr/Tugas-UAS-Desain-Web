// JavaScript untuk meningkatkan fungsi

// Scroll halus untuk tautan navigasi
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#")) {
            e.preventDefault(); // Mencegah navigasi hanya untuk link dengan hash (#)
            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Validasi sederhana untuk formulir
document.querySelector('form').addEventListener('submit', function(e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Harap isi semua kolom terlebih dahulu.');
    }
});
