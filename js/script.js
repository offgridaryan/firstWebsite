function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const button = document.getElementById('toggleMusicBtn');

    if (audio.paused) {
        audio.play().catch(err => console.log('Playback prevented by browser:', err));
        button.textContent = 'Pause Music';
    } else {
        audio.pause();
        button.textContent = 'Play Music';
    }
}

// AI code starts from here
// mobile optimization

// Utility: apply hover-like styles on touch
function enableTouchHover(selector, hoverStyle) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
        const originalStyle = el.getAttribute('data-original-style') || el.getAttribute('style') || '';

        el.addEventListener('touchstart', () => {
            Object.keys(hoverStyle).forEach(prop => {
                el.style[prop] = hoverStyle[prop];
            });
        });

        el.addEventListener('touchend', () => {
            el.setAttribute('style', originalStyle);
        });
    });
}

// About-me section
enableTouchHover('.about-me', {
    background: 'linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,0.1))'
});

// Project items
enableTouchHover('.project-item', {
    background: 'rgba(255,255,255,0.1)'
});

// Skill items
enableTouchHover('.skill-item', {
    background: 'rgba(255,255,255,0.1)'
});

// Profiles section
enableTouchHover('.profiles', {
    background: 'linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,0.1))'
});

// Links
enableTouchHover('.link', {
    color: '#00ff00',
    textDecoration: 'underline'
});

// Toggle Music Button
enableTouchHover('#toggleMusicBtn', {
    background: 'rgba(0,0,0,0.1)'
});

// initial viewport scale
document.addEventListener('DOMContentLoaded', () => {
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
        viewport = document.createElement('meta');
        viewport.name = 'viewport';
        document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
});
