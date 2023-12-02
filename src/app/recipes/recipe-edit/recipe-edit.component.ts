import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode: boolean = false
  constructor(private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe((data: any) => {
      this.id = data.id
      this.editMode = data.id != null;
    })
  }

}
