 interface ITesseract {
  recognize(img:any, progress?:any,callback?:any): Promise<ITesseractResult>;
  detect(img:any,lang?:string, callback?:any):Promise<ITesseractResult>;
}

interface ITesseractResult {
  text:string;
  html:string;
  confidence:number;
  blocks:number[];
  psm:string;
  oem:string;
  version:number;
  paragraphs:number[];
  lines:number[];
  words:number[];
  symbols:number[];
}

declare var Tesseract: ITesseract;
