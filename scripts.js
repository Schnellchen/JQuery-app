$(".new-task__btn").on('click', function(e){
    let taskTxt = $('.new-task__input').val();

    if (taskTxt.trim().length === 0){
        alert("Put something")
        return
    }

    let bgColors = ["red", "pink", "mediumpurple", "navy", "deepskyblue", "yellow"];
    let bgColor = bgColors[Math.round(Math.random() * 5)];
    let taskBody = ('<li>' + '<div class = "to-do-list__item' + ' ' + bgColor + ' ' +'task">'
        + '<div class = "task__manage" >' + '<input class = "task__checkbox" type = "checkbox">'
        + '</div>' + '<div class = "task__body">'+ taskTxt +'</div>' + '</div>' + '</li>');

    $("#to-do-list").append(taskBody);

});

$(".colors__item").on('click', function (e){
    let checked = $(".to-do-list :checked");

    $(".colors__item").removeClass("chosen");
    let bgColor = $(e.target).css('background-color');
    $(e.target).addClass("chosen");

    if (checked.length === 0){
        return
    }

    for (let i = 0; i < checked.length; i++){
        $(checked[i]).closest(".to-do-list__item").css('background-color', bgColor)
    }
});

