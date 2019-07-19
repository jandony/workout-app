// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var nameSearched = $("#name-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + nameSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderWorkouts(data);

  });

});

// When user hits the type-search-btn
$("#type-search-btn").on("click", function() {

  // Save the author they typed into the author-search input
  var typeSearched = $("#type-search").val().trim();

  // Make an AJAX get request to our api, including the user's author in the url
  $.get("/api/type/" + typeSearched, function(data) {

    // Log the data to the console
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderWorkouts(data);

  });

});

// When user hits the wod-search-btn
$("#wod-search-btn").on("click", function() {

  // Save the book they typed into the genre-search input
  var wodSearched = $("#wod-search").val().trim();

  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/wod/" + wodSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderWorkouts(data);

  });

});

function renderWorkouts(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].name + "</h2>");
      div.append("<p>Workout Type: " + data[i].type + "</p>");
      div.append("<p>WOD Name: " + data[i].wod_name + "</p>");
      div.append("<p>Duration: " + data[i].duration + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE WORKOUT</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      $.ajax({
        method: "DELETE",
        url: "/api/workout/" + $(this).attr("data-id")
      })
        // On success, run the following code
        .then(function() {
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}

// Make a get request to our api route that will return every book
$.get("/api/all", function (data) {
    
    var table = $("<table class='table table-sm table-hover'>");
    var tableHead = $("<thead><tr>" + 
    "<th scope='col'>ID</th>" + 
    "<th scope='col'>Name</th>" + 
    "<th scope='col'>Type</th>" + 
    "<th scope='col'>WOD Name</th>" + 
    "<th scope='col'>Duration</th>" + 
    "<th scope='col'></th>" + 
    "</tr></thead>");
    
    table.append(tableHead);

    for (var i = 0; i < data.length; i++) {

        var tableTr = $("<tr>");

        tableTr.append("<th scope='row'>" + data[i].id + "</th>");
        tableTr.append("<td>" + data[i].name + "</td>");
        tableTr.append("<td>" + data[i].type + "</td>");
        tableTr.append("<td> " + data[i].wod_name + "</td>");
        tableTr.append("<td>" + data[i].duration + "</td>");
        tableTr.append("<td>" + "<a href='#'>Edit Workout</a>" + "</td>");
        tableTr.append("</tr>");

        table.append(tableTr);
    }

    $("#workout-table").append(table);
});

/* <table class='table table-sm table-hover'>
  <thead><tr><th scope='col'>ID</th><th scope='col'>Name</th><th scope='col'>Type</th><th scope='col'>WOD Name</th><th scope='col'>Duration</th></tr></thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */
