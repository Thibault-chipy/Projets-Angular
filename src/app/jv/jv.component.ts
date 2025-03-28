import { Component, OnInit, Input } from '@angular/core';
import { JV } from '../models/jv.model';
import { JvService } from '../services/jv.service';
import { ActivatedRoute } from '@angular/router';

@Component({  
  selector: 'app-jv',
  standalone: false,
  templateUrl: './jv.component.html',
  styleUrl: './jv.component.scss',
})
export class JVComponent implements OnInit{
  @Input() jvInput!: JV;
  idJV!: string;
  constructor(private jvService: JvService, private routerAct: ActivatedRoute) {}

  ngOnInit(): void {
    this.idJV = this.routerAct.snapshot.params['id'];
    if (this.idJV !== undefined) {
      this.jvService.getJV(this.idJV).subscribe((jv) => {
        this.jvInput = jv;
      });
    }
  }



}
