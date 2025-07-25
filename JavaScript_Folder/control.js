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
    } else if (page === "js_syntax") {
        window.location.href = 'js_syntax.html';
    } else if (page === "on_compiler") {
        window.location.href = '../Compiler/c_compiler.html';
    }
}

function js_introduction(js_language) {
    
    if (js_language === "js_introduction") {
        window.location.href = 'js_introduction.html';
    } else if (js_language === "js_syntax") {
        window.location.href = 'js_syntax.html';
    } else if (js_language === "js_statements") {
        window.location.href = 'js_statements.html';
    } else if (js_language === "js_variables") {
        window.location.href = 'js_variables.html';
    } else if (js_language === "js_let") {
        window.location.href = 'js_let.html';
    } else if (js_language === "js_const") {
        window.location.href = 'js_const.html';
    } else if (js_language === "js_operators") {
        window.location.href = 'js_operators.html';
    } else if (js_language === "js_arithmetic") {
        window.location.href = 'js_arithmetic.html';
    } else if (js_language === "js_data-types") {
        window.location.href = 'js_data-types.html';
    } else if (js_language === "js_functions") {
        window.location.href = 'js_functions.html';
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