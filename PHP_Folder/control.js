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
    }
}

function php_introduction(php_language) {
    if (php_language === "php_introduction") {
        window.location.href = "php_introduction.html";
    } else if (php_language === "php_syntax") {
        window.location.href = "php_syntax.html";
    } else if (php_language === "php_comments") {
        window.location.href = "php_comments.html";
    } else if (php_language === "php_variables") {
        window.location.href = "php_variables.html";
    } else if (php_language === "php_echo-print") {
        window.location.href = "php_echo-print.html";
    } else if (php_language === "php_data-types") {
        window.location.href = "php_data-types.html";
    } else if (php_language === "php_strings") {
        window.location.href = "php_strings.html";
    } else if (php_language === "php_casting") {
        window.location.href = "php_casting.html";
    } else if (php_language === "php_math") {
        window.location.href = "php_math.html";
    } else if (php_language === "php_constants") {
        window.location.href = "php_constants.html";
    } else if (php_language === "php_magic-constants") {
        window.location.href = "php_magic-constants.html";
    } else if (php_language === "php_operators") {
        window.location.href = "php_operators.html";
    } else if (php_language === "php_if-else-elseif") {
        window.location.href = "php_if-else-elseif.html";
    } else if (php_language === "php_if-switch") {
        window.location.href = "php_if-switch.html";
    } else if (php_language === "php_if-loops") {
        window.location.href = "php_if-loops.html";
    } else if (php_language === "php_if-functions") {
        window.location.href = "php_if-functions.html";
    } else if (php_language === "php_arrays") {
        window.location.href = "php_arrays.html";
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
