document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0 &&document.querySelector('#dateInput').value.length == 0){
        alert("Please Enter a Task")
    }
    // else{
    //     if(document.querySelector('#dateInput').value.length == 0){
    //         alert("Please Enter a Date")
    //     }
    // }
        // else{
    //     if(document.querySelector('#timeInput').value.length == 0){
    //         alert("Please Enter a Date")
    //     }
    // }

    
    else{
        let  is_dead = false;
        if (new Date()>document.querySelector('#dateInput').value )
        {
            is_dead=true;
            document.querySelectorAll('#newtask input').style.color="yellow";
        }
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                    ${document.querySelector('#dateInput').value}
                    ${document.querySelector('#timeInput').value}
                    
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";
        document.querySelector("#dateInput").value = "";
        document.querySelector("#timeInput").value = "";
    }
}
function change_color(color){
    document.querySelectorAll('newtask input').value.style.background=color;
}
// function date_time()
// {
//     var current_datetime = new Date();
//     var day = zero_first_format(current_datetime.getDate());
//     var month = zero_first_format(current_datetime.getMonth()+1);
//     var year = current_datetime.getFullYear();
//     var hours = zero_first_format(current_datetime.getHours());
//     var minutes = zero_first_format(current_datetime.getMinutes());
//     var seconds = zero_first_format(current_datetime.getSeconds());

//     return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
// }
// document.getElementById('current_date_time_block').innerHTML = date_time();