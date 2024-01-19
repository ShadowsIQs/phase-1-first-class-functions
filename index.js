function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function hey (){

    }
}

function returnsAnAnonymousFunction(){
    return function (){
        
    }
}