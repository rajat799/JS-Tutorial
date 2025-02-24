function user(name){
    console.log(`username: ${name}`);
}
user('rajat');

(function user1(name){
    console.log(`username: ${name}`);  
})('rajat');

( (name) => {
    console.log(`username: ${name}`);
    
})('rajat');