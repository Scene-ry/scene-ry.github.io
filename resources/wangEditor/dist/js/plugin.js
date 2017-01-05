(function(E, $) {

    E.plugin(function() {
        var editor = this;
        var $txt = editor.$valueContainer;
        var $container = editor.$editorContainer;
        editor.$placeholder = $('<p>' + ($txt.attr('placeholder') || '') + '</p>');

        editor.$placeholder.css({
            position: 'absolute',
            top: $container.children('.wangEditor-menu-container').css('height'),
            padding: '6px 15px',
            color: '#aaa'
        });

        if ($txt.text() || $txt.find('img').length > 0 || $txt.find('pre').length > 0 || $txt.find('blockquote').length > 0) {
            editor.$placeholder.hide();
        }
        $container.append(editor.$placeholder);
        editor.$placeholder.on('click', function(e) {
            $txt.focus();
        });
        $txt.on('input', function(e) {
            if ($txt.text() || $txt.find('img').length > 0 || $txt.find('pre').length > 0 || $txt.find('blockquote').length > 0) {
                editor.$placeholder.hide();
            } else {
                editor.$placeholder.show();
            }
        });
    });
})(window.wangEditor, window.jQuery);