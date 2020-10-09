

//let tasks = []
$(".new-task__btn").on('click', function(e){
    let taskTxt = $('.new-task__input').val();

    if (taskTxt.trim().length === 0){
        alert("Put something")
        return
    }

    let colors = ["red", "pink", "mediumpurple", "navy", "deepskyblue", "yellow"];
    let style = colors[Math.round(Math.random() * 5)];
    let task = ('<li>' + '<div class = "to-do-list__item' + ' ' + style + ' ' +'task">'
        + '<div class = "task__manage" >' + '<input class = "task__checkbox" type = "checkbox">'
        + '</div>' + '<div class = "task__body">'+ taskTxt +'</div>' + '</div>' + '</li>');
    //tasks.push(taskTxt);
    $("#to-do-list").append(task);

});

$(".colors__item").on('click', function (e){
    let checked = $(".to-do-list :checked");

    if (checked.length === 0){
        return
    }

    let bgColor = $(e.target).css('background-color');

    for (let i = 0; i < checked.length; i++){
        $(checked[i]).closest(".to-do-list__item").css('background-color', bgColor)
    }
});

