import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Digimon } from 'src/app/models/digimon.interface';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.scss'],
})
export class ComponentDetailComponent implements OnInit {
  digimons!: Digimon[];
  showAllDetails: boolean = false;

  constructor(
    private digimonService: DigimonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('name')!;
    console.log('Identifier --> ', identifier);

    this.digimonService.getDigimonByName(identifier).subscribe((digimon) => {
      if (!digimon) {
        this.router.navigateByUrl('/name');
      }

      this.digimons = digimon;
      console.log('Digimon --> ', digimon);
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/');
  }

  //show details method

  showDetails(): void {
    this.showAllDetails = !this.showAllDetails;
  }
}
