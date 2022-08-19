let employeeData = JSON.parse(sessionStorage.getItem("EmployeeDetails"));
let renderHtmlElement = ``;
let renderHtmlElementEmp = ``;
const htmlElement = document.getElementById("employeeElements");

employeeData.empList.forEach((emp) => {
  renderHtmlElement =
    renderHtmlElement +
    `
  <div class="empDetailsDiv">
        <div class="empNameDiv">
          <div>
            <label for="empId-${emp.id}">UID:</label>
            <input
              type="text"
              id="empId-${emp.id}"
              name="empId-${emp.id}"
              value="${emp.id}"
              readonly
            />
          </div>

          <div>
            <label for="empName-${emp.id}">Name:</label>
            <input
              type="text"
              id="empName-${emp.id}"
              name="empName-${emp.id}"
              value="${emp.name}"
              readonly
            />
          </div>

          <div>
            <label for="empPhone-${emp.id}">Mobile No:</label>
            <input
              type="text"
              id="empPhone-${emp.id}"
              name="empPhone-${emp.id}"
              value="${emp.phone}"
              readonly
            />
          </div>
        </div>        
        <div class="empAttDiv" id="empAttDiv-${emp.id}">`;

  emp.attendance.forEach((att) => {
    for (const attnd in att) {
      let isPresentChecked = false;
      let isAbsentChecked = false;
      if ((att[attnd] == "P")) {
        isPresentChecked = true;
      }

      if ((att[attnd] == "A")) {
        isAbsentChecked = true;
      }

      renderHtmlElement =
        renderHtmlElement +
        `
        <div class="empAttDetails">
        <label for="">${attnd}</label>
        <div>
          <input
            type="checkbox"
            name="${emp.id}-${attnd}-p"
            value="Present"
            id="${emp.id}-${attnd}-p"
            onclick="checkboxClick(this.value,'${emp.id}-${attnd}-p','${emp.id}','${attnd}')"`;

      if (isPresentChecked) {
        renderHtmlElement = renderHtmlElement + `checked`;
      }

      renderHtmlElement =
        renderHtmlElement +
        `
        />
          <label for="${emp.id}-${attnd}-p">Present</label>

          <input
            type="checkbox"
            name="${emp.id}-${attnd}-p"
            value="Absent"
            id="${emp.id}-${attnd}-a"
            onclick="checkboxClick(this.value,'${emp.id}-${attnd}-a','${emp.id}','${attnd}')"`;

      if (isAbsentChecked) {
        renderHtmlElement = renderHtmlElement + `checked`;
      }
      renderHtmlElement =
        renderHtmlElement +
        `
        />
          <label for="${emp.id}-${attnd}-a">Absent</label>
        </div>
      </div>
       `;
    }
  });

  renderHtmlElement =
    renderHtmlElement +
    `</div>
  </div>`;
});

htmlElement.innerHTML = renderHtmlElement;

function checkboxClick(cvalue, cid, uid, date) {
  const isCheckedVal = document.getElementById(cid).checked;
  let selectedBoxval;
  let nearestBoxid;
  if (cvalue === "Present") {
    nearestBoxid = uid + "-" + date + "-" + "a";
    selectedBoxval = "P";
  } else if (cvalue === "Absent") {
    nearestBoxid = uid + "-" + date + "-" + "p";
    selectedBoxval = "A";
  }

  if (!isCheckedVal) {
    selectedBoxval = "NA";
  }

  employeeData.empList.forEach((emp) => {
    if (emp.id == uid) {
      emp.attendance.forEach((att) => {
        for (const attnd in att) {
          if (attnd == date) {
            att[attnd] = selectedBoxval;
          }
        }
      });
    }
  });

  document.getElementById(nearestBoxid).checked = false;

  sessionStorage.setItem("EmployeeDetails", JSON.stringify(employeeData));
}
