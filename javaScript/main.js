document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        toggleButton.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});


document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    alert('Message sent!'); 
    e.target.reset();
});


// async function loadBlogPosts() {
//     try {
//         // const response = await fetch('/api/blog-posts');
//         const posts = await response.json();
//         const container = document.getElementById('blog-posts');
        
//         posts.forEach(post => {
//             container.innerHTML += `
//                 <div class="blog-post">
//                     <h3>${post.title}</h3>
//                     <div class="publish-date">Published on ${post.date}</div>
//                     <div class="excerpt">${post.excerpt}</div>
//                     <a href="/blog/${post.slug}" class="read-more">Read more →</a>
//                 </div>
//             `;
//         });
//     } catch (error) {
//         console.error('Error loading blog posts:', error);
//     }
// }

// document.addEventListener('DOMContentLoaded', loadBlogPosts);