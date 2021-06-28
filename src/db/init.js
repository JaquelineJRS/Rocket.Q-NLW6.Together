const Database = require("./config")

const initDb = {
    //async/await -> sempre são utilizados em conjunto
    //async = é obrigatório a função ser async, ser for utilizar o await na variável 
    async init(){
        //await = indica que é para o js rodar o Database e trazer o resultado, para executar a próxima linha
        // garantia que a variável db (neste caso) vai receber o resultado correto
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);
        
        await db.close()
    }
}

initDb.init();

