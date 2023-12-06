

let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-img');

function showImage(index) {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = index;
    images[currentImageIndex].style.display = 'block';
}

function showSecondFloor() {
    showImage(1); 
}

function showFirstFloor() {
    showImage(0); 
}


// function previousImage() {
//     let newIndex = currentImageIndex - 1;
//     if (newIndex < 0) newIndex = images.length - 1;
//     showImage(newIndex);
// }

// function nextImage() {
//     let newIndex = currentImageIndex + 1;
//     if (newIndex >= images.length) newIndex = 0;
//     showImage(newIndex);
// }



setInterval(nextImage, 55000);

function nextImage() {
    let newIndex = currentImageIndex + 1;
    if (newIndex >= images.length) newIndex = 0;
    showImage(newIndex);
}

// Search Bar Functions

let items = ["Faculty Room 101", "Lecture Hall A", "Faculty Room 202", "Lecture Hall B","Electrical Engineering Faculty", "Mechanical Engineering Faculty", "Mathematics Faculty", "Computer & Information Science Faculty","Classroom 101","Thermal Systems Lab 128","Classroom102"];

function showSuggestions() {
    let input = document.getElementById("search-bar").value;
    let suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = ""; // Clear the previous suggestions
    if(input === "") {
        suggestionsBox.style.display = "none"; // Hide suggestions if input is empty
        return;
    }

    // Filter items based on user input
    let filteredItems = items.filter(item => item.toLowerCase().includes(input.toLowerCase()));

    // Display each filtered item in the suggestions box
    filteredItems.forEach(item => {
        let div = document.createElement("div");
        div.onclick = function() { selectSuggestion(item); }; // Add click event to select the suggestion
        div.innerText = item;
        suggestionsBox.appendChild(div);
    });

    if(filteredItems.length === 0) {
        suggestionsBox.style.display = "none"; // Hide if no suggestions
    } else {
        suggestionsBox.style.display = "block";
    }
}


function selectSuggestion(item) {
    // ... your existing code ...
    document.getElementById("search-bar").value = item; // Set the input to the selected suggestion
    document.getElementById("suggestions").style.display = "none"; // Hide suggestions box
    // Find the button corresponding to the item and highlight it
    const buttons = document.querySelectorAll("[data-classroom]");
    buttons.forEach(button => {
        // Reset previously selected button
        button.classList.remove("selected");
        if (button.getAttribute("data-classroom") === item) {
            button.classList.add("selected");
        }
    });
}
