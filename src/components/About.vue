<template>
<div>
<navbar></navbar>

 <b-card  title="About us:"
          id="article"
          style="max-width: 80rem;"
          class="mb-2">
    <p class="card-text">
    Discover Beautiful Places With Visit® <br>
Visit® allows you to search for high quality travel stories about beautiful places from around the world. Whatever you’re interested in searching for - outdoor adventures, historical sites, city life, kid-friendly activities, beautiful vistas, or the hidden gems - Visit® will find the perfect spot for you.<br> Search for your next destination, and share them with future travel buddies.

    </p>
  </b-card>
<hr>
<footer>

    
    <div class="footer-copyright text-center py-3">© 2019 Copyright: BAYA & AMIN & YOUSEF</div>
   

  </footer>
  


</div>
</template>

<script>

import Navbar from './Navbar.vue';



export default {
  name: 'about',
  components: {
    Navbar
  }
 

 
  
 
  
}
</script>

<style scooped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#article{
  margin-top: 50px;
  margin-bottom: 50px !important;
  margin-left: 350px;
  width: 700px !important;
  text-align: left;

}

  .brand {
    background-color: #17a2b8;
  }

  

  .btn-primary {
    box-shadow: 2px 2px 2px #d2d2d2;
    background-color: #6f8aa7;
    padding: .5em 2em;
    display: inline-block;
    color: #FFF;
    text-decoration: none;
    border-radius: 3px;
    transition: all ease 0.3s;
  }

  .btn-primary:hover {
    background-color: #47b784
  }

  .comment-list {
    padding: 1em 0;
    width: 700px;
  }

  .comment-list ul{
    margin: 0;
    padding: 1em;
  }

  .comment-list li{
    list-style: none;
    text-align: left;
    overflow: hidden;
    margin-bottom: 2em;
    padding: .4em;
  }
.comment-list .profile {
    width: 80px;
    float: left;
  }

  .comment-list .profile img {
    border-radius: 50%;
    border: 2px solid #FFF;
    width: 48px;
    height: 48px;
    background-color: #DDD;
    box-shadow: 0 0 5px #DDD;
  }
  

  .comment-list .msg {
    width: 86%;
    float: left;
    background-color: #FFF;
    border-radius: 0 5px 5px 5px;
    box-shadow: 0 4px 8px -2px rgba(0,0,0, 0.05);
    position: relative;
  }

  .comment-list .msg-body {
    padding: .8em;
    color: #666;
    line-height: 1.5
  }

  .comment-list .msg-body p:last-child {
    margin-bottom: 0;
  }

  .comment-list .msg-body:after {
    content: ' ';
    position: absolute;
    left: -13px;
    top: 0;
    border: 14px solid;
    border-color: #fff transparent transparent transparent;
  }

  .comment-list .name {
    margin: 0;
    color: #999;
    font-weight: bold;
    font-size: .8em;
  }

  .comment-list .date {
    float: right;
  }

  

 


  .comment-box {
    background-color: #FFF; 
    width: 700px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0,0,0, 0.1);
  }

  .comment-box form {
    padding: 1rem;
  }

  .comment-box input, .comment-box textarea {
    font-size: .8em;
    width: 97.3%;
    padding: .6em;
    border: 1px solid #EEE;
    background-color: #f7f7f7;
    display: block;
    margin-bottom: 1em;
    font-family: 'Raleway', sans-serif;
    transition: all ease 0.3s;
  }

  .comment-box input:focus, .comment-box textarea:focus {
    border-color: #47b784;
    outline: none;
    box-shadow: inset 0 0 3px #DDD;
  }

  .comment-box input[type="submit"] {
    margin-bottom: 0;
    width: 30%;
    background-color: #47b784;
    color: #FFF;
    border-color: #47b784;
    font-weight: bold;
    text-transform: uppercase;
  }

  .comment-box input[type="submit"]:focus {
    background-color: #36495d;
  }

  .comment-box input[type="submit"]:disabled {
    opacity: 0.6
  }

  #comment {
    position: relative;
  }

  

  #comment .loader {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 2;
  }
</style>

