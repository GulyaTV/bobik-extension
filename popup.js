document.addEventListener('DOMContentLoaded', function() {
    var canvas = new handwriting.Canvas(document.getElementById("canvas"), 3);
    canvas.setCallBack(function (data, err) {
        if (err) throw err;
        else {
            document.getElementById("recognition-result").innerText = "Распознано: " + data;
            sessionStorage.setItem('recognizedExpression', data);
        }
    });

    // Переключение между режимами "Лапы", "Нос", "Зубы", "Бинарный" и "AI Mode"
    document.getElementById("paws-mode").addEventListener("click", () => {
        document.querySelector(".paws-mode").style.display = "block";
        document.querySelector(".nose-mode").style.display = "none";
        document.querySelector(".teeth-mode").style.display = "none";
        document.querySelector(".binary-mode").style.display = "none";
        document.querySelector(".ai-mode").style.display = "none";
        document.getElementById("paws-mode").classList.add("active");
        document.getElementById("nose-mode").classList.remove("active");
        document.getElementById("teeth-mode").classList.remove("active");
        document.getElementById("binary-mode").classList.remove("active");
        document.getElementById("ai-mode").classList.remove("active");
    });

    document.getElementById("nose-mode").addEventListener("click", () => {
        document.querySelector(".paws-mode").style.display = "none";
        document.querySelector(".nose-mode").style.display = "block";
        document.querySelector(".teeth-mode").style.display = "none";
        document.querySelector(".binary-mode").style.display = "none";
        document.querySelector(".ai-mode").style.display = "none";
        document.getElementById("nose-mode").classList.add("active");
        document.getElementById("paws-mode").classList.remove("active");
        document.getElementById("teeth-mode").classList.remove("active");
        document.getElementById("binary-mode").classList.remove("active");
        document.getElementById("ai-mode").classList.remove("active");
    });

    document.getElementById("teeth-mode").addEventListener("click", () => {
        document.querySelector(".paws-mode").style.display = "none";
        document.querySelector(".nose-mode").style.display = "none";
        document.querySelector(".teeth-mode").style.display = "block";
        document.querySelector(".binary-mode").style.display = "none";
        document.querySelector(".ai-mode").style.display = "none";
        document.getElementById("teeth-mode").classList.add("active");
        document.getElementById("paws-mode").classList.remove("active");
        document.getElementById("nose-mode").classList.remove("active");
        document.getElementById("binary-mode").classList.remove("active");
        document.getElementById("ai-mode").classList.remove("active");
    });

    document.getElementById("binary-mode").addEventListener("click", () => {
        document.querySelector(".paws-mode").style.display = "none";
        document.querySelector(".nose-mode").style.display = "none";
        document.querySelector(".teeth-mode").style.display = "none";
        document.querySelector(".binary-mode").style.display = "block";
        document.querySelector(".ai-mode").style.display = "none";
        document.getElementById("binary-mode").classList.add("active");
        document.getElementById("paws-mode").classList.remove("active");
        document.getElementById("nose-mode").classList.remove("active");
        document.getElementById("teeth-mode").classList.remove("active");
        document.getElementById("ai-mode").classList.remove("active");
    });

    document.getElementById("ai-mode").addEventListener("click", () => {
        document.querySelector(".paws-mode").style.display = "none";
        document.querySelector(".nose-mode").style.display = "none";
        document.querySelector(".teeth-mode").style.display = "none";
        document.querySelector(".binary-mode").style.display = "none";
        document.querySelector(".ai-mode").style.display = "block";
        document.getElementById("ai-mode").classList.add("active");
        document.getElementById("paws-mode").classList.remove("active");
        document.getElementById("nose-mode").classList.remove("active");
        document.getElementById("teeth-mode").classList.remove("active");
        document.getElementById("binary-mode").classList.remove("active");
    });

    canvas.setLineWidth(5);

    canvas.setOptions({
        language: "en",
        numOfReturn: 1
    });

    // Операции для режима "Лапы"
    document.getElementById("clear-display").addEventListener("click", clearDisplay);
    document.getElementById("backspace").addEventListener("click", backspace);
    document.getElementById("toggle-sign").addEventListener("click", toggleSign);
    document.getElementById("append-colon").addEventListener("click", () => appendToDisplay(':'));
    document.getElementById("append-7").addEventListener("click", () => appendToDisplay('7'));
    document.getElementById("append-8").addEventListener("click", () => appendToDisplay('8'));
    document.getElementById("append-9").addEventListener("click", () => appendToDisplay('9'));
    document.getElementById("append-x").addEventListener("click", () => appendToDisplay('x'));
    document.getElementById("append-4").addEventListener("click", () => appendToDisplay('4'));
    document.getElementById("append-5").addEventListener("click", () => appendToDisplay('5'));
    document.getElementById("append-6").addEventListener("click", () => appendToDisplay('6'));
    document.getElementById("append-minus").addEventListener("click", () => appendToDisplay('-'));
    document.getElementById("append-1").addEventListener("click", () => appendToDisplay('1'));
    document.getElementById("append-2").addEventListener("click", () => appendToDisplay('2'));
    document.getElementById("append-3").addEventListener("click", () => appendToDisplay('3'));
    document.getElementById("append-plus").addEventListener("click", () => appendToDisplay('+'));
    document.getElementById("append-0").addEventListener("click", () => appendToDisplay('0'));
    document.getElementById("append-00").addEventListener("click", () => appendToDisplay('00'));
    document.getElementById("append-comma").addEventListener("click", () => appendToDisplay(','));
    document.getElementById("calculate").addEventListener("click", calculate);
    document.getElementById("calculate-sqrt").addEventListener("click", calculateSqrt);
    document.getElementById("calculate-percent").addEventListener("click", calculatePercent);
    document.getElementById("append-pi").addEventListener("click", () => appendToDisplay('3.14'));

    // Функции для режима "Нос"
    document.getElementById("erase-canvas").addEventListener("click", () => canvas.erase());
    document.getElementById("recognize-canvas").addEventListener("click", recognize);
    document.getElementById("calculate-recognized").addEventListener("click", calculateRecognized);

    // Операции для режима "Зубы"
    document.getElementById("clear-teeth-display").addEventListener("click", clearTeethDisplay);
    document.getElementById("backspace-teeth").addEventListener("click", backspaceTeeth);
    document.getElementById("toggle-teeth-sign").addEventListener("click", toggleteethSign);
    document.getElementById("append-teeth-pi").addEventListener("click", () => appendToTeethDisplay('3.14'));
    document.getElementById("append-teeth-7").addEventListener("click", () => appendToTeethDisplay('7'));
    document.getElementById("append-teeth-8").addEventListener("click", () => appendToTeethDisplay('8'));
    document.getElementById("append-teeth-9").addEventListener("click", () => appendToTeethDisplay('9'));
    document.getElementById("append-teeth-colon").addEventListener("click", () => appendToTeethDisplay(':'));
    document.getElementById("append-teeth-4").addEventListener("click", () => appendToTeethDisplay('4'));
    document.getElementById("append-teeth-5").addEventListener("click", () => appendToTeethDisplay('5'));
    document.getElementById("append-teeth-6").addEventListener("click", () => appendToTeethDisplay('6'));
    document.getElementById("append-teeth-x").addEventListener("click", () => appendToTeethDisplay('x'));
    document.getElementById("append-teeth-1").addEventListener("click", () => appendToTeethDisplay('1'));
    document.getElementById("append-teeth-2").addEventListener("click", () => appendToTeethDisplay('2'));
    document.getElementById("append-teeth-3").addEventListener("click", () => appendToTeethDisplay('3'));
    document.getElementById("append-teeth-minus").addEventListener("click", () => appendToTeethDisplay('-'));
    document.getElementById("append-teeth-0").addEventListener("click", () => appendToTeethDisplay('0'));
    document.getElementById("append-teeth-00").addEventListener("click", () => appendToTeethDisplay('00'));
    document.getElementById("append-teeth-comma").addEventListener("click", () => appendToTeethDisplay(','));
    document.getElementById("append-teeth-plus").addEventListener("click", () => appendToTeethDisplay('+'));
    document.getElementById("append-teeth-and").addEventListener("click", () => appendToTeethDisplay('&'));
    document.getElementById("append-teeth-or").addEventListener("click", () => appendToTeethDisplay('|'));
    document.getElementById("append-teeth-xor").addEventListener("click", () => appendToTeethDisplay('^'));
    document.getElementById("append-teeth-not").addEventListener("click", () => appendToTeethDisplay('~'));
    document.getElementById("calculate-square").addEventListener("click", calculateSquare);
    document.getElementById("calculate-cube").addEventListener("click", calculateCube);
    document.getElementById("calculate-teeth-sqrt").addEventListener("click", calculateSqrt);
    document.getElementById("calculate-teeth").addEventListener("click", calculateTeeth);

    // Операции для режима "Бинарный"
    document.getElementById("clear-binary-display").addEventListener("click", clearBinaryDisplay);
    document.getElementById("backspace-binary").addEventListener("click", backspaceBinary);
    document.getElementById("toggle-binary-sign").addEventListener("click", togglebinarySign);
    document.getElementById("append-binary-plus").addEventListener("click", () => appendToBinaryDisplay('+'));
    document.getElementById("append-binary-1").addEventListener("click", () => appendToBinaryDisplay('1'));
    document.getElementById("append-binary-0").addEventListener("click", () => appendToBinaryDisplay('0'));
    document.getElementById("append-binary-00").addEventListener("click", () => appendToBinaryDisplay('00'));
    document.getElementById("append-binary-minus").addEventListener("click", () => appendToBinaryDisplay('-'));
    document.getElementById("append-binary-multiply").addEventListener("click", () => appendToBinaryDisplay('*'));
    document.getElementById("append-binary-divide").addEventListener("click", () => appendToBinaryDisplay('/'));
    document.getElementById("calculate-binary").addEventListener("click", calculateBinary);

    document.getElementById("send-message").addEventListener("click", sendMessage);

    // Операции для режима "Лапы"
    function clearDisplay() {
        document.getElementById("display").value = '';
    }

    function appendToDisplay(value) {
        document.getElementById("display").value += value;
    }

    function calculate() {
        try {
            let expression = document.getElementById('display').value;
            expression = expression.replace(/(\d+)\s*%\s*([+-/*])\s*(\d+)/g, (match, p1, p2, p3) => {
                const percent = parseFloat(p1) / 100;
                return `(${p3} ${p2} (${p3} * ${percent}))`;
            });
            expression = expression.replace(/x/g, '*');
            expression = expression.replace(/:/g, '/');
            expression = expression.replace(/,/g, '.'); // Заменяем запятую на точку для вычисления

            // Используем math.js для вычисления выражения
            const result = math.evaluate(expression);
            document.getElementById('display').value = result;
        } catch (e) {
            document.getElementById('display').value = 'Ошибка';
        }
    }

    function calculateSqrt() {
        try {
            const currentValue = document.getElementById('display').value;
            const result = Math.sqrt(parseFloat(currentValue.replace(/,/g, '.'))); // Заменяем запятую на точку для вычисления
            document.getElementById('display').value = result;
        } catch (e) {
            document.getElementById('display').value = 'Ошибка';
        }
    }

    function toggleSign() {
        let display = document.getElementById("display");
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }

    function toggleteethSign() {
        let display = document.getElementById("teeth-display");
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }

    function togglebinarySign() {
        let display = document.getElementById("binary-display");
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }

    function calculatePercent() {
        let display = document.getElementById("display");
        let value = parseFloat(display.value) / 100;
        display.value = value;
    }

    function backspace() {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }

    // Функции для режима "Нос"
    function recognize() {
        canvas.recognize();
    }

    function calculateRecognized() {
        const recognizedExpression = sessionStorage.getItem('recognizedExpression');
        if (recognizedExpression) {
            try {
                // Заменяем 'r' перед числом на 'Math.sqrt'
                let expression = recognizedExpression.replace(/v(\d+)/g, 'Math.sqrt($1)');
        
                // Прочие замены для обработки выражений
                expression = expression.replace(/x/g, '*').replace(/:/g, '/');
                expression = expression.replace(/(\d+)\s*%\s*([+-/*])\s*(\d+)/g, (match, p1, p2, p3) => {
                    const percent = parseFloat(p1) / 100;
                    return `(${p3} ${p2} (${p3} * ${percent}))`;
        });
            expression = expression.replace(/,/g, '.'); // Заменяем запятую на точку для вычисления

                // Обрабатываем выражение при помощи math.js
                const result = math.evaluate(expression);
                document.getElementById('calculation-result').innerHTML = `Результат: ${result}`;
            } catch (e) {
                console.error(e);
                document.getElementById('calculation-result').innerHTML = 'Ошибка в примере';
            }
        } else {
            document.getElementById('calculation-result').innerHTML = 'Сначала распознайте пример';
        }
    }

    function appendToTeethDisplay(value) {
        document.getElementById("teeth-display").value += value;
    }

    function clearTeethDisplay() {
        document.getElementById("teeth-display").value = '';
    }

    function calculateTeeth() {
        try {
            let expression = document.getElementById('teeth-display').value;

            // Логические операции
            expression = expression.replace('&', '&&');
            expression = expression.replace('|', '||');
            expression = expression.replace('^', '!==');
            expression = expression.replace('~', '!');
            
            expression = expression.replace(/x/g, '*');
            expression = expression.replace(/:/g, '/');
            expression = expression.replace(/,/g, '.'); // Заменяем запятую на точку для вычисления

            // Используем math.js для вычисления выражения
            const result = math.evaluate(expression);
            document.getElementById('teeth-display').value = result;
        } catch (e) {
            document.getElementById('teeth-display').value = 'Ошибка';
        }
    }

    function backspaceTeeth() {
        let display = document.getElementById("teeth-display");
        display.value = display.value.slice(0, -1);
    }

    // Добавляем функции для x² и x³ в режим "Зубы"
    function calculateSquare() {
        try {
            const currentValue = document.getElementById('teeth-display').value;
            const result = Math.pow(parseFloat(currentValue), 2); // Возведение в квадрат

            document.getElementById('teeth-display').value = result;
        } catch (e) {
            document.getElementById('teeth-display').value = 'Ошибка';
        }
    }

    function calculateCube() {
        try {
            const currentValue = document.getElementById('teeth-display').value;
            const result = Math.pow(parseFloat(currentValue), 3); // Возведение в куб

            document.getElementById('teeth-display').value = result;
        } catch (e) {
            document.getElementById('teeth-display').value = 'Ошибка';
        }
    }

    // Функции для режима "Бинарный"
    function appendToBinaryDisplay(value) {
        document.getElementById("binary-display").value += value;
    }

    function clearBinaryDisplay() {
        document.getElementById("binary-display").value = '';
    }

    function calculateBinary() {
        try {
            let expression = document.getElementById('binary-display').value;
            expression = expression.replace(/,/g, '.'); // Заменяем запятую на точку для вычисления

            // Используем math.js для вычисления выражения
            const result = math.evaluate(expression);
            document.getElementById('binary-result').innerHTML = `Результат: ${result.toString(2)}`;
        } catch (e) {
            document.getElementById('binary-result').innerHTML = 'Ошибка в примере';
        }
    }

    function backspaceBinary() {
        let display = document.getElementById("binary-display");
        display.value = display.value.slice(0, -1);
    }

    // Функция для отправки сообщения в чат
    async function sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (message === '') return;

        const messagesContainer = document.getElementById('chat-messages');
        messagesContainer.innerHTML += `<div><strong>Вы:</strong> ${message}</div>`;
        input.value = '';

        try {
            const response = await fetch('http://d3.aurorix.net:25013/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question: message, model: 'barkgpt' })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Received response from server:", data);
            messagesContainer.innerHTML += `<div><strong>BarkGPT Maths:</strong> ${data.answer}</div>`;
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            messagesContainer.innerHTML += `<div><strong>Ошибка:</strong> Не удалось получить ответ от сервера.</div>`;
        }
    }
});