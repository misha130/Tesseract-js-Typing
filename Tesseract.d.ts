 export interface ITesseract {
  recognize(img:HTMLImageElement, progress?:any,callback?:any): Promise<ITesseractResult>;
  detect(img:HTMLImageElement,lang?:string, callback?:any):Promise<ITesseractResult>;
}

export interface ITesseractResult {
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
