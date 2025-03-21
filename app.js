 // express   
    const express = require('express');
    const app = express()

//sequelize
    const Sequelize = require('sequelize')
    require('./models/Produto')

    app.get('/', (req, res) => {
        res.send('Olá, Cris')
    });

//routes
    app.get('/produtos', (req, res) => {
        (async () => {
            const database = require('./conexao/ds')
            const Produto = require('./models/Produto')

            try {
                //Crienado a  tabela
                    const resultado = await database.sync();
                    console.log('ok')
                    console.log(`tudo certo: ${resultado}`);

                    const resultadoCreate = await Produto.create({
                        nome: 'mouse',
                        preco: 10,
                        descricao: 'Um mouse bonito'
                    })
                    console.log(resultadoCreate);

                    const produtos = await Produto.findAll();
                    console.log(produtos);

                    const produto = await Produto.findByPk(1);
                    console.log(produto);

                    console.log(1)
            }catch (err) {
                console.log(err);
            }
        })();
    })

//Abrindo servidor
    const port = 8080;
    app.listen(port, () => {
        console.log('Servidor Online!')
    });