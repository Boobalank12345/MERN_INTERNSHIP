
// with return and with parameter
function SECE(dept){
    console.log("The dept is",dept)
    return "Section of the department is A"
}
console.log(SECE("CSE"));

// With return and without parameter function
function SECE() {
    const dept = "CSE";
    console.log("The dept is", dept);
    return "Section of the department is A";
}

// Calling the function and logging the result
console.log(SECE());

// Without return and with parameter function
function SECE(dept) {
    console.log("The dept is", dept);
    console.log("Section of the department is A");
}

SECE("CSE");

// Without return and without parameter function

function SECE() {
    const dept = "CSE";
    console.log("The dept is", dept);
    console.log("Section of the department is A");
}

SECE();

