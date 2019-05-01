function getReserve() {
  $.ajax({
    url: "/api/reservation"
  }).then(data => {
    var tables = $("#reservations");
    data.forEach((reserve, i) => {
      var table = $("<div>");
      var tableNum = $("<h3>").text(`Table #${i + 1}`);
      var id = $("<h4>").text(`ID: ${reserve.id}`);
      var name = $("<h4>").text(`Name: ${reserve.name}`);
      var email = $("<h4>").text(`Email: ${reserve.email}`);
      var phone = $("<h4>").text(`Phone: ${reserve.number}`);
      table.append(tableNum, id, name, email, phone);

      tables.append(table);
    });
  });
}

function getWaitlist() {
  $.ajax({
    url: "/api/waitlist"
  }).then(data => {
    var tables = $("#wait-list");
    data.forEach((reserve, i) => {
      var table = $("<div>");
      var tableNum = $("<h3>").text(`Table #${i + 1}`);
      var id = $("<h4>").text(`ID: ${reserve.id}`);
      var name = $("<h4>").text(`Name: ${reserve.name}`);
      var email = $("<h4>").text(`Email: ${reserve.email}`);
      var phone = $("<h4>").text(`Phone: ${reserve.number}`);
      table.append(tableNum, id, name, email, phone);

      tables.append(table);
    });
  });
}

$(document).ready(() => {
  if (window.location.href.includes("/tables")) {
    getReserve();
    getWaitlist();
  }
});
