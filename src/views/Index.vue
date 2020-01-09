<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#"><span class="fas fa-dog"></span> Dog App</a>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><span class="fas fa-home"></span> Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><span class="fas fa-image"></span> Galeria</a>
                    </li>
                </ul>
            </div>
        </nav>
        <br />
        <section class="container">
            <form action="">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="font-weight-bold" for="select-breed">Selecione a raça</label>
                            <select @change="getImagem()" v-model="raca" class="form-control" name="select-breed" id="select-breed">
                                <option v-for="(item, index) in racas" :value="item" :key="index">{{ item | capitalize }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="form-group">
                            <label class="font-weight-bold" for="nome">Insira o nome do cachorro</label>
                            <input v-model="nome" name="nome" id="nome" class="form-control" type="text" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label class="font-weight-bold" for="fonte">Selecione a fonte</label>
                            <select v-model="fonte" class="form-control" name="fonte" id="fonted">
                                <option v-for="(item, index) in fontes" :value="item.classe" :key="index">{{ item.nome }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label class="font-weight-bold" for="cor">Selecione a cor da fonte</label>
                            <select v-model="cor" class="form-control" name="cor" id="cor">
                                <option v-for="(item, index) in cores" :value="item.classe" :key="index">{{ item.nome }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-2 align-self-end">
                        <div class="form-group">
                            <button @click="salvar()" type="button" class="btn btn-primary btn-block">Salvar</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        <br />
        <section v-show="raca" class="container">
            <div class="conteudo">
                <img class="imagem" :src="imagem" alt="Raca" />
                <div class="box">
                    <p class="texto" :class="[fonte, cor]">{{ nome }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import api from "../services/api";
export default {
    filters: {
        capitalize: function(value) {
            if (!value) return "";
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },
    data() {
        return {
            imagem: "",
            cor: "",
            raca: "",
            fonte: "",
            racas: [],
            fontes: [
                {
                    nome: "Abril Fatface",
                    classe: "abril-fatface"
                },
                {
                    nome: "Amatic SC",
                    classe: "amatic-sc"
                },
                {
                    nome: "Baloo Bhai",
                    classe: "baloo-bhai"
                },
                {
                    nome: "Pacifico",
                    classe: "pacifico"
                },
                {
                    nome: "Shadows Into Light",
                    classe: "shadows-into-light"
                }
            ],
            cores: [
                {
                    nome: "Azul",
                    classe: "text-primary"
                },
                {
                    nome: "Vermelho",
                    classe: "text-danger"
                },
                {
                    nome: "Verde",
                    classe: "text-success"
                },
                {
                    nome: "Amarelo",
                    classe: "text-warning"
                },
                {
                    nome: "Cinza escuro",
                    classe: "text-secondary"
                }
            ],
            nome: ""
        };
    },
    mounted() {
        this.getRacas();
    },
    methods: {
        async getRacas() {
            const response = await api.get(`/breeds/list/all`);
            this.racas = Object.keys(response.data.message);
        },
        async getImagem() {
            const response = await api.get(`/breed/${this.raca}/images/random`);
            this.imagem = response.data.message;
        },
        salvar() {}
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Baloo+Bhai|Pacifico|Shadows+Into+Light&display=swap");
.baloo-bhai {
    font-family: "Baloo Bhai", cursive;
}
.pacifico {
    font-family: "Pacifico", cursive;
}
.shadows-into-light {
    font-family: "Shadows Into Light", cursive;
}
.abril-fatface {
    font-family: "Abril Fatface", cursive;
}
.amatic-sc {
    font-family: "Amatic SC", cursive;
}

.conteudo {
    text-align: center;
    position: relative;
}

.imagem {
    max-width: 500px;
    max-height: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.texto {
    font-size: 33px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.box {
    background-color: white;
    opacity: 0.5;
    border-radius: 25%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 20%;
}
</style>