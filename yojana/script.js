document.addEventListener('DOMContentLoaded', () => {
    const loadHTML = (id, file) => {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            });
    };

    loadHTML('header', 'header.html');
    loadHTML('sidebar', 'sidebar.html');
    loadHTML('footer', 'footer.html');

    // Dynamic Post Loading
    const posts = Array.from({ length: 10 }, (_, i) => ({
        title: `Post Title ${i + 1}`,
        thumbnail: `https://via.placeholder.com/300x200?text=Post+${i + 1}`
    }));

    const postArea = document.getElementById('post-area');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <img src="${post.thumbnail}" alt="${post.title}">
            <h2>${post.title}</h2>
        `;
        postArea.appendChild(postDiv);
    });
});
