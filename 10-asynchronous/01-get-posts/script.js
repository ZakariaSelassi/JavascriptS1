// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    const article = [];

    document.getElementById('run').addEventListener("click", () => {
        window.lib.getPosts((err, art) => {
            setTimeout(() => {
                err = "Error : something fucked up !";
                if (!err) {
                    console.log(err);
                }
                article.push(art);
                console.table(art);

            }, 1000);
        });


    });


})();