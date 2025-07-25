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


function c_introduction(C_language) {
    
    if (C_language === "c_introduction") {
        window.location.href = 'C_introduction.html';
    } else if (C_language === "c_syntax") {
        window.location.href = 'c_syntax.html';
    } else if (C_language === "c_operators") {
        window.location.href = 'c_operators.html';
    } else if (C_language === "c_booleans") {
        window.location.href = 'c_booleans.html';
    } else if (C_language === "c_if-else") {
        window.location.href = 'c_if-else.html';
    } else if (C_language === "c_switch") {
        window.location.href = 'c_switch.html';
    } else if (C_language === "c_while-loop") {
        window.location.href = 'c_while-loop.html';
    } else if (C_language === "c_do-while-loop") {
        window.location.href = 'c_do-while-loop.html';
    } else if (C_language === "c_for-loop") {
        window.location.href = 'c_for-loop.html';
    } else if (C_language === "c_nested-loop") {
        window.location.href = 'c_nested-loop.html';
    } else if (C_language === "c_user-input") {
        window.location.href = 'c_user-input.html';
    } else if (C_language === "c_functions") {
        window.location.href = 'c_functions.html';
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