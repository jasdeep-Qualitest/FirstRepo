// let marks=Array(6)
// let m1=new Array(1,3,4,6,3,4,)

// console.log(m1.reduce((sum,m)=>(sum+m)))
// let s=0;
// console.log(m1.filter(s=>s%2==0).map(s=>s*2).reduce((sum,m)=>(sum+m)))

// // let fun=function(a,b){
// //     return a+b
// // }
// // console.log(fun("jasdeep","Singh"))
// let a=(a,b)=>a+b
// console.log(a(5,4))

// console.log("teusday".indexOf("dhay"))


// let person={
//     f:"jasdeep ",
//     l:"singh",
//     fun : function(){return(this.f+this.l)}

// }
// console.log(person.fun())



module.exports= class abc
{
    a=5
    lna="jasdeep";
    get func(){
        return {a:'b',b:'c'}
    }


    abc(fn,ln){
        this.fn=fn
        this.ln=ln
    }
    

    constructor(fn,ln){
        this.fn=fn
        this.ln=ln
    }
    
   fullname() {
        return this.fn+this.ln+this.lna
        
    }
}

