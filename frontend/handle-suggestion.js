// Placeholder for autocomplete suggestions
import axios from "https://cdn.skypack.dev/axios";

function removeVietnameseDiacritics(str) {
	return str
		.normalize("NFD") // Decompose Unicode characters
		.replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
		.replace(/đ/g, "d") // Replace 'đ' with 'd'
		.replace(/Đ/g, "D"); // Replace 'Đ' with 'D'
}

const fetchAllSuggestions = async () => {
	try {
		const response = await axios.get("http://localhost:5000/api/songs/all");
		return response.data;
	} catch (error) {
		console.error("There was a problem with the Axios operation:", error);
	}
};

const suggestionsData = {
	nhaple: ["Khác..."],
	dangle: ["Khác..."],
	hieple: ["Khác..."],
	chame: ["Khác..."],
	ketle: ["Khác..."],
};
// Beware of not matching part -> suggestionsData[song.part] will be undefined
fetchAllSuggestions().then((res) => {
	res.data.forEach((song) => {
		suggestionsData[song.part].unshift(song.name);
	});
});

const fieldIds = ["nhaple", "dangle", "hieple", "chame", "ketle"];
const suggestionsIds = fieldIds.map((id) => `${id}-suggestion`);
let currentSuggestionBox = null;
let currentField = null;
// Function to handle autocomplete
/*
KHI NHẤN ENTER, FORM TỰ ĐỘNG SUBMIT?
*/


function setupAutocomplete(fieldId, suggestionsId) {
	const input = document.getElementById(fieldId);
	const suggestionBox = document.getElementById(suggestionsId);
	const suggestions = suggestionsData[fieldId] || [];
	// "input" fired when a value is typed into the field
  ["focus", "input"].forEach((event) => {
    input.addEventListener(event, function () {
      if (currentSuggestionBox && currentSuggestionBox !== suggestionBox) {
        currentSuggestionBox.innerHTML = "";
      }
      currentSuggestionBox = suggestionBox;
      currentField = fieldId;
      // To remove diacritics from the input value
      const query = removeVietnameseDiacritics(this.value.toLowerCase());
      suggestionBox.innerHTML = "";
      // If the input is empty, show all suggestions and "Khác..."
      let filtered = suggestions;
      if (query) {
        filtered = suggestions.filter((item) => {
          return (
            removeVietnameseDiacritics(item.toLowerCase()).includes(
              query
            ) || (item === "Khác...")
          );
        });
      }
      console.log("filtered: ", filtered);
      filtered.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.textContent = item;
        if (item === "Khác...") {
          div.style.fontStyle = "italic";
        }
        // Handle click event on the suggestion
        div.addEventListener("click", function () {
          input.value = item;
          suggestionBox.innerHTML = ""; // Clear the suggestion box when an item is selected
        });
        suggestionBox.appendChild(div); // Add the suggestion to the suggestion box
      });
    });
  });

	
	
}

// Close suggestion box when clicking outside
document.addEventListener('click', function(e){   
  if (!currentField) {
    return;
  }
  if (!document.getElementById(currentField).contains(e.target)) {
    document.getElementById(`${currentField}-suggestion`).innerHTML = "";
    currentField = null;
  }
});

// Initialize autocomplete for fields 6-10
for (let i = 0; i < 5; i++) {
	setupAutocomplete(fieldIds[i], suggestionsIds[i]);
}

// // Debounce function
// function debounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func.apply(this, args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, delay);
//   };
// }
