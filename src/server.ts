import express from 'express';

const app = express();

/**
* Get => Busrcar
* Post => Salvar
* Put => Alterar
* Delete => Deletar
* Patch => Alteração específica
**/

// http://localhost:3333/users
app.get("/", (request, response) => {
    
return response.json({ massage: "hello world - NLW4"});
})

//1 parametro = rota(recurso API)
//2 parametro = request, response

app.post("/", (request, response) => {
    // Recebeu os dados para salvar 
    return response.json({ massage: "Os dados foram salvos com sucesso!"});
});


app.listen(3333, () => console.log("Funfou"));