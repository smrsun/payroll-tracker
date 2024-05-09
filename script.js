// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data  
// TODO: Get user input to create and return an array of employee objects
// added command prompts array for employee and salary and if else to continue asking for employee info until cancel is pressed.


const collectEmployees = function() {
let infoArray = []

do {
let firstName = prompt('First Name');
let lastName = prompt('Last Name');
let salary = prompt('Salary');

if (isNaN (salary)) {
salary = 0;

} else {
  salary = Number(salary);
}

let employeesTally = {firstName, lastName, salary};
infoArray.push(employeesTally)

} while (confirm ("Would you like to enter another employee?"))
  
  console.log(infoArray)

  return infoArray
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  //set calculation for average salary of employees and show text display for such
let averageSalary = 0;
let totalSalary = 0;
 for (let i = 0; i < employeesArray.length; i++ ) {
totalSalary += employeesArray[i].salary;
 } 
 averageSalary = totalSalary / employeesArray.length;
 averageSalary = averageSalary.toFixed(2);
 console.log(`The average salary of our employees is $${averageSalary}.`);

}

// Select a random employee
 // TODO: Select and display a random employee
 // set function to draw random employee from array and show text in console 
const getRandomEmployee = function(employeesArray) {
const randomNumber = Math.floor(Math.random() * employeesArray.length);
const winner = employeesArray[randomNumber]
console.log('Congratulations to', winner.firstName, winner.lastName, '!');

} 


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = ''; 

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
