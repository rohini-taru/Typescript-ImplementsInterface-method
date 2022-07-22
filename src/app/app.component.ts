import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}

/* 
Suppose this is a requirement in a project, what will you do?

CREATE AN INTERFACE NAMED ‘PERSON’ HAVING 3 PROPERTIES: fname, lname, title and 1 getter that will return the full name.
CREATE 2 CLASSES NAMED ‘EMP’ & ‘CUST’ FROM THIS INTERFACE: class Emp; class Cust
Create 1 Employee using the "Emp" class
Create 1 Customer using the "Cust" class
*/

interface Person {
  fname: string;
  lname: string;
  title: string;
  getFullName: () => string;
}

class EMP implements Person {
  fname: string;
  lname: string;
  title: string;
  constructor(f: string, l: string, t: string) {
    this.fname = f;
    this.lname = l;
    this.title = t;
  }
  getFullName(): string {
    var res = this.fname + ' ' + this.lname;
    console.log(res);
    return res;
  }
}
var Emp = new EMP('rohini', 'fulpagare', 'consultant');
Emp.getFullName();

class CUST {
  fname: string;
  lname: string;
  title: string;
  constructor(f: string, l: string, t: string) {
    this.fname = f;
    this.lname = l;
    this.title = t;
  }
  getFullName(): string {
    var res = this.fname + ' ' + this.lname;
    console.log(res);
    return res;
  }
}
var Cust = new CUST('john', 'smith', 'client');
Cust.getFullName();
