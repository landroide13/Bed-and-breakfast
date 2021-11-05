
$("#btn").click(function () {
  $("#room").load("rooms.txt", function (responseTxt, statusTxt, xhr) {
    if (statusTxt == "success");
    if (statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});



















