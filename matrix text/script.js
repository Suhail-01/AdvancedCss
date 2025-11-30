const para = document.querySelector("p");

const characters = `
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
`.replace(/\s+/g, ""); // removes spaces & newlines → clean character list

const text = para.innerHTML;

para.addEventListener("mouseenter", () => {
    setInterval(() => {
        const str = text.split("").map((char, index) => {
            return characters[Math.floor(Math.random() * characters.length)];
        }).join("");

        para.innerHTML = str; 
    }, 30);
});


