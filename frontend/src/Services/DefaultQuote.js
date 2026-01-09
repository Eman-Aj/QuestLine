//Currently Facing the issue of quotes not loading in correctly
//Presentability, just loading them in by hard copy.
const quotes = [
    {
        "q": "Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.",
        "a": "Zig Ziglar",
        "c": "95",
        "h": "<blockquote>&ldquo;Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
    },
    {
        "q": "The universe doesn't allow perfection.",
        "a": "Stephen Hawking",
        "c": "38",
        "h": "<blockquote>&ldquo;The universe doesn't allow perfection.&rdquo; &mdash; <footer>Stephen Hawking</footer></blockquote>"
    },
    {
        "q": "Identification with our mind causes thought to become compulsive.",
        "a": "Eckhart Tolle",
        "c": "65",
        "h": "<blockquote>&ldquo;Identification with our mind causes thought to become compulsive.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"
    },
    {
        "q": "You must learn to let go. Release the stress. You were never in control anyway.",
        "a": "Steve Maraboli",
        "c": "79",
        "h": "<blockquote>&ldquo;You must learn to let go. Release the stress. You were never in control anyway.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>"
    },
    {
        "q": "You live by what you thrill to, and there's the end of it.",
        "a": "D. H. Lawrence",
        "c": "58",
        "h": "<blockquote>&ldquo;You live by what you thrill to, and there's the end of it.&rdquo; &mdash; <footer>D. H. Lawrence</footer></blockquote>"
    },
    {
        "q": "There is no such thing as a great talent without great willpower.",
        "a": "Honore de Balzac",
        "c": "65",
        "h": "<blockquote>&ldquo;There is no such thing as a great talent without great willpower.&rdquo; &mdash; <footer>Honore de Balzac</footer></blockquote>"
    },
    {
        "q": "Only put off until tomorrow what you are willing to die having left undone.",
        "a": "Pablo Picasso",
        "c": "75",
        "h": "<blockquote>&ldquo;Only put off until tomorrow what you are willing to die having left undone.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>"
    },
    {
        "q": "I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
        "a": "Elon Musk",
        "c": "146",
        "h": "<blockquote>&ldquo;I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
    },
    {
        "q": "Each of us is a unique strand in the intricate web of life and here to make a contribution.",
        "a": "Deepak Chopra",
        "c": "91",
        "h": "<blockquote>&ldquo;Each of us is a unique strand in the intricate web of life and here to make a contribution.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>"
    },
    {
        "q": "It is better to light a single candle than to curse the darkness.",
        "a": "Eleanor Roosevelt",
        "c": "65",
        "h": "<blockquote>&ldquo;It is better to light a single candle than to curse the darkness.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "To be of use to the world is the only way to be happy.",
        "a": "Hans Christian Andersen",
        "c": "54",
        "h": "<blockquote>&ldquo;To be of use to the world is the only way to be happy.&rdquo; &mdash; <footer>Hans Christian Andersen</footer></blockquote>"
    },
    {
        "q": "Most people fail in life because they major in minor things.",
        "a": "Tony Robbins",
        "c": "60",
        "h": "<blockquote>&ldquo;Most people fail in life because they major in minor things.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
    },
    {
        "q": "You become stronger with every problem you face and every obstacle you overcome.",
        "a": "Celestine Chua",
        "c": "80",
        "h": "<blockquote>&ldquo;You become stronger with every problem you face and every obstacle you overcome.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"
    },
    {
        "q": "How to get more opportunity: Create more opportunity for others.",
        "a": "Jack Butcher",
        "c": "64",
        "h": "<blockquote>&ldquo;How to get more opportunity: Create more opportunity for others.&rdquo; &mdash; <footer>Jack Butcher</footer></blockquote>"
    },
    {
        "q": "Little by little, one travels far.",
        "a": "J.R.R. Tolkien",
        "c": "34",
        "h": "<blockquote>&ldquo;Little by little, one travels far.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
    },
    {
        "q": "Life is not always a matter of holding good cards, but sometimes, playing a poor hand well. ",
        "a": "Jack London",
        "c": "92",
        "h": "<blockquote>&ldquo;Life is not always a matter of holding good cards, but sometimes, playing a poor hand well. &rdquo; &mdash; <footer>Jack London</footer></blockquote>"
    },
    {
        "q": "All we have to decide is what to do with the time that is given to us.",
        "a": "J.R.R. Tolkien",
        "c": "70",
        "h": "<blockquote>&ldquo;All we have to decide is what to do with the time that is given to us.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
    },
    {
        "q": "Tension is who you think you should be. Relaxation is who you are.",
        "a": "Chinese Proverb",
        "c": "66",
        "h": "<blockquote>&ldquo;Tension is who you think you should be. Relaxation is who you are.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
    },
    {
        "q": "The salvation of the world lies in the human heart.",
        "a": "Vaclav Havel",
        "c": "51",
        "h": "<blockquote>&ldquo;The salvation of the world lies in the human heart.&rdquo; &mdash; <footer>Vaclav Havel</footer></blockquote>"
    },
    {
        "q": "The more I want to get something done, the less I call it work.",
        "a": "Richard Bach",
        "c": "63",
        "h": "<blockquote>&ldquo;The more I want to get something done, the less I call it work.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
    },
    {
        "q": "All religions, arts and sciences are branches of the same tree. ",
        "a": "Albert Einstein",
        "c": "64",
        "h": "<blockquote>&ldquo;All religions, arts and sciences are branches of the same tree. &rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>"
    },
    {
        "q": "Those who look for the bad in people will surely find it.",
        "a": "Abraham Lincoln",
        "c": "57",
        "h": "<blockquote>&ldquo;Those who look for the bad in people will surely find it.&rdquo; &mdash; <footer>Abraham Lincoln</footer></blockquote>"
    },
    {
        "q": "The scariest monsters are the ones that lurk within our souls.",
        "a": "Edgar Allan Poe",
        "c": "62",
        "h": "<blockquote>&ldquo;The scariest monsters are the ones that lurk within our souls.&rdquo; &mdash; <footer>Edgar Allan Poe</footer></blockquote>"
    },
    {
        "q": "The highest form of ignorance is when you reject something you don't know anything about. ",
        "a": "Wayne Dyer",
        "c": "90",
        "h": "<blockquote>&ldquo;The highest form of ignorance is when you reject something you don't know anything about. &rdquo; &mdash; <footer>Wayne Dyer</footer></blockquote>"
    },
    {
        "q": "You can't make someone feel good about themselves until you feel good about yourself.",
        "a": "Robin Sharma",
        "c": "85",
        "h": "<blockquote>&ldquo;You can't make someone feel good about themselves until you feel good about yourself.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
    },
    {
        "q": "Everyone must choose one of two pains: The pain of discipline or the pain of regret.",
        "a": "Jim Rohn",
        "c": "84",
        "h": "<blockquote>&ldquo;Everyone must choose one of two pains: The pain of discipline or the pain of regret.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
    },
    {
        "q": "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.",
        "a": "Elbert Hubbard",
        "c": "103",
        "h": "<blockquote>&ldquo;One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.&rdquo; &mdash; <footer>Elbert Hubbard</footer></blockquote>"
    },
    {
        "q": "Your mind is infinite, it's your doubts that are limiting.",
        "a": "Robert Kiyosaki",
        "c": "58",
        "h": "<blockquote>&ldquo;Your mind is infinite, it's your doubts that are limiting.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>"
    },
    {
        "q": "Do not look for approval except for the consciousness of doing your best.",
        "a": "Andrew Carnegie",
        "c": "73",
        "h": "<blockquote>&ldquo;Do not look for approval except for the consciousness of doing your best.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>"
    },
    {
        "q": "A person who does not read is no better than one cannot read.",
        "a": "Earl Nightingale",
        "c": "61",
        "h": "<blockquote>&ldquo;A person who does not read is no better than one cannot read.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>"
    },
    {
        "q": "If you get up one more time than you fall, you will make it through.",
        "a": "Chinese Proverb",
        "c": "68",
        "h": "<blockquote>&ldquo;If you get up one more time than you fall, you will make it through.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
    },
    {
        "q": "To lead the people, walk behind them.",
        "a": "Lao Tzu",
        "c": "37",
        "h": "<blockquote>&ldquo;To lead the people, walk behind them.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
    },
    {
        "q": "We are born from a quiet sleep, and we die to a calm awakening",
        "a": "Zhuangzi",
        "c": "62",
        "h": "<blockquote>&ldquo;We are born from a quiet sleep, and we die to a calm awakening&rdquo; &mdash; <footer>Zhuangzi</footer></blockquote>"
    },
    {
        "q": "I take the position that I'm always to some degree wrong, and the aspiration is to be less wrong.",
        "a": "Elon Musk",
        "c": "97",
        "h": "<blockquote>&ldquo;I take the position that I'm always to some degree wrong, and the aspiration is to be less wrong.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
    },
    {
        "q": "There is no absolute success in the world, only constant progress.",
        "a": "Jonathan Swift",
        "c": "66",
        "h": "<blockquote>&ldquo;There is no absolute success in the world, only constant progress.&rdquo; &mdash; <footer>Jonathan Swift</footer></blockquote>"
    },
    {
        "q": "One of the keys to happiness is a bad memory.",
        "a": "Rita Mae Brown",
        "c": "45",
        "h": "<blockquote>&ldquo;One of the keys to happiness is a bad memory.&rdquo; &mdash; <footer>Rita Mae Brown</footer></blockquote>"
    },
    {
        "q": "Life is much more successfully looked at from a single window.",
        "a": "F. Scott Fitzgerald",
        "c": "62",
        "h": "<blockquote>&ldquo;Life is much more successfully looked at from a single window.&rdquo; &mdash; <footer>F. Scott Fitzgerald</footer></blockquote>"
    },
    {
        "q": "Inspire yourself to be great. Being good isn't good enough.",
        "a": "Gurbaksh Chahal",
        "c": "59",
        "h": "<blockquote>&ldquo;Inspire yourself to be great. Being good isn't good enough.&rdquo; &mdash; <footer>Gurbaksh Chahal</footer></blockquote>"
    },
    {
        "q": "You may delay, but time will not.",
        "a": "Benjamin Franklin",
        "c": "33",
        "h": "<blockquote>&ldquo;You may delay, but time will not.&rdquo; &mdash; <footer>Benjamin Franklin</footer></blockquote>"
    },
    {
        "q": "We lie the loudest when we lie to ourselves.",
        "a": "Eric Hoffer",
        "c": "44",
        "h": "<blockquote>&ldquo;We lie the loudest when we lie to ourselves.&rdquo; &mdash; <footer>Eric Hoffer</footer></blockquote>"
    },
    {
        "q": "Life is a process. We are a process. The universe is a process.",
        "a": "Anne Wilson Schaef",
        "c": "63",
        "h": "<blockquote>&ldquo;Life is a process. We are a process. The universe is a process.&rdquo; &mdash; <footer>Anne Wilson Schaef</footer></blockquote>"
    },
    {
        "q": "I know not all that may be coming, but be it what it will, I'll go to it laughing.",
        "a": "Herman Melville",
        "c": "82",
        "h": "<blockquote>&ldquo;I know not all that may be coming, but be it what it will, I'll go to it laughing.&rdquo; &mdash; <footer>Herman Melville</footer></blockquote>"
    },
    {
        "q": "Your happiness is what truly matters most. Do what you have to do in order to be happy.",
        "a": "Brian Tracy",
        "c": "87",
        "h": "<blockquote>&ldquo;Your happiness is what truly matters most. Do what you have to do in order to be happy.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
    },
    {
        "q": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "a": "Ralph Waldo Emerson",
        "c": "110",
        "h": "<blockquote>&ldquo;To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.&rdquo; &mdash; <footer>Ralph Waldo Emerson</footer></blockquote>"
    },
    {
        "q": "By changing nothing, nothing changes.",
        "a": "Celestine Chua",
        "c": "37",
        "h": "<blockquote>&ldquo;By changing nothing, nothing changes.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"
    },
    {
        "q": "The first man gets the oyster, the second man gets the shell.",
        "a": "Andrew Carnegie",
        "c": "61",
        "h": "<blockquote>&ldquo;The first man gets the oyster, the second man gets the shell.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>"
    },
    {
        "q": "Just throw away all thoughts of imaginary things, and stand firm in that which you are.",
        "a": "Kabir",
        "c": "87",
        "h": "<blockquote>&ldquo;Just throw away all thoughts of imaginary things, and stand firm in that which you are.&rdquo; &mdash; <footer>Kabir</footer></blockquote>"
    },
    {
        "q": "People seldom do what they believe in. They do what is convenient, then repent.",
        "a": "Bob Dylan",
        "c": "79",
        "h": "<blockquote>&ldquo;People seldom do what they believe in. They do what is convenient, then repent.&rdquo; &mdash; <footer>Bob Dylan</footer></blockquote>"
    },
    {
        "q": "I am who I am today because of the choices I made yesterday.",
        "a": "Eleanor Roosevelt",
        "c": "60",
        "h": "<blockquote>&ldquo;I am who I am today because of the choices I made yesterday.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "Faith is taking the first step even when you don't see the whole staircase.",
        "a": "Martin Luther King, Jr.",
        "c": "75",
        "h": "<blockquote>&ldquo;Faith is taking the first step even when you don't see the whole staircase.&rdquo; &mdash; <footer>Martin Luther King, Jr.</footer></blockquote>"
    }
]

export default quotes