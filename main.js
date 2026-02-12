document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberSpans = document.querySelectorAll('.lotto-numbers .number');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme switching logic
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        themeToggleBtn.textContent = isLight ? '🌙' : '☀️';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggleBtn.textContent = '🌙';
    }

    // Lotto number generation
    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numberSpans.forEach((span, index) => {
            span.textContent = numbers[index];
            span.style.transform = 'translateY(-10px)';
            span.style.boxShadow = '0 15px 25px var(--shadow-color)';
            setTimeout(() => {
                span.style.transform = 'translateY(0)';
                span.style.boxShadow = '0 10px 20px var(--shadow-color)';
            }, 300);
        });
    }
});
