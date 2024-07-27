import {promises as fs} from "fs";

async function pegaDados(){
    const dados = JSON.parse(await fs.readFile("./people.json"));
    return dados;
}

async function exemploForEach(){
    const dados = await pegaDados();
    dados.forEach(pessoa => {
        console.log(pessoa.name.first)
    })
}

exemploForEach();