// Array of arr
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  //employees which have the profession of developer using the map function.
  function PrintDeveloperbyMap() {
    const developers = arr.filter(employee => employee.profession === "developer");
    developers.map(developer => console.log(developer));
  }
  
  
  //employees which have the profession of developer using the for each function.
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  // Add a new employee to the array
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
  // Remove arr with profession "admin" from the array
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== "admin");
    console.log(arr);
  }
  
  // Concatenate two arrays
  function ConcatenateArray() {
    const newArray = [
      { id: 4, name: "suraj", age: "22", profession: "SDE" },
      { id: 5, name: "pankaj", age: "24", profession: "designer" },
      { id: 6, name: "sagar", age: "21", profession: "intern" }
    ];
  
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }
  