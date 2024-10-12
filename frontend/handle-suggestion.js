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
  nhaple: [],
  dangle: [],
  hieple: [],
  chame: [],
  ketle: [],
};
// Beware of not matching part -> suggestionsData[song.part] will be undefined
fetchAllSuggestions().then((res) => {
  res.data.map((song) => {
    suggestionsData[song.part].unshift(song.name);
  });
});

console.log(suggestionsData);

const fieldIds = ["nhaple", "dangle", "hieple", "chame", "ketle"];
const suggestionsIds = fieldIds.map((id) => `${id}-suggestion`);
// Function to handle autocomplete
/*
KHI NHẤN ENTER, FORM TỰ ĐỘNG SUBMIT?
*/

function setupAutocomplete(fieldId, suggestionsId) {
  const input = document.getElementById(fieldId);
  const suggestionBox = document.getElementById(suggestionsId);
  const suggestions = suggestionsData[fieldId] || [];
  // "input" fired when a value is typed into the field
  input.addEventListener("input", function () {
    // To remove diacritics from the input value
    const query = removeVietnameseDiacritics(this.value.toLowerCase());
    suggestionBox.innerHTML = "";
    if (!query) return; // If the input is empty, do nothing
    const filtered = suggestions.filter((item) => {
      return removeVietnameseDiacritics(item.toLowerCase()).includes(query);
    });
    // Add "Khác..." to the filtered suggestions no matter what the query is
    filtered.push("Khác...");
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

  // Close suggestion box when clicking outside
  document.addEventListener("click", function (e) {
    if (!document.getElementById(fieldId).contains(e.target)) {
      suggestionBox.innerHTML = "";
    }
  });
}

// Initialize autocomplete for fields 6-10
for (let i = 0; i < 5; i++) {
  setupAutocomplete(fieldIds[i], suggestionsIds[i]);
}

// Handle form submission
// document.getElementById("my-form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   // You can handle form data here
//   alert("Form submitted successfully!");
// });
