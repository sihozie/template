document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen yang diperlukan
    const fullDesc = document.getElementById('full-description');
    const readMoreButton = document.getElementById('read-more-button');
    
    // Pastikan kedua elemen ada sebelum menambahkan listener
    if (fullDesc && readMoreButton) {
        readMoreButton.addEventListener('click', () => {
            const isHidden = fullDesc.classList.contains('hidden');
            
            if (isHidden) {
                // Tampilkan konten deskripsi penuh
                fullDesc.classList.remove('hidden');
                // Sembunyikan tombol
                readMoreButton.style.display = 'none';
            }
        });
    }
});
