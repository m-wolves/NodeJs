 // express   
    const express = require('express');
    const app = express()

//sequelize
    const Sequelize = require('sequelize');
const { Where } = require('sequelize/lib/utils');
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
                        nome: 'teclado',
                        preco: 20,
                        descricao: 'teclado bonito'
                        
                    })
                    /*console.log(resultadoCreate);

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
                    */

                    /*
                //Delete
                    Produto.destroy({Where: {id: 2}});

                    const produto = await Produto.findByPk(2);
                    produto.destroy();
                    */
                   if (req.url === '/produtos') {
                    const produtos = await Produto.findAll();
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end((JSON.stringify(produtos)));
                   } else {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end('Bem-vindo a API de produtos')
                   }
                    

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
                        nome: 'OFICCE',
                        preco: 100,
                        descricao: 'Instalçao de programas'
                    })
                    /*console.log(resultadoCreate);

                //Criando um array das informações
                    const servicos = await Servico.findAll();
                    console.log(servicos);

                //procurando pelo id
                    //const servico = await Servico.findByPk(1);
                    //console.log(servico);

                    //console.log(1)

                //update
                    servico.nome = 'Limpeza de PCs ultra';

                    const resultadoSave = await servico.save();
                    console.log(resultadoSave)
                    */

                /*//Delete
                    Servico.destroy({Where: {id: 2}});

                    const servico = await Servico.findByPk(2);
                    servico.destroy();
                    */

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