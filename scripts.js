$(".new-task__btn").on('click', function (e) {
    let taskTxt = String($('.new-task__input').val());

    if (taskTxt.trim().length === 0) {
        alert("Put something")
        return
    }

    let bgColors = ["colors__item_red", "colors__item_pink", "colors__item_purple", "colors__item_navy", "colors__item_blue", "colors__item_yellow"];
    let bgColor = bgColors[Math.round(Math.random() * 5)];
    let taskBody = ('<li>' + '<div class = "to-do-list__item' + ' ' + bgColor + ' ' + 'task">' +
        '<div class = "task__manage" >' + '<input class = "task__checkbox" type = "checkbox">' +
        '</div>' + '<div class = "task__body">' + '<p class = "task__text">' + taskTxt + '</p>' + '</div>' + '</div>' + '</li>');

    $("#to-do-list").append(taskBody);

});

$(".colors__item").on('click', function (e) {
    let checked = $(".to-do-list :checked");

    $(".colors__item").removeClass("colors__item_chosen");
    let bgColor = $(e.target).css('background-color');
    $(e.target).addClass("colors__item_chosen");

    if (checked.length === 0) {
        return
    }

    for (let i = 0; i < checked.length; i++) {
        $(checked[i]).closest(".to-do-list__item").css('background-color', bgColor)
    }
});