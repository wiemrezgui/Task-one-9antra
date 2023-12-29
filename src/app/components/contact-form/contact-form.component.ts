import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm !: FormGroup
  constructor(private fb: FormBuilder) { }
ngOnInit(){
this.contactForm =this.fb.group({
  Name: ['', Validators.required],
  email: ['', [Validators.email, Validators.required]],
  message: ['',[ Validators.required,Validators.minLength(3)]]
})
}
sendData(){
  alert("Your Data Have Been Sent")
}
}
