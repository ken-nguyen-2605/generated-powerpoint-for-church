import axios from "https://cdn.skypack.dev/axios";
/*
Problems: 
1. Press enter to change to the next input field, not to submit if the form is not filled
2. If the form is empty, there might be problem in the backend when processing the data
-> Fix by required attribute in the input field
-> Add default keyword in the form
 */
const form = document.getElementById("my-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  downloadFile(data);
});

const downloadFile = async (data) => {
  try {
    const response = await axios({
      url: "http://localhost:5000/api/download",
      method: "POST",
      responseType: "blob",
      data: data,
    });
    const blob = new Blob([response.data], { type: response.data.type });
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "DEMO.pptx"; // Change the file name as needed

    // Append the anchor to the body
    document.body.appendChild(a);

    // Click the anchor to trigger the download
    a.click();

    // Clean up by removing the anchor and revoking the Blob URL
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("There was a problem with the Axios operation:", error);
  }
};
