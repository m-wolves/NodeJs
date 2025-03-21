 // express   
    const express = require('express');
    const app = express()

//sequelize
    const Sequelize = require('sequelize')
    require('./models/Produto')
    require('./models/Servico')

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

                //Criando um array das informações
                    const produtos = await Produto.findAll();
                    console.log(produtos);
                
                //procurando pelo id
                    const produto = await Produto.findByPk(1);
                    console.log(produto);

                    console.log(1)

                //update
                    produto.nome = 'Mouse gamer';

                    const resultadoSave = await produto.save();
                    console.log(resultadoSave)

            }catch (err) {
                console.log(err);
            }
        })();

    //Tabela de serviços
        (async () => {
            const database = require('./conexao/ds')
            const Servico = require('./models/Servico')

            try {
                //Crienado a  tabela
                    const resultado = await database.sync();
                    console.log('ok')
                    console.log(`tudo certo: ${resultado}`);

                    const resultadoCreate = await Servico.create({
                        nome: 'Limpeza de PCs',
                        preco: 50,
                        descricao: 'Serviços para limpezas de PCs'
                    })
                    console.log(resultadoCreate);

                //Criando um array das informações
                    const servicos = await Servico.findAll();
                    console.log(servicos);

                //procurando pelo id
                    const servico = await Servico.findByPk(1);
                    console.log(servico);

                    console.log(1)

                //update
                servico.nome = 'Limpeza de PCs ultra';

                const resultadoSave = await servico.save();
                console.log(resultadoSave)

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