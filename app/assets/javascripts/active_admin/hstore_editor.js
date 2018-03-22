//= require jsoneditor/jsoneditor.js
//= require jsoneditor/asset/jsonlint/jsonlint.js

;(function(window, $) {
    var createEditor = function() {
      $('div.jsoneditor-wrap').each(function(i,wrap){
        var container = $(wrap)[0];
        var textarea = $($(wrap).find('textarea'));
        var editor;
        var options = {
          mode: 'tree',
          change: function(ev){
            textarea.text(JSON.stringify(editor.get()));
          }
        };
        editor = new JSONEditor(container, options,JSON.parse(textarea.val()));
      });
    }
  $(document).ready(function() {
    createEditor();
    $(document).on('page:load turbolinks:load', createEditor);
  });
})(window, jQuery);
