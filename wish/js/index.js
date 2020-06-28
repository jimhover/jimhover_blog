var container;

var colors =['#207de0','#42baec','#e3e197','#6c4e47','#ecc733']

var createImtem = function (name,content){
    var color=colors[parseInt(Math.random()*5)];
    $('<div class="item"><p>'+name+':</p><p>'+content+'</p><a href="#">关闭</a></div>').css(
        {'background':color}
    ).appendTo(container).drag();
};


var list=container.attr('data-list');
$.each(JSON.parse(list),function(i,v){
    createImtem(v.name,v.content);
})
