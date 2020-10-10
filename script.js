const people = [
    [
        principal = "Joseph Morgan",
        supervisor = "Danielle Gillies",
        teacher = ["Emilia Clarke","Brandon Stark","Tyrion Lannister"],
        students = ["Elena","Bonnie","Caroline"]
    ],
    [
        principal = "Freya Mikealson",
        supervisor = "Phoebe tonkin",
        teacher = ["Kit Harington","Arya Stark","Hodor Petrova"],
        students = ["Stefan","Damon","Katherine"]
    ],
    [
        principal = "Alaric Saltzman",
        supervisor = "Mattew Davis",
        teacher = ["Sophie Turner","Marcel Gerard","Joshua"],
        students = ["Hope","Lizzie","Josie"]
    ],
    [
        principal = "Kol Caleb",
        supervisor = "Natanielle Buzz",
        teacher = ["Maize Williams","Cersei Lannister","Michael Wheeler"],
        students = ["Hayley","Rebecca","Davina"]
    ],
    [
        principal = "Henry Marshall",
        supervisor = "Paul Weasely",
        teacher = ["Peter Dinklage","Steve Harington","Nancy Wheeler"],
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
