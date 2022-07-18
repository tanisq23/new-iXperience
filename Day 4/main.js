const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]
   


const guessInput = document.getElementById('guess-input')

const movieIndex = Math.floor(Math.random() * movies.length);

const button = document.getElementById('hintButton')

explanation.innerHTML = movies[movieIndex].explanation;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (guessInput.value == movies[movieIndex].title) {
        result.innerHTML = "You guessed correctly"
        result.classList.remove('alert-danger');
        result.classList.add('alert-success');
    } else{
        result.innerHTML = "You guessed incorrectly, the movie was " + movies[movieIndex].title;
        result.classList.remove('alert-success');
        result.classList.add('alert-danger');
    }
});


button.addEventListener('click', (event) => {
    event.preventDefault();
    hint.innerHTML = movies[movieIndex].hint;
    console.log(movies[movieIndex].hint);
});

