const minNumber = 0;
const maxNumber = 100;  
const attemptsCount = 10;

            const getRandomNumber = () => {
            const randomNumber = Math.round(Math.random() * 100)
            return randomNumber;
            };

            const randomNumber = getRandomNumber()
            console.log(randomNumber);
    



            const getPlayerName = () => {
            const playerName = prompt("Введите ваше имя" , "");
            return playerName;
            }

            const playerName = getPlayerName();
            console.log(playerName);



            const bigGame = (min, max, attempts, randomNum, player) => {
            alert(`Привет, ${player}!
            Я загадал число в диапазоне от ${min} до ${max}.
            У тебя есть ${attempts} попыток, отгадать его.
            Если готов, давай попробуем
            `)
            for (let index = 1; index <= attempts; index++) {
            const answer = prompt("Давай твой вариант", "Введи чисто");
            if(answer < randomNum){
                alert(`Я загадал число больше у тебя осталось ${attempts - index} поппыток`)
            } else if (answer > randomNum) {
                alert(`Я загадал число меньше у тебя осталось ${attempts - index} попыток`)
            } else {
                alert("Поздравляю")
                return 
            }
            };
            alert(`Оонет`)
    };
    bigGame(minNumber, maxNumber, attemptsCount, randomNumber, playerName);