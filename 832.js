var flipAndInvertImage = function(image) {
    let r = image.map(im=>{
        for(let i=0, j=im.length-1; i<Math.floor(im.length/2); i++, j-- ){
            let temp = im[i];
            im[i]= im[j];
            im[j]=temp;
        }
        for(let i=0; i<im.length; i++){
            if(im[i]==0){
                im[i] =1
            }else{
                im[i]=0
            }
        }
        return im;
    })
    return r;
};

const result = flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]);
console.log(result);