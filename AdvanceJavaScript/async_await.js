let promise1 = new Promise(function(resolve, reject){ //control comes here from line 8
    setTimeout(function(){
        console.log('Within Promise1');        
        resolve('Promise resolved!');
    }, 4000);
})

async function asyncFunctionWithAwait(){//control reaches here on call from line 13
    console.log('Async function - asyncFunctionWithAwait called');
    //AWAIT keyword can't be used in normal fnction. only within an asu=ync function
    // let result = await promise1;//promise1 called. control waits till promise is resolved because of 'AWAIT' keyword
    //console.log(result);

    let callPromiseWithoutAwait = promise1;
    console.log(callPromiseWithoutAwait);
    
    
    console.log('hello');
}

asyncFunctionWithAwait(); //async function called at line 7.