const quotes = [
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "Innovation distinguishes between a leader and a follower.",
    "The people who are crazy enough to think they can change the world are the ones who do.",
    "Design is not just what it looks like and feels like. Design is how it works.",
    "I’m convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}
