const people = [
    [
        principal = "Joseph Morgan",
        supervisor = "Danielle Gillies",
        teacher = "Emilia Clarke",
        students = ["Elena","Bonnie","Caroline"]
    ],
    [
        principal = "Joseph Morgan",
        supervisor = "Phoebe tonkin",
        teacher = "Kit Harington",
        students = ["Stefan","Damon","Katherine"]
    ],
    [
        principal = "Joseph Morgan",
        supervisor = "Mattew Davis",
        teacher = "Sophie Turner",
        students = ["Hope","Lizzie","Josie"]
    ],
    [
        principal = "Joseph Morgan",
        supervisor = "Natanielle Buzz",
        teacher = "Maize Williams",
        students = ["Hayley","Rebecca","Davina"]
    ],
    [
        principal = "Joseph Morgan",
        supervisor = "Paul Weasely",
        teacher = "Peter Dinklage",
        students = ["April","Matt","Tyler"]
    ]
];


function checkVal(array, value) {
    // `Array#some` loops through the array until the iterator
    // function returns true; it returns true if the iterator
    // does at some point, false otherwise
    return array.some(function(entry) {
      // If this entry in the array is an array, recurse
      if (Array.isArray(entry)) {
        return checkVal(entry, value);
      }
  
      // It isn't, do an equality check
      return entry === value;
    });
  }


function details(){
    var student = document.getElementById("student_name").value;
    if(checkVal(people,student)===true){    
        for(let i=0; i<people.length; i++) {
       for(let k=0; k<people[i][3].length; k++) {
            if(people[i][3][k] == student) {
                document.getElementById("princi").value =  people[i][0];
                document.getElementById("super").value =  people[i][1];
                document.getElementById("teach").value =  people[i][2];
                document.getElementById("stud").value =  people[i][3];
            }
        }
    }
    }else{
        alert("student with the name"+" "+student+" is not found");
    }
}
