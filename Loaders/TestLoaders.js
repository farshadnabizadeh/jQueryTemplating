// Function to load a template file, compile it with Handlebars, and apply the data
function loadAndApplyTemplate(templateUrl, data, target) {
    $.ajax({
        url: templateUrl,
        cache: true,
        success: function(templateContent) {
            var template = Handlebars.compile(templateContent);
            var html = template(data);
            $(target).html(html);
        }
    });
}

$(function() {
    var data = [
        { name: "Item 1", description: "Description of item 1" },
        { name: "Item 2", description: "Description of item 2" },
        { name: "Item 3", description: "Description of item 3" }
    ];

    loadAndApplyTemplate('http://localhost:5000/Templates/itemTemplate.hbs', data, '.container');
});
