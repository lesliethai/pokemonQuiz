$(function () {
// document ready 

    const introBox = document.querySelector(".instructions");
    const quizBox = document.querySelector(".quizContainer");
    const resultsBox = document.querySelector(".results-container")
    const pokemonImg = document.querySelector(".pokemonImg");

    // question and score counter 
    let questionNum = 0;
    let score = 0;
    let index = questionNum; 

    // reset score and number
    function reset() {
        questionNum = 0;
        score = 0;
        $(".button").removeClass("incorrect");
        $(".button").removeClass("correct");
    }

    // click start open quiz page
    $('.startButton').on('click', function(event) {
        event.preventDefault();
        introBox.classList.add("hidden");
        quizBox.classList.add("visible");
        quizQuestions(index);
        reset();
    });

    // if click quit button return to start
    $('.quitButton').on('click', function(event) {
        event.preventDefault();
        quizBox.classList.remove('visible');
        introBox.classList.remove('hidden');
        reset();
    })

    // if click back to main menu
    $('.mainMenu').on('click', function(event) {
        event.preventDefault();
        introBox.classList.remove('hidden');
        resultsBox.classList.remove('visible');
        quizBox.classList.remove('visible');
        reset();
    })

    // clear color on next 
    function clearBoard() {
        $(".button").removeClass("incorrect");
        $(".button").removeClass("correct");
        $('.button').prop('disabled', false);
    };

    // display score
    $('.quizScore').text(`Score: ${score}`); 
    
    // quiz q&a 
    const trivia = [
        {
            number: 1, 
            imgSrc: 'assets/poke1-dragonite.png',
            choices: [
                'Ninetales',
                'Lapras',
                'Charizard',
                'Dragonite'
            ],
            answer: 'Dragonite'
            },
        {
            number: 2,
            imgSrc: 'assets/poke2-dewgong.png',
            choices: [
                'Horsea',
                'Dewgong',
                'Seaking',
                'Clefable'
            ],
            answer: 'Dewgong'
            },
        {   number: 3,
            imgSrc: 'assets/poke3-charizard.png', 
            choices: [
                'Dragonite',
                'Charizard',
                'Arcanine',
                'Pidgeot'
            ],
            answer: 'Charizard'
            },
        {   number: 4,
            imgSrc: 'assets/poke4-aerodactyl.png', 
            choices: [
                'Dragonair',
                'Articuno',
                'Aerodactyl',
                'Golbat'
            ],
            answer: 'Aerodactyl'
            },
        {   number: 5,
            imgSrc: 'assets/poke5-dratini.png', 
            choices: [
                'Dratini',
                'Goldeen',
                'Onix',
                'Grimer'
            ],
            answer: 'Dratini'
            },
        {   number: 6,
            imgSrc: 'assets/poke6-arcanine.png', 
            choices: [
                'Charizard',
                'Arcanine',
                'Ponyta',
                'Primeape'
            ],
            answer: 'Arcanine'
            },
        {   number: 7,
            imgSrc: 'assets/poke7-venomoth.png', 
            choices: [
                'Pidgeotto',
                'Butterfree',
                'Beedrill',
                'Venomoth'
            ],
            answer: 'Venomoth'
            },
        {   number: 8,
            imgSrc: 'assets/poke8-cubone.png', 
            choices: [
                'Muk',
                'Sandshrew',
                'Cubone',
                'Graveler'
            ],
            answer: 'Cubone'
            },
        {   number: 9,
            imgSrc: 'assets/poke9-abra.png', 
            choices: [
                'Vulpix',
                'Spearow',
                'Abra',
                'Bellsprout'
            ],
            answer: 'Abra'
            },
        {   number: 10,
            imgSrc: 'assets/poke10-chansey.png', 
            choices: [
                'Chansey',
                'Clefable',
                'Poliwrath',
                'Cloyster'
            ],
            answer: 'Chansey'
            },
        {   number: 11,
            imgSrc: 'assets/poke11-haunter.png', 
            choices: [
                'Ekans',
                'Haunter',
                'Grimer',
                'Poliwhirl'
            ],
            answer: 'Haunter'
            },
        {   number: 12,
            imgSrc: 'assets/poke12-scyther.png', 
            choices: [
                'Mr. Mime',
                'Kadabra',
                'Hitmonchan',
                'Scyther'
            ],
            answer: 'Scyther'
            },
        {   number: 13,
            imgSrc: 'assets/poke13-rapidash.png', 
            choices: [
                'Rapidash',
                'Arcanine',
                'Charizard',
                'Flareon'
            ],
            answer: 'Rapidash'
            },
        {   number: 14,
            imgSrc: 'assets/poke14-vulpix.png', 
            choices: [
                'Ponyta',
                'Flareon',
                'Magmar',
                'Vulpix'
            ],
            answer: 'Vulpix'
            },
        {   number: 15,
            imgSrc: 'assets/poke15-nidoking.png', 
            choices: [
                'Machamp',
                'Nidoking',
                'Nidoqueen',
                'Alakazam'
            ],
            answer: 'Nidoking'
            },
        {   number: 16,
            imgSrc: 'assets/poke16-clefable.png', 
            choices: [
                'Gengar',
                'Jynx',
                'Chansey',
                'Clefable'
            ],
            answer: 'Clefable'
            },
        {   number: 17,
            imgSrc: 'assets/poke17-oddish.png', 
            choices: [
                'Tangela',
                'Oddish',
                'Voltorb',
                'Horsea'
            ],
            answer: 'Oddish'
            },
        {   number: 18,
            imgSrc: 'assets/poke18-farfetchd.png', 
            choices: [
                'Pidgey',
                'Spearow',
                'Farfetchd',
                'Doduo'
            ],
            answer: 'Farfetchd'
            },
        {   number: 19,
            imgSrc: 'assets/poke19-jynx.png', 
            choices: [
                'Clefable',
                'Mr. Mime',
                'Jynx',
                'Hypno'
            ],
            answer: 'Jynx'
            },
        {   number: 20,
            imgSrc: 'assets/poke20-lapras.png', 
            choices: [
                'Seadra',
                'Gyarados',
                'Lapras',
                'Arbok'
            ],
            answer: 'Lapras'
            }
        ];
        
    // showing quiz questions and answer choices
    function quizQuestions(index) {
            $('.questionCounter').text('Question #' + trivia[index].number + '/20')
            $('.option1').text(trivia[index].choices[0]);
            $('.option2').text(trivia[index].choices[1]); 
            $('.option3').text(trivia[index].choices[2]);
            $('.option4').text(trivia[index].choices[3]);
            pokemonImg.innerHTML = "<img src=" + trivia[index].imgSrc + ">";
            pokemonImg.classList.add("hideImg");
        // end the game bc reached end of questions list
    }

    // clicking next increments index to move to next question
    $('.nextButton').on('click', function(e) {
        e.preventDefault();
        if (questionNum < trivia.length - 1) {
            questionNum++; 
            quizQuestions(questionNum);
            console.log(`current score ${score}`);
            clearBoard();
        } else {
            displayResults();
        }
    });

    // selecting answer 
    $('.button').on('click', function(e) {
        e.preventDefault();
        const answerSelection = e.target.textContent;
        console.log(answerSelection);
        let correctAnswer = trivia[questionNum].answer;
        if (answerSelection === correctAnswer) {
            score++;
            e.target.classList.add('correct');
        } else if (answerSelection !== correctAnswer) {
            e.target.classList.add('incorrect');
        };
        $('.quizScore').text('Score:' + score);
        pokemonImg.classList.remove("hideImg");
        // disable other buttons once one is selected
        $('.button').prop('disabled', true);
    });

    // display results pg
    function displayResults() {
        resultsBox.classList.add("visible");
        quizBox.classList.remove("visible");    
        introBox.classList.remove("visible");
        if (score >= 15) {
            $('.results').text(`Amazing!! You're a walking Pokedex, aren't you? You made it to the end with a high of ${score}/20 points!`); 
        } else if (score <= 14) {
            $('.results').text(`Hmm... You made it to the end with a score of ${score}/20! Better luck next time!`); 
        }; 
    }
});