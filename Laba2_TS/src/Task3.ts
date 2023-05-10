// const Obj = {name: "Maks", surname: "Nykyforov", 
//             date: new Date("2004-07-25"), 
//             habits: ["early running", "systematization"]}

// const ObjCopy_Alpha = {...Obj} // не глубокое копирование(-вложеность)
// const ObjCopy_Beta = JSON.parse(JSON.stringify(Obj)) // только базовые обьекты(-Date, Map, Set)
// const ObjCopy_Gama = structuredClone(Obj) // полноценное

// Obj.habits.push("other")

// let compare_Alpha = Obj == ObjCopy_Alpha
// let compare_Beta = Obj == ObjCopy_Beta
// let compare_Gama = Obj == ObjCopy_Gama

// console.log(`
// Object - ${JSON.stringify(Obj)}  - ${typeof(Obj.date)}
// First Copy - ${JSON.stringify(ObjCopy_Alpha)} -  ${typeof(ObjCopy_Alpha.date)}
// Second Copy - ${JSON.stringify(ObjCopy_Beta)} - ${typeof(ObjCopy_Beta.date)}
// Third Copy - ${JSON.stringify(ObjCopy_Gama)} - ${typeof(ObjCopy_Gama.date)}

// First Compare memory adress - ${compare_Alpha}
// Second Compare memory adress - ${compare_Beta}
// Third Compare memory adress - ${compare_Gama}
// `)