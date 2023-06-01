console.log('______________________________________________________________________')
console.log('______________________________________________________________________')

console.log('tutorial about functions in JS');

function func1(a,b=' Shri') // shri is default argument
{
    console.log("Jai"+b+a);
}

func1(' Radhe');
func1(' Krishna',' Shri Radhe');
a1=func1(' Bhutan');
console.log(a1)

console.log('______________________________________________________________________')

function func2(a,b,c,d)
{
    return (a+b-c)/d;
}

console.log(func2(10,22,13,24));

a2=func2(12,4,6,7);
console.log('a2 = ',a2) 

console.log('______________________________________________________________________')
console.log('______________________________________________________________________')
