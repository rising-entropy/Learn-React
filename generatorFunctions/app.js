function sayHi()
{
    return "Hi"
}

// console.log(sayHi())

function* sayHello()
{
    yield "Hi";
    return "Hello";
}

const hello = sayHello()

// console.log(hello.next())
// console.log(hello.next())


function* yoyoyo()
{
    yield "Yo"
    yield* sayHello()
    yield "Yo Yo"
    return "Ok"
}

const val = yoyoyo()

// console.log(val.next())
// console.log(val.next())
// console.log(val.next())
// console.log(val.next())
// console.log(val.next())
// console.log(val.next())
// console.log(val.next())

