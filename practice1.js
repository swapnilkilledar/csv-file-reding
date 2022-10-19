const csv = require('csvtojson');

    async function readAndPrint () {
    const students = await csv().fromFile('students.csv')
    console.log(students);        
}
readAndPrint ()

async function eigthStandard(){
    const students = await csv().fromFile('students.csv')
    console.log(students.filter(student =>  student.standard == '8'));   
}
eigthStandard() 

async function eigthStandardDivA(){
    const students = await csv().fromFile('students.csv')
    console.log(students.filter(students=>students.standard === '8' && students.division ==='A'))
}
eigthStandardDivA()

async function nineStandardData(){
    const students = await csv().fromFile('students.csv')
    console.log(students.filter(student =>  student.standard == '9'));  
}
nineStandardData()

async function nineStandardBdiv(){
    const students = await csv().fromFile('students.csv')
    console.log(students.filter(students =>  students.standard == '9' && students.division == 'B'));  
}
nineStandardBdiv()


async function belowFifteen(){
    const students = await csv().fromFile('students.csv')
    console.log(students.filter(students => students.age >'15' && students.standard == '10'));
}
belowFifteen()

async function aboveFifteen(){
    const students = await csv().fromFile('students.csv')
    console.log(students.filter(students =>students.age < '20' && students.standard =='10'))
}
aboveFifteen()

//Avarage of maths marks of 8th standard students
async function avarageMarksForEigthStd(){
    const students = await csv().fromFile('students.csv')
    let studentsOfEight = students.filter(student =>  student.standard == '8')
    let totalMarks = studentsOfEight.map(studentsOfEight => studentsOfEight.maths )
    let totalMathsMarks = []
    totalMathsMarks = totalMarks.map(Number)
     /* for(let i = 0; i < totalMarks.length; i++)     
    totalMathsMarks.push(parseInt(totalMarks[i]))*/
    let sum = 0;
    for (let i = 0; i < totalMathsMarks.length; i++) {
    sum += totalMathsMarks[i];
   
    let avgMathsMarks = sum / studentsOfEight.length
    console.log("Avrage Marks Of Maths for 8 Standard")
    console.log(avgMathsMarks)
   }
}avarageMarksForEigthStd()


//Avarage of all marks of 10 th standard students
async function avarageofAllMarks (){
    const students = await csv().fromFile('students.csv')
    let studentsOfTenth = students.filter(student =>  student.standard == '10')
   
     // marks of indiviual subject
     let EnglishMarks = studentsOfTenth.map(studentsOfTenth => studentsOfTenth.english)
     let mathsMarks = studentsOfTenth.map(studentsOfTenth => studentsOfTenth.maths)
     let chemistryMarks = studentsOfTenth.map(studentsOfTenth => studentsOfTenth.chemistry)
     
     //converting string into integer
     let totalEnglishMarks = EnglishMarks.map(Number)
     let totalMathMarks = mathsMarks.map(Number)
     let totalChemistryMarks = chemistryMarks.map(Number)
    
     //sum 
    let sumOfEnglish =0
    for (let i=0 ; i<totalEnglishMarks.length;i++)
    sumOfEnglish += totalEnglishMarks[i]
     
    let sumOfMaths =0
    for (let i = 0 ; i < totalMathMarks.length; i++)
    sumOfMaths += totalMathMarks[i]

    let sumOfChemistry = 0
    for (let i = 0 ; i < totalChemistryMarks.length; i++)
    sumOfChemistry += totalChemistryMarks[i]
     let total = sumOfEnglish + sumOfMaths + sumOfChemistry
     console.log("Avarage of all marks of 10 th standard students")
     console.log(total/studentsOfTenth.length)
}avarageofAllMarks ()