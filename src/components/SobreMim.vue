<template>
  <!-- Seção Sobre Mim -->
  <section class="page-section portfolio" id="experiencia" style="background-color: #F4F6F7;">
    <div class="container d-flex flex-column align-items-center">

      <!-- Título -->
      <h3 class="page-section-heading text-center text-uppercase text-secondary" style="color: #333;">SOBRE MIM</h3>

      <!-- Divisão por listrinha -->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
        <div class="divider-custom-icon" style="color: #E8B4B8;"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
      </div>

      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="lead" style="color: #5D6D7E;">
            Olá! Sou Ana Clara Coelho, desenvolvedora web apaixonada por tecnologia e design.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-section {
  padding: 6rem 0;
}

.divider-custom {
  margin: 2.5rem 0 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.divider-custom .divider-custom-line {
  width: 100%;
  max-width: 7rem;
  height: 0.25rem;
  background-color: #E8B4B8;
  border-radius: 1rem;
}

.divider-custom .divider-custom-icon {
  color: #E8B4B8;
  font-size: 2rem;
  margin: 0 1.5rem;
}

.lead {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  color: #5D6D7E;
  line-height: 1.6;
}
</style>

<script>
export default {
  name: 'SobreMim'
}
</script>
