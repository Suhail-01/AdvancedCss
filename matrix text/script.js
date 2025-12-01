const para = document.querySelector("p");

const characters = `
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
`.replace(/\s+/g, ""); // removes spaces & newlines → clean character list
const text = para.innerHTML;
let itration = 0;
para.addEventListener("mouseenter", () => {
    setInterval(() => {
        const str = text.split("").map((char, index) => {
            if(index < itration){
                return char
            }
            return characters[Math.floor(Math.random() * characters.length)];
        }).join("");
        para.innerHTML = str; 
        itration += 0.2;
    }, 30);
});


