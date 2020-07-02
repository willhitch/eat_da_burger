$(function () {
  $(".change-devoured").on("click", function (event) {
    event.preventDefault()

    var burgerId = event.currentTarget.attributes[1].nodeValue
    console.log(burgerId)

    var isDevoured = {
      devoured: true,
    }

    $.ajax("/api/burgers/" + burgerId, {
      type: "PUT",
      data: isDevoured,
    }).then(function (res) {
      console.log(res)
      location.reload()
    })
  })

  $(".create-form").on("submit", function (event) {
    event.preventDefault()

    var isDevoured

    $("input[type='radio']").change(function () {
      isDevoured = $(this).val()
    })

    var burger = {
      burger_name: $("#bur").val().trim(),
      devoured: isDevoured,
    }

    $.ajax("/api/burgers", {
      type: "POST",
      data: burger,
    }).then(function (res) {
      console.log(res)
      location.reload()
    })
  })
})
