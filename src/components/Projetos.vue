<template>

     <section class="page-section bg-primary" id="experiencia" style="background-color: #FAD4E6 !important;">
     <div class="container d-flex flex-column align-items-center">

      <!-- Título -->
      <h3 class="page-section-heading text-center text-uppercase text-secondary" style="color: #333;">PROJETOS</h3>

      <!-- Divisão por listrinha -->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
        <div class="divider-custom-icon" style="color: #E8B4B8;"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
      </div>

      <!-- Carrossel  -->
      <div id="carouselExampleFade" class="carousel slide carousel-fade w-75">
        <div class="carousel-inner text-center">
          <div class="carousel-item active">
            <img src="../assets/img/site3.png" class="d-block mx-auto img-fluid rounded shadow" alt="Site 3">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/site1.png" class="d-block mx-auto img-fluid rounded shadow" alt="Site 1">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/site2.png" class="d-block mx-auto img-fluid rounded shadow" alt="Site 2">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
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

.carousel-inner img {
  max-height: 400px;
  object-fit: cover;
}
</style>

<script>

export default {
  name: 'Projetos'
}

</script>