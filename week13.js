const birthdayDateInput = document.getElementById("birthdayDate");
const calculateDaysButton = document.getElementById("calculateDaysButton");
const errorMessage = document.getElementById("errorMessage");
const resultMessage = document.getElementById("resultMessage");

    calculateDaysButton.addEventListener("click", () => {
    const today = new Date();
    const selectedDate = new Date(birthdayDateInput.value);
/*Проверка является ли selectedDate числом. 
Если не является, выводится сообщение об ошибке и результат очищается.
Если selectedDate является числом, сообщение об ошибке скрывается.*/
            if (isNaN(selectedDate.getTime())) {
                errorMessage.style.display = "block";
                resultMessage.textContent = "";
            } else {
                errorMessage.style.display = "none";

                // Вычисляем количество миллисекунд до дня рождения
                selectedDate.setFullYear(today.getFullYear()); // Устанавливаем год текущего дня
                if (selectedDate < today) {
                    // Если день рождения уже прошел в текущем году, устанавливаем год следующего
                    selectedDate.setFullYear(today.getFullYear() + 1);
                }
                const timeUntilBirthday = selectedDate - today;

                // Вычисляем количество дней до дня рождения
                const daysUntilBirthday = Math.ceil(timeUntilBirthday / (1000 * 60 * 60 * 24));

                // Определяем правильное склонение слова "день"
                let daysWord;
                if (daysUntilBirthday % 10 === 1 && daysUntilBirthday % 100 !== 11) {
                    daysWord = "день";
                } else if ([2, 3, 4].includes(daysUntilBirthday % 10) && ![12, 13, 14].includes(daysUntilBirthday % 100)) {
                    daysWord = "дня";
                } else {
                    daysWord = "дней";
                }

                // Выводим результат на страницу
                resultMessage.textContent = `До вашего дня рождения осталось ${daysUntilBirthday} ${daysWord}`;
            }
        });