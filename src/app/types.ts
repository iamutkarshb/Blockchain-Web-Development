export interface Poll {
  id:number, // 12
  question: string; // which days of week you like most?
  results:number[]; // [0,0,0,0,5,7,2]
  options:string[]; // ["Monday","Tuesday","wednesdat",.....]
  thumbnail:string; // https://image.png
}

export interface Voter {
  id:string; // 0xJHSADJH412DJS
  voted:number[]; // [12]
}
