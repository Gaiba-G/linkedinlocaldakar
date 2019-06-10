import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PaiementService } from '../paiement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  payementForm20 = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    email: ['', Validators.email],
    tel: ['', Validators.required],
    price: ['20000']
  });

  payementForm30 = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    email: ['', Validators.email],
    tel: ['', Validators.required],
    price: ['30000']
  });
  constructor(private fb: FormBuilder, private paiementService: PaiementService) { }

  ngOnInit() {
  // this.loadScripts();

  }

  onSubmit(){
    console.warn(this.payementForm20.value);
    let data  = new paiement();
    data.nom = this.payementForm20.value.nom;
    data.prenom = this.payementForm20.value.prenom;
    data.tel = this.payementForm20.value.tel;
    data.price = this.payementForm20.value.price;
    data.email = this.payementForm20.value.email;

    this.paiementService.makeAPayement(data).subscribe(
      (complete)=>{
        console.log(complete);
        let content = complete;
        console.log(content);
        this.paiementService.terminatePayement(content).subscribe(
          (terminate)=>{
            console.log(terminate);
          }
        )
      }
    );

  }
  onSubmit30(){
    console.warn(this.payementForm30.value);
  }


  loadScripts() {
    const dynamicScripts = [
      
      'assets/js/appear.js',
      'assets/js/validate.js',
      'assets/js/mixitup.js',
      'assets/js/map-script.js',
      'assets/js/jquery.mixitup.min.js',
      'assets/js/jquery.js',
      'assets/js/popper.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/jquery.fancybox.js',
      'assets/js/owl.js', 
      'assets/js/wow.js',
      'assets/js/jquery.easing.min.js',   
      'assets/js/jquery.countTo.js',
      'assets/js/jquery.countdown.min.js',
      'assets/js/jquery-ui.js',
      'assets/js/isotope.js',
      'assets/js/custom.js',
      'assets/js/bxslider.js' 
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
 
}


export class paiement{
  nom;
  prenom;
  email;
  tel;
  price;
}
