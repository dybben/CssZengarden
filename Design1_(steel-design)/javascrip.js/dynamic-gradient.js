document.addEventListener('mousemove', (e) => {
    const gradient = document.querySelector('.dynamic-gradient');
    const mask = document.querySelector('.payload-mask');

    if (gradient && mask) {
        // Få position og dimensioner af payload-mask
        const maskRect = mask.getBoundingClientRect();

        // Beregn musens relative position i forhold til masken
        const x = ((e.clientX - maskRect.left) / maskRect.width) * 100;
        const y = ((e.clientY - maskRect.top) / maskRect.height) * 100;

        // Opdater gradientens position kun inden for masken
        gradient.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`;
    }
});