function test1(){
    var a = "a";
    console.log(a)
    if (true){
        console.log(a)
        var b = "b";
        console.log(b);
    }
    console.log(b);
}

function test2(){
    let a = "a";
    console.log(a)
    if (true){
        console.log(a)
        let b = "b";
        console.log(b);
    }
    console.log(b);
}


function test3(){
    const a = "a";
    console.log(a)
    if (true){
        console.log(a)
        const b = "b";
        console.log(b);
    }
    console.log(b);
}


test1()
// fail
// test2()
// fail 
// test3() 
