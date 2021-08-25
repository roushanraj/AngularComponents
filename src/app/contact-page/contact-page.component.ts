import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  students: Student[] = [];
  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(){
    this.httpclient.get<any>('http://localhost:9876/students').subscribe(
      response => {
        console.log(response);
        this.students=response;
      }
    );
  }

}

export class Student {
  constructor(
    public name: string,
    public rollNo: number,
    public standard: number,
    public admYear: number
  ){}
}

