const toyToFind = 2
const toys = [
{
    id: 1,
    toyType: "Transformer",
    toyName: "Starscream",
    toyMaker: "Hasbro",
    costOfToy: 20,
    inStock: true
},
{
    id: 2,
    toyType: "My Little Pony",
    toyName: "Apple Jack",
    toyMaker: "Hasbro",
    costOfToy: 15,
    inStock: true
},
{
    id: 3,
    toyType: "Pound Puppies",
    toyName: "Lucky",
    toyMaker: "Hasbro",
    costOfToy: 25,
    inStock: false
},
]
//Define a new toy
const goBot = {
    id:4,
    toyType: "Go Bot",
    toyName: "Crasher",
    toyMaker: "Tonka",
    costOfToy: 14,
    inStock: true
}
const strawberryShortCake = {
    id: 5,
    toyType: "Strawberry Shortcake",
    toyName: "Strawberry Shortcake",
    toyMaker: "Kenner",
    costOfToy: 17,
    inStock: false
}

toys.push(goBot)
toys.push(strawberryShortCake)

for(const toy of toys){
    if (toyToFind === toy.id){
    toy.costOfToy = toy.costOfToy * 1.05
    console.log(`The ${toy.toyType} toy ${toy.toyName} is ${toy.costOfToy} dollars.`)
    }
}
