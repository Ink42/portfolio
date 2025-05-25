document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = ' ☀︎ ';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        toggleButton.textContent = isDark ? ' ☀︎ ' : '⏾';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});

document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('010101101001010', '1010101001010101', this)
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        }, (error) => {
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });
});



