# Tesseract-js-Typing

A type definition for javascript Tesseract port

usage:
 
        let img = new Image(600,600);
 
        img.src = image_data;
        
        Tesseract.recognize(img,() => {})
        .then((d:ITesseractResult) => {
           console.log(d.text);
        });
