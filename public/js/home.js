// Getting all New Athlete form values
  var firstName = $("#firstName").val().trim();
  var lastName = $("#lastName").val().trim();
  var email = $("#email").val().trim();
  var gym = $("#gym").val().trim();
  var athleticLevel = $("#athleticLevel");
  var years = $("#years");

  var newAthleteSubmit = $("#newAthlete-submit");

// Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);

// Gets the part of the url that comes after the "?" (which we have if we're updating user information)
  var url = window.location.search;
  var postId;
  var athleteId;

  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

// If we have this section in our url, we pull out the post id from the url
// In '?post_id=1', postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId, "post");
  }
// Otherwise if we have an athlete_id in our url, preset the athlete select box to be our Athlete
  else if (url.indexOf("?athlete_id=") !== -1) {
    athleteId = url.split("=")[1];
  }

// Getting the athletes
  getAthletes();

// A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();

    // Wont submit the post if we are missing a first/last name, email, or gym input
    if (!firstName.val().trim() || !lastName.val().trim() || !email.val().trim() || !gym.val()) {
      return;
    }

    $.ajax({
        url: url,
        method: "GET"
      })
      .then(function (result) {
        console.log(result.data.url)
        var newAthlete = {
          first_name: firstName.val().trim(),
          last_name: lastName.val().trim(),
          email: email.val().trim(),
          gym: gym.val().trim(),
          level: athleticLevel.val().trim(),
          years: years.val()
        };

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        if (updating) {
          newAthlete.id = postId;
          updatePost(newAthlete);
        } else {
          submitPost(newAthlete);
        }

      });


    // Constructing a newAthlete object to hand to the database

  }

// Submits a new post and brings user to blog page upon completion
  function submitPost(post) {
    $.post("/api/posts", post, function () {
      window.location.href = "/blog";
    });
  }