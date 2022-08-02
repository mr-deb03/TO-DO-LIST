function dis()
{
     document.querySelector("#pending").style="display:none";
     document.querySelector("#completed").style="display:block";
}
function dis1()
{
     document.querySelector("#pending").style="display:block";
     document.querySelector("#completed").style="display:none";
}


function add()
{
    document.querySelector("#form").style="display:block;margin-top:-300px;cursor:pointer";
}

function getInput()
{
    var tname=document.querySelector("#taskname").value;
    var tdate=document.querySelector("#taskdate").value;
    var ttype=document.querySelector("#task-type").value;
    var tdesc=document.querySelector("#taskdesc").value;
    var data=document.querySelector("#pending_task");
    var complete_task=document.querySelector("#Complete_task");
    // var newdata =`<div class="card" style="width:50%;" ><ul class="list-group list-group-flush"><li class="list-group-item">${tname}</li><li class="list-group-item">${tdate}</li><li class="list-group-item">${ttype}</li><li class="list-group-item">${tdesc}</li></ul></div>`
    var newdata =`<div class="card" style="width:100%;" ><ul class="list-group list-group-flush"><li class="list-group-item">name:${tname}<br>date:${tdate}<br>Type:${ttype}<br>Desc:${tdesc}<input id="check" type="checkbox" value="" onclick="checked()" style="float:right;height:30px;width:30px;"></i></li></ul></div>`
    data.innerHTML += newdata;
    complete_task.innerHTML += newdata;
    document.querySelector("#form").style="display:none"; 
}

function checked(){
    var complete_task=document.querySelector("#Complete_task");
    complete_task.innerHTML += newdata;
} 

document.querySelector("#del").addEventListener('click',function(){
     document.querySelector("#form").style="display:none;";
})

