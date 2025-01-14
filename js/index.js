        //? ======= Завдання 1 =======//
const button = document.getElementById('myButton');

        // Додаємо обробник події на клік за допомогою стрілкової функції
        button.addEventListener('click', () => {
            alert('Hello World!');
        });

        //? ======= Завдання 2 =======//

        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // Функція для перевірки відповіді користувача
        function checkGuess() {
            // Отримуємо введене число з поля вводу
            const userGuess = document.getElementById('guessField').value;
            const result = document.getElementById('guessResult');

            // Перевіряємо, чи є введене значення числом
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                result.textContent = 'Будь ласка, введіть число від 1 до 100.';
            } else if (userGuess == randomNumber) {
                result.textContent = 'Правильно! Ви вгадали число.';
            } else if (userGuess < randomNumber) {
                result.textContent = 'Загадане число більше. Спробуйте ще раз.';
            } else {
                result.textContent = 'Загадане число менше. Спробуйте ще раз.';
            }
        }

        //? ======= Завдання 3 =======//

        let clickCounter = 0;

        // Отримуємо елемент, в якому буде відображатися кількість кліків
        const clickDisplay = document.getElementById('clickCount');

        // Додаємо обробник події на клік по всій сторінці
        document.body.addEventListener('click', () => {
            // Збільшуємо лічильник на 1 при кожному кліку
            clickCounter++;

            // Оновлюємо текст в елементі з кількістю кліків
            clickDisplay.textContent = clickCounter;
        });

        //? ======= Завдання 4 =======//


        function applyCallbackToArray(arr, callback) {
            // Створюємо новий масив, в якому будуть результати застосування колбек-функції
            const resultArray = [];
        
            // Перебираємо кожен елемент масиву
            for (let i = 0; i < arr.length; i++) {
                // Додаємо до результату результат застосування колбеку
                resultArray.push(callback(arr[i]));
            }
        
            // Повертаємо новий масив
            return resultArray;
        }
        
        // Приклад використання:
        const numbers = [1, 2, 3, 4, 5];
        
        // Колбек-функція, яка множить кожне число на 2
        const multiplyByTwo = (num) => num * 2;
        
        // Викликаємо функцію з масивом і колбеком
        const newNumbers = applyCallbackToArray(numbers, multiplyByTwo);
        
        console.log(newNumbers); // Виведе: [2, 4, 6, 8, 10]
        

        //? ======= Завдання 5 =======//

        // Функція для розрахунку дисконтної ціни
const calculateDiscountedPrice = (price, discount, callback) => {
    // Розрахунок нової ціни після знижки
    const discountedPrice = price - (price * (discount / 100));

    // Викликаємо колбек і передаємо в нього нову ціну
    callback(discountedPrice);
};

// Колбек-функція, яка виводить нову ціну
const showDiscountedPrice = (price) => {
    console.log(`Дисконтна ціна товару: ${price.toFixed(2)} грн.`);
};

// Приклад використання:
const originalPrice = 1000;  // Початкова ціна товару
const discountPercentage = 20;  // Відсоток знижки

// Викликаємо основну функцію для розрахунку ціни
calculateDiscountedPrice(originalPrice, discountPercentage, showDiscountedPrice);
