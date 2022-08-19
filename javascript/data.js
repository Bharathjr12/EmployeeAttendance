if (!sessionStorage.getItem("EmployeeDetails")) {
  sessionStorage.setItem(
    "EmployeeDetails",
    JSON.stringify({
      empList: [
        {
          id: 187188,
          name: "Bharath J R",
          phone: "7411466537",
          attendance: [
            { "08-08-2022": "P" },
            { "09-08-2022": "P" },
            { "10-08-2022": "A" },
            { "11-08-2022": "P" },
            { "12-08-2022": "P" },
          ],
        },
        {
          id: 187189,
          name: "Savi",
          phone: "7411466537",
          attendance: [
            { "08-08-2022": "P" },
            { "09-08-2022": "P" },
            { "10-08-2022": "P" },
            { "11-08-2022": "NA" },
            { "12-08-2022": "P" },
          ],
        },
        {
          id: 187190,
          name: "Ranga",
          phone: "7411466537",
          attendance: [
            { "08-08-2022": "P" },
            { "09-08-2022": "P" },
            { "10-08-2022": "P" },
            { "11-08-2022": "P" },
            { "12-08-2022": "P" },
          ],
        },
        {
          id: 187191,
          name: "Mad",
          phone: "7411466537",
          attendance: [
            { "08-08-2022": "P" },
            { "09-08-2022": "P" },
            { "10-08-2022": "A" },
            { "11-08-2022": "P" },
            { "12-08-2022": "P" },
          ],
        },
        {
          id: 187192,
          name: "Maddie",
          phone: "7411466537",
          attendance: [
            { "08-08-2022": "P" },
            { "09-08-2022": "P" },
            { "10-08-2022": "P" },
            { "11-08-2022": "P" },
            { "12-08-2022": "P" },
          ],
        },
      ],
    })
  );
}