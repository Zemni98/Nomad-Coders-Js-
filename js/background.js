const iamges = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = iamges[Math.floor(Math.random() * iamges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
