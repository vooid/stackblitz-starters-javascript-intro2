// TODO list
console.log("Hello there")
const tL = []
//const taskForm = document.querySelector("")
var indeks = 0
function addTask(tittel, prioritet){
    let task = {
        taskIndex: indeks,
        taskTittel: tittel,
        taskPri: prioritet,
        taskStatus: false,
    }
    tL.push(task); 
    indeks++;

}
function getTasks(oppgave){

}
function deleteTask(oppgave){

}
function editTask(oppgave){

}
function sortTask(oppgaveliste){

}
function a(){
    console.log(tL);
}
addTask("oppvask", 5)
addTask("klesvask", 4)
addTask("BG3", 1)
console.log(tL[1].prioritet)
for(let b = 0; b < tL.length; b++){
    console.log(tL[b].taskTittel)
//    console.log(tL[b])
}