import { Ingredients } from "./ingredients.model";

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imgSrc: string,
    public ingrediants:Ingredients[]
  ) {}
}
