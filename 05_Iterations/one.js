// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
       // console.log("5 is best number");
        
    }
    //console.log(element);
    
}

// console.log(element);


for(let i = 0; i<=10; i++){
    // console.log(`outer loop value: ${i}`);   // runs 1 time       
    
    for(let j = 0; j<=10; j++){
        // console.log(`inner loop value: ${j} and inner loop ${i}`);  // runs 10 times after outerloop runs 1 time
        // console.log(i + '*' + j + '=' + i*j);
        
    }
}


let myArray = ["java", "javascript", "cpp", "python"];
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}


// break and continue

for (let i = 1; i < 20; i++) {
if(i == 5){
    console.log(`detected 5`);
    // break;  // if detected 5 then loop will stop
    continue;  // if detected 5 then loop will continue to the next iteration it will not stop
}

    console.log(`value of i is: ${i}`);
}