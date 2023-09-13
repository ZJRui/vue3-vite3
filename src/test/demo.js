let obj={
    address:"北京",

    name:{
        age(){
            console.log(this)
        }
    }
}

obj.name.age();