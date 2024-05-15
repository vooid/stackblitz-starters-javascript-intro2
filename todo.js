// TODO list

const tL = []
const taskForm = document.querySelector("")
var indeks = 0
function addTask(tittel, prioritet){
    let task = {
        taskIndex: index,
        taskTittel: tittel,
        taskPri: prioritet,
    }
    tL + task; 
    index++;

}
function getTasks(oppgave){

}
function deleteTask(oppgave){

}
function editTask(oppgave){

}
function sortTask(oppgaveliste){

}
addTask("oppvask", 5)
addTask("klesvask", 4)
addTask("BG3", 1)

for(let b = 0; b < tL.length; b++)
console.log(tL[b].tittel)