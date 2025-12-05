
    // Greek-themed questions
    const questions = [
        {
            question: "Who is the Greek God of the sea?",
            options: ["ZEUS", "POSEIDON", "HADES", "APOLLO"],
            answer: "POSEIDON"
        },
        {
            question: "Who is the Goddess of Wisdom?",
            options: ["ATHENA", "HERA", "APHRODITE", "DEMETER"],
            answer: "ATHENA"
        },
        {
            question: "Which hero completed the Twelve Labors?",
            options: ["ODYSSEUS", "ACHILLES", "HERACLES", "PERSEUSE"],
            answer: "HERACLES"
        },
        {
            question: "Which city-state was known for its warriors?",
            options: ["ATHENS", "SPARTA", "CORINTH", "DELPHI"],
            answer: "SPARTA"
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const scoreEl = document.getElementById('score');
    const startBtn = document.getElementById('startBtn');

    function startGame() {
        startBtn.style.display = 'none';
        score = 0;
        currentQuestion = 0;
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestion >= questions.length) {
            questionEl.innerText = "Game Over!";
            optionsEl.innerHTML = "";
            scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
            startBtn.innerText = "Play Again";
            startBtn.style.display = 'inline-block';
            return;
        }

        const q = questions[currentQuestion];
        questionEl.innerText = q.question;
        optionsEl.innerHTML = "";

        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerText = option;
            btn.onclick = () => checkAnswer(option);
            optionsEl.appendChild(btn);
        });
    }

    function checkAnswer(selected) {
        if (selected === questions[currentQuestion].answer) {
            alert("TAMA KA BRAD!");
            score++;
        } else {
            alert(`ARAY KO !!!!!!!! The correct answer is ${questions[currentQuestion].answer}.`);
        }
        currentQuestion++;
        showQuestion();
    }

    startBtn.addEventListener('click', startGame);
