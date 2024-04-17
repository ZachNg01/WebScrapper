// Wait for the document to be ready
$(document).ready(function() {
  // URL of the webpage you want to extract elements from
  var url = "https://www.domain.com.au/sold-listings/melbourne-region-vic/?excludepricewithheld=1";

  // Fetch the content of the webpage using AJAX
  $.ajax({
      url: url,
      method: "GET",
      success: function(response) {
          // Create a jQuery object from the response HTML
          var $html = $(response);

          // Create a string to hold the extracted elements
          var elementsString = "";

          // Select all elements in the response HTML
          $html.find("*").each(function() {
              // Add the tag name of each element to the string
              elementsString += $(this).prop("tagName") + "\n";
          });

          // Create a Blob object containing the elements string
          var blob = new Blob([elementsString], { type: "text/plain" });

          // Create a link element to trigger the download
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "extracted_elements.txt";

          // Trigger the download
          link.click();
      },
      error: function(xhr, status, error) {
          // Handle errors
          console.error("Error fetching webpage:", error);
      }
  });
});
