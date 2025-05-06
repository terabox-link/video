document.addEventListener("DOMContentLoaded", function() {
    fetch('gambar.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            const urls = text.trim().split('\n').filter(line => line);
            urls.sort(() => Math.random() - 0.5);

            const gallery = document.querySelector('.gallery');

            urls.forEach((url, index) => {
                const a = document.createElement('a');
                a.href = `video.html?video=${index + 1}`;

                const img = document.createElement('img');
                img.src = url;
                img.alt = `Thumbnail ${index + 1}`;

                a.appendChild(img);
                gallery.appendChild(a);
            });
        })
        .catch(error => console.error('Error fetching gambar.txt:', error));
});
