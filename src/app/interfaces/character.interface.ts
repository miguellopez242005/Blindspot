export interface Character {
  
  id: number;
  name: string;
  type: string;
  language: string;
  runtime: number;
  summary:string;
  image :{
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
}
