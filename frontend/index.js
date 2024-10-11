const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
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
    a.download = "example.pptx"; // Change the file name as needed

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
