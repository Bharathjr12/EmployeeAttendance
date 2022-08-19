google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawChart);

// P A NA

function drawChart() {
  var Finaldata = [];
  Finaldata.push(["Date", "Present", "Absent", "Unknow"]);
  var dates = [];
  var attendanceData = [];
  let employeedetails = sessionStorage.getItem("EmployeeDetails");
  employeedetails = JSON.parse(employeedetails);

  employeedetails.empList.forEach((emp) => {
    if (emp.attendance) {
      emp.attendance.forEach((att) => {
        for (let date in att) {
          if (!dates) {
            dates.push(date);
          } else {
            if (!dates.includes(date)) {
              dates.push(date);
            }
          }
        }
      });
    }
  });

  dates.forEach((date) => {
    let presentCount = 0;
    let absentCount = 0;
    let naCount = 0;
    attendanceData = [];

    employeedetails.empList.forEach((emp) => {
      if (emp.attendance) {
        emp.attendance.forEach((att) => {
          if (att[date] === "P") {
            presentCount += 1;
          } else if (att[date] === "A") {
            absentCount += 1;
          } else if (att[date] === "NA") {
            naCount += 1;
          }
        });
      }
    });

    attendanceData.push(date, presentCount, absentCount, naCount);
    Finaldata.push(attendanceData);
  });


    var data = google.visualization.arrayToDataTable(Finaldata);

    var options = {
      chart: {
        title: "Attendance Details",
        subtitle: "Employee Attencance Details",
      },
    };

    var chart = new google.charts.Bar(
      document.getElementById("columnchart_material")
    );

    chart.draw(data, google.charts.Bar.convertOptions(options));
}
