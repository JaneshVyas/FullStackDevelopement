class Student {
    constructor(rollno, firstname, lastname) {
        this.rollno=rollno;
        this.firstname=firstname;
        this.lastname=lastname;
    }

    get fullname() {
        return `${this.rollno} ${this.firstname} ${this.lastname}`;
    }

    set fullname(value) {
        [this.rollno, this.firstname, this.lastname]=value.split(" ");
    }
}

function display() {
    var fullname=document.getElementById("rollno").value+" "+document.getElementById("firstname").value+" "+document.getElementById("lastname").value;
    var student=new Student(1, "Raj", "Sharma");
    student.fullname=fullname;
    alert(student.fullname);
}