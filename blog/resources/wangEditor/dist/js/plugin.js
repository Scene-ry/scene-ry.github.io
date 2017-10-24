(function(E, $) {

    var checkText = function(textContainer, placeholder) {
        if (textContainer.text() ||
            textContainer.find('img').length > 0 ||
            textContainer.find('pre').length > 0 ||
            textContainer.find('blockquote').length > 0 ||
            textContainer.find('ul').length > 0 ||
            textContainer.find('ol').length > 0 ||
            textContainer.find('iframe').length > 0 ||
            textContainer.find('embed').length > 0) {
            placeholder.hide();
        } else {
            placeholder.show();
        }
    };

    E.plugin(function() {
        var editor = this;
        var $txt = editor.$valueContainer;
        var $container = editor.$editorContainer;

        editor.$placeholder = $('<p>' + ($txt.attr('placeholder') || '') + '</p>');

        editor.$placeholder.css({
            position: 'absolute',
            top: $container.children('.wangEditor-menu-container').css('height'),
            padding: '21px 15px',
            color: '#aaa'
        });

        // editor.$placeholder.hide();
        $container.append(editor.$placeholder);
        editor.$placeholder.on('click', function(e) {
            $txt.focus();
        });
        // $container.bind('DOMSubtreeModified', function() {
        //     var tarea = $container.find('textarea');
        //     if (tarea.length > 0) {
        //         if ($(tarea[0]).css('display') === 'none') {
        //             checkText($txt, editor.$placeholder);
        //         }
        //         editor.$placeholder.hide();
        //     } else {
        //         checkText($txt, editor.$placeholder);
        //     }
        // })
        $txt.attrchange({
            trackValues: true,
            callback: function(e) {
                if (e.attributeName == 'style') {
                    if (e.newValue.search(/display: none/i) != -1) {
                        editor.$placeholder.hide();
                    } else {
                        checkText($txt, editor.$placeholder);
                    }
                }
            }
        })
        $txt.on('input', function(e) {
            checkText($txt, editor.$placeholder);
        });
    });
})(window.wangEditor, window.jQuery);