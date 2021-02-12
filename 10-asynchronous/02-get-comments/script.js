// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires



// your code here
document.getElementById('run').addEventListener("click", () => {
    window.lib.getPosts((err, art) => {
        setTimeout(() => {
            const article = [];
            err = "Error : something fucked up !";
            if (!err) {
                console.log(err);
            }
            article.push(art);
            console.table(art);


        }, 1000);
        window.lib.getComments((err, id) => {
            setTimeout(() => {
                const comments = [];
                comments.push(id);

            }, 1000);
        });

    });
});