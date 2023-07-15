/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee)=>{
      if(employee.profession == "developer"){
          console.log(employee);
      }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee)=>{
      if (employee.profession == 'developer') {
          console.log(employee)
      }
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const removedEmployees = arr.filter((employee)=>{
      return employee.profession=="admin";
  })
  console.log(removedEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmployees = [
      { id: 4, name: "arush", age: "25", profession: "developer" },
      { id: 5, name: "rahul", age: "23", profession: "developer" },
      { id: 6, name: "komal", age: "19", profession: "admin" },
  ];
  let concatenatedArray = arr.concat(newEmployees)
  console.log(concatenatedArray);

}