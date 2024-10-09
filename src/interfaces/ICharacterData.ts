import { ILocationData } from "./ILocationData";

export interface ICharacterData {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
  gender: string;
  location: ILocationData;
}
