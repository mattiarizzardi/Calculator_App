// Install Jest  -->  npm install --save-dev jest
// TESTING OF THE CALCULATOR APP:

const operate = require ('./operate'); // Importo la funzione definita nella classe 'operate';

// Test case 'null':
test ('Should be null', () => {                
    expect (operate()).toBeNull();
});


test ('Should be null', () => {  
    expect (operate (2,'abc',"+")).toBeNull;
});


test ('Should be null', () => {  
    expect (operate ('abc','def',"+")).toBeNull;
});


// Test case 'add':
test ('Adds 2 + 2 to equal 4', () => {
   expect (operate (2,2,"+")).toBe(4); 
});


test ('Adds 2 + null to equal 2', () => {
    expect (operate (2,null,"+")).toBe(2);
});


test ('Adds 2 + 2 NOT to equal 5', () => {
    expect (operate (2,2,"+")).not.toBe(5);
});


test ('Adds null + null to equal 0', () => {
    expect (operate (null,null,"+")).toBe(0);
});


test ('Adds 3 + -6 to equal -3', () => {
    expect (operate (3,-6,"+")).toBe(-3);  
});


// Test case 'mult':
test ('Mult 4 x 2 to equal 8', () => {
   expect (operate (4,2,"x")).toBe(8); 
});


test ('Mult 4 x 0 to equal 0', () => {
   expect (operate (4,0,"x")).toBe(0); 
});


test ('Mult 2 x 4.5 to equal 9', () => {
   expect (operate (2,4.5,"x")).toBe(9); 
});


// Test case 'Div':
test ('Div 2 ÷ 4 to equal 0.5', () => {
    expect (operate (2,4,"÷")).toBe(0.5);
    
});


test ('Div 3 ÷ -6 to equal -0.5', () => {
    expect (operate (3,-6,"÷")).toBe(-0.5);
    
});


test ('Div 6 ÷ 1.5 to equal 4', () => {
    expect (operate (6,1.5,"÷")).toBe(4);
    
});


// Test case 'sub':
test ('Sub 7 - 2 to equal 5', () => {
   expect (operate (7,2,"-")).toBe(5); 
});


test ('Sub 5 - null to equal 5', () => {
    expect (operate (5,null,"-")).toBe(5);
});


test ('Sub 5 - 2 NOT to equal 2', () => {
    expect (operate (5,2,"-")).not.toBe(2);
});


test ('Sub null - null to equal 0', () => {
    expect (operate (null,null,"-")).toBe(0);
});


test ('Adds 3 - -6 to equal 9', () => {
    expect (operate (3,-6,"-")).toBe(9);  
});
