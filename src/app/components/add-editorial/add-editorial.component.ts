import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pais } from '../../models/pais.model';
import { Editorial } from '../../models/editorial.model';
import { UtilService } from '../../services/util.service';
import { EditorialService } from '../../services/editorial.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-editorial',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './add-editorial.component.html',
  styleUrl: './add-editorial.component.css'
})
export class AddEditorialComponent {
  lstPais: Pais[] = [];

    objEditorial: Editorial = {
      razonSocial: '',
      direccion: '',
      ruc:'',
      gerente: '',
      fechaCreacion: new Date(),
      pais: {
        idPais: -1,
      }
    };
  
    constructor(private UtilService:UtilService, private editorialService:EditorialService) { }
  
    ngOnInit(): void{
      this.UtilService.listaPais().subscribe(data => {
        this.lstPais = data;
      });
    }
  
    registraEditorial(){
      this.editorialService.registraEditorial(this.objEditorial).subscribe(data =>{
        console.log(data);
        Swal.fire({
          title: "Resultado",
          text: data.mensaje,
          icon: "info"
        });
      });
    }
}
