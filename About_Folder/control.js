function maincontent(page) {
    let contentDiv = document.getElementById("content");

    if (page === "home") {
        window.location.href = '../page_content.html';
    } else if (page === "about") {
        window.location.href = 'about.html';
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