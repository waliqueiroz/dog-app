<template>
    <div>
        <br />
        <section class="container">
            <form @submit.prevent="salvar()">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="font-weight-bold" for="select-breed">Selecione a raça</label>
                            <select required @change="getImagem()" v-model="raca" class="form-control" name="select-breed" id="select-breed">
                                <option v-for="(item, index) in racas" :value="item" :key="index">{{ item | capitalize }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="form-group">
                            <label class="font-weight-bold" for="nome">Insira o nome do cachorro</label>
                            <input required v-model="nome" name="nome" id="nome" class="form-control" type="text" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label class="font-weight-bold" for="fonte">Selecione a fonte</label>
                            <select required v-model="fonte" class="form-control" name="fonte" id="fonted">
                                <option v-for="(item, index) in fontes" :value="item.classe" :key="index">{{ item.nome }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label class="font-weight-bold" for="cor">Selecione a cor da fonte</label>
                            <select required v-model="cor" class="form-control" name="cor" id="cor">
                                <option v-for="(item, index) in cores" :value="item.classe" :key="index">{{ item.nome }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-2 align-self-end">
                        <div class="form-group">
                            <button type="submit" class="btn btn-success btn-block">Salvar</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        <br />
        <section v-show="raca" class="container">
            <div id="moldura">
                <div class="conteudo">
                    <img class="imagem fit fit-image" :src="imagem" alt="Raca" />
                    <div class="box">
                        <p class="texto" :class="[fonte, cor]">{{ nome }}</p>
                    </div>
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
            galeria: [],
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
        this.galeria = window.localStorage.getItem("@galeria") ? JSON.parse(window.localStorage.getItem("@galeria")) : [];
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
        salvar() {
            const { imagem, nome, fonte, cor } = this;
            const dados = { imagem, nome, fonte, cor, data: new Date().toLocaleString() };
            this.galeria.push(dados);
            window.localStorage.setItem("@galeria", JSON.stringify(this.galeria));
            this.$swal({
                title: "Imagem salva com sucesso!",
                text: "Para ver os itens salvos vá para a galeria.",
                icon: "success"
            });
        }
    }
};
</script>

<style scoped>
#moldura {
    width: 500px;
    margin: auto;
}

.fit {
    height: 400px;
}

</style>