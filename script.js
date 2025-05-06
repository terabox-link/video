document.addEventListener("DOMContentLoaded", function() {
    fetch('gambar.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Gagal memuat gambar.txt: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            const filenames = text.trim().split('\n').filter(line => line);
            filenames.sort(() => Math.random() - 0.5); // Acak urutan

            const gallery = document.querySelector('.gallery');

            filenames.forEach((filename, index) => {
                const a = document.createElement('a');
                a.href = `video.html?video=${index + 1}`;

                const img = document.createElement('img');
                img.src = `images/${filename}`;
                img.alt = `Thumbnail ${index + 1}`;

                a.appendChild(img);
                gallery.appendChild(a);
            });
        })
        .catch(error => console.error('Error:', error));
});
