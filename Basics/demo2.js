class Employee
{
    constructor(eid,ename,esalary)
    {
        this.eid=eid
        this.ename=ename
        this.esalary=esalary
    }
    display()
    {
        console.log("Employee Id: "+this.eid)
        console.log("Employee name: "+this.ename)
        console.log("Employee salary: "+this.esalary)
    }
}
let em=new Employee(1,"Shiva",90000)
em.display()