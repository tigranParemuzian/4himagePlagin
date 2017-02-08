/**
 * Created by tparemuzyan on 2/8/17.
 */

function zoomImage(options) {

    if(typeof options.class_name == 'undefined' ||
        typeof options.with == 'undefined' ||
        typeof options.height == 'undefined' ||
        typeof options.top == 'undefined' ||
        typeof options.left == 'undefined'){
        console.log(options + 'Options is required plese add all parameters for init.');
        return;
    }
    //get main div
    var mainDiv = $('.'+options.class_name);
    //get image src file
    var src = mainDiv.children('img').attr('src');

    var divPos = {};

    var offset = mainDiv.offset();

    /**
     * get image on hover
     */
    mainDiv.children('img').mousemove(function(e){
        /**
         * get mouse position
         * @type {{left: number, top: number}}
         */
        divPos = {
            left: e.pageX - offset.left,
            top: e.pageY - offset.top
        };

        /**
         * create view
         */
        $('.zoom-in-image').css({'background': "url("+ src +") no-repeat",
            'min-width': options.with+"px", 'min-height': options.height+"px", 'display': "block",
            'background-position': "-"+divPos.top+"px -"+divPos.left+"px", 'left':options.left+"px", 'top':options.top+"px", 'position': "absolute"});
    });

    mainDiv.mouseout(function() {
        $('.zoom-in-image').css({'display':"none"})
    });

}