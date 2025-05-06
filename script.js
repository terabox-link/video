document.addEventListener("DOMContentLoaded", function() {
    fetch('gambar.txt')
        .then(response => response.text())
        .then(text => {
            // Pisahkan isi gambar.txt ke array berdasarkan baris
            const urls = text.trim().split('\n').filter(line => line);
            // Acak urutan gambar secara sederhana
            urls.sort(() => Math.random() - 0.5);
            const gallery = document.querySelector('.gallery');

            // Buat elemen thumbnail untuk setiap URL
            urls.forEach((url, index) => {
                const a = document.createElement('a');
                // Set href ke video.html dengan parameter index
                a.href = `video.html?video=${index + 1}`;

                const img = document.createElement('img');
                img.src = url;
                img.alt = `Thumbnail ${index + 1}`;

                a.appendChild(img);
                gallery.appendChild(a);
            });
        })
        .catch(error => console.error('Error loading images:', error));
});
