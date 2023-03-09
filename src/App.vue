<template>
  <div class="navbar">
    <HeaderComp title="Tally Counter" />
    <div class="routing">
      <router-link to="/">Home</router-link>
      <router-link to="/NotFound">NotFound</router-link>
    </div>
  </div>

  <router-view></router-view>
  <FooterComp footer="Copyright Odufejo Ufoma Ibukunoluwa" />
</template>

<script>
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
  border-radius: 10px;
  background-color: #313866;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #313866;
}

.routing {
  display: flex;
  justify-content: end;
  gap: 50px;
  margin: 20px 0;
  
}

a {
  text-decoration: none;
  font-weight: 900;
  color: #fff;
}

.buttoncomp {
  display: flex;
  justify-content: space-between;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
