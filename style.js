const basket = document.getElementById('basket');
const apple = document.getElementById('apple');
let scoreElement = document.getElementById('score');
let score = 0;

// Переміщення кошика
document.addEventListener('keydown', (e) => {
    let basketPosition = basket.offsetLeft;
    if (e.key === 'ArrowLeft' && basketPosition > 0) {
        basket.style.left = basketPosition - 20 + 'px';
    }
    if (e.key === 'ArrowRight' && basketPosition < 250) {
        basket.style.left = basketPosition + 20 + 'px';
    }
});

// Падіння яблука
function dropApple() {
    let applePosition = 0;
    let appleInterval = setInterval(() => {
        if (applePosition >= 480) {
            // Перевірка на зіткнення з кошиком
            let appleLeft = apple.offsetLeft;
            let basketLeft = basket.offsetLeft;
            if (appleLeft >= basketLeft && appleLeft <= basketLeft + 50) {
                score++;
                scoreElement.innerText = `Очки: ${score}`;
            }
            resetApple();
            clearInterval(appleInterval);
            dropApple();
        } else {
            applePosition += 5;
            apple.style.top = applePosition + 'px';
        }
    }, 50);
}

// Скидання яблука наверх
function resetApple() {
    apple.style.top = '0px';
    apple.style.left = Math.floor(Math.random() * 280) + 'px';
}

dropApple();