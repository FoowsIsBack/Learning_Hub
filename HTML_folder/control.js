function maincontent(page) {
    let contentDiv = document.getElementById("content");

    if (page === "home") {
        window.location.href = '../page_content.html';
    } else if (page === "about") {
        window.location.href = '../About_Folder/about.html';
    } else if (page === "c_lang") {
        window.location.href = '../C_Folder/C_language.html';
    } else if (page === "python") {
        window.location.href = '../Python_Folder/Python_language.html';
    } else if (page === "html") {
        window.location.href = '../HTML_folder/Html.html';
    } else if (page === "js") {
        window.location.href = '../JavaScript_Folder/JavaScript.html';
    } else if (page === "php") {
        window.location.href = '../PHP_Folder/PHP.html';
    } else if (page === "on_compiler") {
        window.location.href = '../Compiler/c_compiler.html';
    }
}

function html_introduction(html_language) {
    
    if (html_language === "html_introduction") {
        window.location.href = 'html_introduction.html';
    } else if (html_language === "html_basic") {
        window.location.href = 'html_basic.html';
    } else if (html_language === "html_elements") {
        window.location.href = 'html_elements.html';
    } else if (html_language === "html_attributes") {
        window.location.href = 'html_attributes.html';
    } else if (html_language === "html_headings") {
        window.location.href = 'html_headings.html';
    } else if (html_language === "html_footers") {
        window.location.href = 'html_footers.html';
    } else if (html_language === "html_image") {
        window.location.href = 'html_image.html';
    } else if (html_language === "html_tables") {
        window.location.href = 'html_tables.html';
    } else if (html_language === "html_list") {
        window.location.href = 'html_list.html';
    } else if (html_language === "html_favicon") {
        window.location.href = 'html_favicon.html';
    } else if (html_language === "html_div") {
        window.location.href = 'html_div.html';
    } else if (html_language === "html_id") {
        window.location.href = 'html_id.html';
    } 
}

function cat() {
    window.location.href = '../API_Activity/CAT_api/cat.html';
}

function dog() {
    window.location.href = '../API_Activity/DOG_api/dog.html';
}

function quotes() {
    window.location.href = '../API_Activity/QUOTES_api/quotes.html';
}