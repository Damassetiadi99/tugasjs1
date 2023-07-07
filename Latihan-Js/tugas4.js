let data = {
    id : 1,
    name : "leanne Graham",
    username:"bret",
    email: "sincere@april.biz",
    address :{
        street : "kulas Light",
        suite : "apt.556",
        city :"gwenborough",
        zipcode:"92998-3874",
    },
    phone : "1-770-736-8031x56442",
    website:"hildegard.org",

    }
    const modifdata ={...data,
        name :' Damas Setiadi ',
        email:'damassetiadi999@gmail.com',
        hobi : ['badminton','reading','gaming']
    }

const {id, name, username, email, address:{street, suite, city, zipcode}, phone, website} = data

console.log(modifdata)
console.log(street,city)