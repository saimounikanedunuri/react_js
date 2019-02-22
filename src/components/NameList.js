import React from 'react'
import Person from './Person';
function NameList() {
    //const names=['Bruce','Clark','Diana']
    //const NameList=names.map(name=><h2>{name}</h2>)
    const names=['Bruce','Clark','Diana','Bruce']
   const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skills:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skills:'Python'
        },
        {
            id:3,
            name:'Diana',
            age:22,
            skills:'Java'
        },
    ]
    //const personList=persons.map(person=><Person key={person.name} person={person}/>)
    //return <div>{personList}</div>
    const nameList=names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
    return <div>{nameList}</div>
    /*(
        <div>
        {/*<h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
    <h2>{names[2]}</h2>*/
    /*}   
    {NameList}
        </div
    )*/
    
}
export default NameList