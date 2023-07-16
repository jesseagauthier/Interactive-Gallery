const images = [
    {
        disc: "Kingston, Ontario",
        sm: "images/sm/sum__(1).jpg",
        lrg: "images/lrg/lrg__(1).jpg"
    },
    {
        disc: "Dublin, Ireland",
        sm: "images/sm/sum__(2).jpg",
        lrg: "images/lrg/lrg__(2).jpg"
    },
    {
        disc: "Dublin, Ireland",
        sm: "images/sm/sum__(3).jpg",
        lrg: "images/lrg/lrg__(3).jpg"
    },
    {
        disc: "Dublin, Ireland",
        sm: "images/sm/sum__(4).jpg",
        lrg: "images/lrg/lrg__(4).jpg"
    },
    {
        disc: "Amsterdam, Netherlands",
        sm: "images/sm/sum__(5).jpg",
        lrg: "images/lrg/lrg__(5).jpg"
    },
    {
        disc: "Ottawa, Ontario",
        sm: "images/sm/sum__(6).jpg",
        lrg: "images/lrg/lrg__(6).jpg"
    },
    {
        disc: "Ottawa, Ontario",
        sm: "images/sm/sum__(7).jpg",
        lrg: "images/lrg/lrg__(7).jpg"
    },
    {
        disc: "Ottawa, Ontario",
        sm: "images/sm/sum__(8).jpg",
        lrg: "images/lrg/lrg__(8).jpg"
    },
    {
        disc: "Ottawa, Ontario",
        sm: "images/sm/sum__(9).jpg",
        lrg: "images/lrg/lrg__(9).jpg"
    },
    {
        disc: "Ottawa, Ontario",
        sm: "images/sm/sum__(10).jpg",
        lrg: "images/lrg/lrg__(10).jpg"
    },
    {
        disc: "Ottawa, Ontario",
        sm: "images/sm/sum__(11).jpg",
        lrg: "images/lrg/lrg__(11).jpg"
    },
    {
        disc: "Las Vegas, Nevada",
        sm: "images/sm/sum__(12).jpg",
        lrg: "images/lrg/lrg__(12).jpg"
    },
    {
        disc: "Las Vegas, Nevada",
        sm: "images/sm/sum__(13).jpg",
        lrg: "images/lrg/lrg__(13).jpg"
    },
    {
        disc: "Ottawa, Ontario",
        sm: "images/sm/sum__(14).jpg",
        lrg: "images/lrg/lrg__(14).jpg"
    },
    {
        disc: "Kingston, Ontario",
        sm: "images/sm/sum__(15).jpg",
        lrg: "images/lrg/lrg__(15).jpg"
    },
    {
        disc: "Lisbon, Portugal",
        sm: "images/sm/sum__(16).jpg",
        lrg: "images/lrg/lrg__(16).jpg"
    },
    {
        disc: "Lisbon, Portugal",
        sm: "images/sm/sum__(17).jpg",
        lrg: "images/lrg/lrg__(17).jpg"
    },
];

function extractImageSize(url) {
    const regex = /__\((\d+)\)/;
    const match = url.match(regex);
    return match ? parseInt(match[1]) : 0;
}

images.sort((a, b) => {
    const aSize = extractImageSize(a.sm);
    const bSize = extractImageSize(b.sm);
    return aSize - bSize;
});

const interactiveGallery = document.getElementById("interactiveGallery");
const largeImageContainer = document.getElementById("largeImageContainer");
const largeImage = document.getElementById("largeImage");
const imgcontents = document.getElementById("imgcontents");

for (const image of images) {
    const imageCard = ` 
    <div class="imagecard">
        <img class="imagesm" src="${image.sm}" alt="${image.disc}" title="${image.disc}" data-lrgimg="${image.lrg}">
    </div>`;
    interactiveGallery.insertAdjacentHTML("beforeend", imageCard);
}

interactiveGallery.addEventListener("click", showLargeImage);

function showLargeImage(e) {
    if (e.target.classList.contains("imagesm")) {
        const smallImage = e.target;
        const largeImageSrc = smallImage.getAttribute("data-lrgimg");
        const imageAlt = smallImage.getAttribute("alt");
        const imageTitle = smallImage.getAttribute("title");

        // Set the large image attributes
        largeImage.setAttribute("src", largeImageSrc);
        largeImage.setAttribute("alt", imageAlt);
        largeImage.setAttribute("title", imageTitle);

        // Set the image title in the container
        imgcontents.querySelector("h2").textContent = imageTitle;
        // Show the large image container
        largeImageContainer.style.display = "inline";
    }
}

// Add event listener to the large image to close it when clicked
largeImage.addEventListener("click", hideLargeImage);

function hideLargeImage() {
    largeImageContainer.style.display = "none";
    largeImage.setAttribute("src", "");
}
