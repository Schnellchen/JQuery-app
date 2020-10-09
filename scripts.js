

//let tasks = []
$(".new-task__btn").on('click', function(e){
    let taskTxt = $('.new-task__input').val();

    if (taskTxt.trim().length === 0){
        alert("Put something not empty!")
        return
    }

    let task = ('<li>' + '<div class = "to-do-list__item task">'
        + '<div class = "task__manage" >' + '<input class = "task__checkbox" type = "checkbox">'
        + '</div>' + '<div class = "task__body">'+ taskTxt +'</div>' + '</div>' + '</li>');
    //tasks.push(taskTxt);
    $("#to-do-list").append(task);
    $(".to-do-list__item").css('background-color', "red");

});

$(".colors__item").on('click', function (e){
    let checked = $(".to-do-list :checked");

    if (checked.length === 0){
        return
    }

    let bgColor = $(e.target).css('background-color');

    for (let i = 0; i < checked.length; i++){
        //$(checked[i]).parent().parent().parent().parent().css('background', bgColor)
        $(checked[i]).closest(".to-do-list__item").css('background', bgColor)
    }
});

