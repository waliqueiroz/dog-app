<template>
    <div>
        <section class="container">
            <div class="row">
                <div v-for="(item, index) in galeria" :key="index" class="col-sm-4">
                    <div class="conteudo margin-conteudo">
                        <img class="imagem img-responsive fit fit-image" :src="item.imagem" alt="Raca" />
                        <div class="box">
                            <p class="texto" :class="[item.fonte, item.cor]">{{ item.nome }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            galeria: []
        };
    },
    mounted() {
        this.galeria = window.localStorage.getItem("@galeria") ? JSON.parse(window.localStorage.getItem("@galeria")) : [];
    }
};
</script>

<style scoped>
.fit {
    height: 300px;
}

.margin-conteudo {
    margin-top: 10px;
    margin-bottom: 10px;
}

@media only screen and (max-width: 991px) {
  .texto {
     font-size: 25px !important;
  }
}
@media only screen and (max-width: 767px) {
  .texto {
     font-size: 18px !important;
  }
}

</style>