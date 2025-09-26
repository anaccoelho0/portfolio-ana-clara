<template>

<section class="page-section portfolio" id="experiencia">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary" style="color: #333;">Sobre Mim</h2>
      <div class="divider-custom">
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
        <div class="divider-custom-icon" style="color: #E8B4B8;"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <p class="lead" style="color: #333;">Olá! Sou Ana Clara Coelho.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section class="page-section bg-primary" id="experiencia" style="background-color: #FAD4E6 !important;">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary" style="color: #333;">PROJETOS</h2>
      <div class="divider-custom divider-light">
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
        <div class="divider-custom-icon" style="color: #E8B4B8;"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/img/site3.png" id="site" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/site1.png" id="site" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/site2.png" id="site" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div class="row">
      </div>
    </div>
  </section>

</template>

<style scoped>

.masthead {
  padding-top: calc(6rem + 74px);
  padding-bottom: 6rem;
}

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
  border-color: #E8B4B8 !important;
}

.divider-custom .divider-custom-icon {
  color: #E8B4B8;
  font-size: 2rem;
  margin: 0 1.5rem;
}

.card {
  border: 1px solid #E8B4B8;
}

.btn-social {
  border-width: 2px;
}
</style>


<script>

export default {
  name: 'Topicos'
}

</script>