function maincontent(page) {

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


function online_compiler(C_language) {
    
    if (C_language === "python_compiler") {
        window.location.href = 'p_compiler.html';
    } else if (C_language === "HTML_editor") {
        window.location.href = 'html_editor.html';
    } else if (C_language === "js_compiler") {
        window.location.href = 'js_compiler.html';
    } else if (C_language === "php_compiler") {
        window.location.href = 'php_compiler.html';
    } else if (C_language === "c_compiler") {
        window.location.href = 'c_compiler.html';
    }
}