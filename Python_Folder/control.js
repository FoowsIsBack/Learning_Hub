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

function python_introduction(python_language) {
    if (python_language === "python_introduction") {
        window.location.href = "python_introduction.html";
    } else if (python_language === "python_syntax") {
        window.location.href = "python_syntax.html";
    } else if (python_language === "python_data-types") {
        window.location.href = "python_data-types.html";
    } else if (python_language === "python_booleans") {
        window.location.href = "python_booleans.html";
    } else if (python_language === "python_operators") {
        window.location.href = "python_operators.html";
    } else if (python_language === "python_list") {
        window.location.href = "python_list.html";
    } else if (python_language === "python_tuple") {
        window.location.href = "python_tuple.html";
    } else if (python_language === "python_sets") {
        window.location.href = "python_sets.html";
    } else if (python_language === "python_if-else") {
        window.location.href = "python_if-else.html";
    } else if (python_language === "python_while-loop") {
        window.location.href = "python_while-loop.html";
    } else if (python_language === "python_for-loop") {
        window.location.href = "python_for-loop.html";
    } else if (python_language === "python_functions") {
        window.location.href = "python_functions.html";
    } else if (python_language === "python_user-input") {
        window.location.href = "python_user-input.html";
    } else if (python_language === "python_dictionaries"){
        window.location.href = "python_dictionaries.html";
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