var student={
    firstName:"Danyal",
    lastName:"Asif",
    Age:21,
    enroll_Number:"Fa19-Bcs-031",
    Cgpa:3.10,
    Department: "Computer Science",
    semEster:"6th/A",
    getAll:function(){
        console.log('Name '+this.firstName+" "+this.lastName+'\n'+'Age '+this.Age+'\n'+'Registration number '+this.enroll_Number+'\n'+'Cgpa '+this.Cgpa+'\n'+'Department '+this.Department+'\n'+'Semester '+this.semEster);
    }
}

student.getAll();