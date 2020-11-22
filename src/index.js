const bcrypt = require("bcrypt")
const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false";
// Create a new MongoClient
const client = new MongoClient(uri);

// CONFIG DE LIMITES DE INSERÇÃO NO BANCO DE DADOS
const _DBNAME = "bombeiros";
const _INI_USERS = 0;
const _FINAL_USERS = 10000;
const _COLLECTION_USER = "users";
const _USERS_INSERT = true;
const _INI_RELATORIO = 0;
const _FINAL_RELATORIO = 10000;
const _COLLECTION_RELATORIO = "relatorios";
const _RELATORIOS_INSERT = true;


async function inserir_users() {

    try {
        await client.connect();

        for (let i = _INI_USERS; i < _FINAL_USERS && _USERS_INSERT; i++) {

            let obj = {
                "name": "nome " + i,
                "last_name": "last_name " + i,
                "patent": i,
                "register_number": i,
                "email": `email${i}@gmail.com`,
                "password": bcrypt.hash("123123", 10),
                "administrator": (i % 2 == 0 ? true : false),
                "passwordResetToken": bcrypt.hash("12334232131231", 10),
                "passwordResetExpires": Date.now,
            }

            await client.db(_DBNAME).collection(_COLLECTION_USER).insertOne(obj);
        }

        console.log("terminei de add os users");

    } finally {
        await client.close();
    }
}


async function inserir_registros() {
    try {
        // Connect the client to the server
        await client.connect();
        for (let i = _INI_RELATORIO; i < _FINAL_RELATORIO && _RELATORIOS_INSERT; i++) {

            let obj = {
                "area_edificada": "area_edificada " + i,
                "area_informada": "area_informada" + i,
                "rrt": (i % 2 == 0 ? true : false),
                "dare": (i % 2 == 0 ? true : false),
                "edificacao_terrea": (i % 2 == 0 ? true : false),
                "numero_pavimento": i,
                "edificacao_isolada": (i % 2 == 0 ? true : false),
                "salas": {
                    "ocupadas": i % 10,
                    "desocupadas": i % 2,
                },
                "parede_unica": (i % 2 == 0 ? true : false),
                "abertura_interpredial": (i % 2 == 0 ? true : false),
                "tipo_abertura": "tipo_abertura " + i,
                "armario_produtos_perigosos": "armario_produtos_perigosos " + i,
                "projeto_tecnico": (i % 2 == 0 ? true : false),
                "numero_cap": i * 32131 % 4324,
                "sistema_atende": (i % 2 == 0 ? true : false),
                "funcao_relatorio": i * 23612 % 99,
                "medidas_seguranca": {
                    "saida_emergencia": {
                        "largura_portas": (i % 2 == 0 ? true : false),
                        "largura_escadas": (i % 2 == 0 ? true : false),
                        "piso_antiderrapante": (i % 2 == 0 ? true : false),
                        "guarda_corpo": (i % 2 == 0 ? true : false),
                        "desobstruidas": (i % 2 == 0 ? true : false),
                        "corrimao_ambos_lados": (i % 2 == 0 ? true : false),
                        "corrimao_mezanino": (i % 2 == 0 ? true : false),
                        "material_escada_incombustivel": (i % 2 == 0 ? true : false),
                        "barras_antipanico": (i % 2 == 0 ? true : false),
                        "outros_itens": (i % 2 == 0 ? true : false),
                    },
                    "iluminacao_emergencia": {
                        "altura_instalacoes": (i % 2 == 0 ? true : false),
                        "distancia_luminarias": (i % 2 == 0 ? true : false),
                        "edificacao": (i % 2 == 0 ? true : false),
                        "moteis": (i % 2 == 0 ? true : false),
                        "teste_funcionamento": (i % 2 == 0 ? true : false),
                        "lotacao": (i % 2 == 0 ? true : false),
                        "outros_itens": (i % 2 == 0 ? true : false),
                    },
                    "sinalizacao_emergencia": {
                        "altura_instalacoes": (i % 2 == 0 ? true : false),
                        "tamanho": (i % 2 == 0 ? true : false),
                        "cores": (i % 2 == 0 ? true : false),
                        "forma_geometrica": (i % 2 == 0 ? true : false),
                        "distancia_visualizacao": (i % 2 == 0 ? true : false),
                        "outros_itens": (i % 2 == 0 ? true : false),
                    },
                    "hidrantes": {
                        "posicionamento": (i % 2 == 0 ? true : false),
                        "abrigos_desobstruidos": (i % 2 == 0 ? true : false),
                        "cobertura": (i % 2 == 0 ? true : false),
                        "bomba_automatico": (i % 2 == 0 ? true : false),
                        "botoeiras": (i % 2 == 0 ? true : false),
                        "pressurizacao_bomba": (i % 2 == 0 ? true : false),
                        "ligacao_independente": (i % 2 == 0 ? true : false),
                        "desligamento_bomba_manual": (i % 2 == 0 ? true : false),
                        "acessorios_abrigos": (i % 2 == 0 ? true : false),
                        "tubulacao": (i % 2 == 0 ? true : false),
                        "rti_independente": (i % 2 == 0 ? true : false),
                        "saida_consumo_predial": (i % 2 == 0 ? true : false),
                        "pressurizacao_gravidade": (i % 2 == 0 ? true : false),
                        "outros_itens": (i % 2 == 0 ? true : false),
                    },
                    "extintores": {
                        "quantidade": (i % 2 == 0 ? true : false),
                        "instalacao": (i % 2 == 0 ? true : false),
                        "sinalizacao": (i % 2 == 0 ? true : false),
                        "desobstruidos": (i % 2 == 0 ? true : false),
                        "pressao": (i % 2 == 0 ? true : false),
                        "selo_inmetro_recarga": (i % 2 == 0 ? true : false),
                        "selo_inmetro_novos": (i % 2 == 0 ? true : false),
                        "outros_itens": (i % 2 == 0 ? true : false),
                    },
                    "alarme_deteccao": {
                        "central_alarme": (i % 2 == 0 ? true : false),
                        "caminhamento": (i % 2 == 0 ? true : false),
                        "audivel": (i % 2 == 0 ? true : false),
                        "outros_itens": (i % 2 == 0 ? true : false),
                    },
                    "detectores": {
                        "fumaca": {
                            "area": (i % 2 == 0 ? true : false),
                            "raio": (i % 2 == 0 ? true : false),
                        },
                        "temperatura": {
                            "area": (i % 2 == 0 ? true : false),
                            "raio": (i % 2 == 0 ? true : false),
                        },
                    },
                    "chuveiros_automaticos": {
                        "acionamento": (i % 2 == 0 ? true : false),
                        "desligamento": (i % 2 == 0 ? true : false),
                        "saida_teste": (i % 2 == 0 ? true : false),
                        "outros_itens": (i % 2 == 0 ? true : false),
                    },
                    "brigada_incendio": {
                        "acordo_memorial": (i % 2 == 0 ? true : false),
                        "treinamento": (i % 2 == 0 ? true : false),
                        "calculo_presente": (i % 2 == 0 ? true : false),
                        "fat": (i % 2 == 0 ? true : false),
                        "aprovacao_teste": (i % 2 == 0 ? true : false),
                        "outros_itens": (i % 2 == 0 ? true : false),
                    },
                    "glp": {
                        "retirar_interior": (i % 2 == 0 ? true : false),
                        "utilizacao_central": (i % 2 == 0 ? true : false),
                        "quantidade": i % 9,
                        "classe": "classe " + i * 7 % 9,
                        "distancia_seguranca": (i % 2 == 0 ? true : false),
                        "outros_itens": (i % 2 == 0 ? true : false),
                    },
                },
                "status": (i % 2 == 0 ? true : false),
                "proprietario": "proprietario " + i,
            }

            await client.db(_DBNAME).collection(_COLLECTION_RELATORIO).insertOne(obj);
        }

        console.log("terminei de add os relatorios");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

    inserir_users().catch();
    inserir_registros().catch();