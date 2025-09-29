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
