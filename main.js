var arrayOfQuotes =[
    {
        author: "Oscar Wilde",
        quote : "Be yourself; everyone else is already taken."
    },
    {
        author: "Mahatma Gandhi",
        quote : "Be the change that you wish to see in the world."
    },
    {
        author: "Frank Zappa",
        quote : "So many books, so little time."
    },
    {
        author: "Albert Einstein",
        quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        author: "Marcus Tullius Cicero",
        quote : "A room without books is like a body without a soul."
    }
]


function generatQuote() {
    var randomNum = Math.floor(Math.random()*arrayOfQuotes.length)
    document.getElementById("quote").innerHTML=`"${arrayOfQuotes[randomNum].quote}"`
    document.getElementById("quoteAuthour").innerHTML=`--${arrayOfQuotes[randomNum].author}`
}

