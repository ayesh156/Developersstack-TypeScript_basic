//=============== Error Handling

function dev(num1:number,num2:number){
    if(num2==0){
        throw new Error('Wrong Input!');
    }
    return num1/num2;
}

try{
    let answer = dev(10,0);
console.log(answer);
}catch(error){
    console.error(error);
}finally{
    console.log('finally');
}