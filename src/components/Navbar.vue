<template>
  <div>
   
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#"><img src="https://www.eckerd.edu/wp-content/uploads/2015/09/icon-visit1.png" height="60"></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item href="/top"> Most visited places</b-nav-item>
      <b-nav-item to="/about"> About us</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text"  placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">AR</b-dropdown-item>
        <b-dropdown-item href="#">FR</b-dropdown-item>
      </b-nav-item-dropdown>

    
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
  </div>

</template>

<script>
  export default {
    name: 'navbar',
     
  }
</script>
