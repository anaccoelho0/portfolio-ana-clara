<template>

  <footer class="footer text-center" style="background-color: #FAD4E6; color: #333; padding: 2rem 0;">
    <div class="container">
      <div class="row">

        <!-- Localização -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase">Localização</h4>
          <div class="footer-divider"></div>
          <p class="lead mb-0">Feira de Santana - BA, Brasil</p>
        </div>

        <!-- Redes Sociais -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase">Redes Sociais</h4>
          <div class="footer-divider"></div>
          <div class="d-flex justify-content-center ">
              <!-- Ícone do GitHub  -->
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#E8B4B8" viewBox="0 0 24 24">
                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.092 3.292 9.403 7.868 10.937.575.105.786-.25.786-.556 
        0-.274-.01-1-.015-1.962-3.2.696-3.878-1.543-3.878-1.543-.523-1.33-1.278-1.686-1.278-1.686-1.043-.714.079-.699.079-.699 
        1.152.081 1.758 1.183 1.758 1.183 1.026 1.757 2.691 1.25 3.346.955.105-.743.402-1.25.73-1.537-2.553-.29-5.237-1.277-5.237-5.682 
        0-1.255.45-2.28 1.183-3.084-.119-.29-.512-1.458.112-3.04 0 0 .964-.309 3.16 1.178a10.95 10.95 0 012.878-.387c.976.005 1.96.132 2.878.387 
        2.194-1.487 3.156-1.178 3.156-1.178.627 1.582.233 2.75.114 3.04.736.804 1.182 1.829 1.182 3.084 
        0 4.416-2.688 5.388-5.252 5.672.414.357.783 1.065.783 2.146 0 1.548-.014 2.795-.014 3.176 
        0 .309.207.667.793.553C20.713 21.4 24 17.092 24 12c0-6.352-5.148-11.5-12-11.5z"/>
              </svg>

            <a href="" target="_blank" class="mx-2">
              <!-- Ícone do LinkedIn -->
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#E8B4B8" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.849-3.037-1.853
                   0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.41v1.561h.049c.476-.9 
                  1.637-1.849 3.368-1.849 3.6 0 4.268 2.37 4.268 5.456v6.284zM5.337 
                  7.433a1.987 1.987 0 110-3.975 1.987 1.987 0 010 3.975zM6.883 
                  20.452H3.793V9h3.09v11.452zM22.225 0H1.771C.792 0 0 .774 
                  0 1.729v20.542C0 23.226.792 24 1.771 
                  24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="" target="_blank" class="mx-2">
              <!-- Ícone do Instagram  -->
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#E8B4B8" viewBox="0 0 24 24">
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 011.675 1.092 4.92 
        4.92 0 011.092 1.675c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 
        3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.092 1.675 4.92 
        4.92 0 01-1.675 1.092c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 
        4.92 0 01-1.675-1.092 4.92 4.92 0 01-1.092-1.675c-.163-.457-.347-1.257-.403-2.427C2.175 
        15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 
        4.92 0 011.092-1.675A4.92 4.92 0 015.403 2.59c.457-.163 1.257-.347 
        2.427-.403C8.096 2.175 8.476 2.163 12 2.163zm0 
        3.675a6.162 6.162 0 100 12.324 6.162 
        6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 
        3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 
        0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Sobre o Portfólio -->
        <div class="col-lg-4">
          <h4 class="text-uppercase mb-4">Sobre o Portfólio</h4>
          <p class="lead mb-0">Criado com Vue.js e Bootstrap</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.page-section-heading {
  font-family: 'Roboto', sans-serif; 
  font-weight: 700;
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 2rem;
}

.footer-divider {
  width: 50px;
  height: 3px;
  background-color: #E8B4B8;
  margin: 0.5rem auto 1rem;
  border-radius: 2px;
}

</style>

<script>

export default {
  name: 'Rodape'
}

</script>