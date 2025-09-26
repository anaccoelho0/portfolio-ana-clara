<template>
<header id="page-top" class="masthead bg-primary text-white text-center" style="background-color: #FAD4E6 !important;">
    <div class="container d-flex align-items-center flex-column">
      <img class="masthead-avatar mb-5 rounded-circle" src="../assets/img/perfil.jpg" alt="Ana Clara Coelho" style="border: 3px solid #E8B4B8; width: 150px; height: 150px; object-fit: cover;" />
      <h1 class="masthead-heading text-uppercase mb-0" style="color: #333;">Ana Clara Coelho</h1>
      <div class="divider-custom divider-light">
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
        <div class="divider-custom-icon" style="color: #E8B4B8;"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line" style="background-color: #E8B4B8;"></div>
      </div>
      <p class="masthead-subheading font-weight-light mb-0" style="color: #333;">Desenvolvedora Web | Designer | Criativa</p>
    </div>
  </header> 
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
  name: 'NavBar'
}
</script>