<template>
<div>


 <div class="comment">
        

        <div class="comment-list">
        <span v-show="loading" class="spinner"></span>
          <ul>
              <div v-for="comment in comments" :comment="comment">
              	<li transition="slide">

      <div class="profile"><img :src="avatar" alt=""></div>

   <star-rating :value="0"  ></star-rating>
      <div class="msg">
        <div class="msg-body">
          <p class="name">{{ comment.name }} <span class="date">{{ comment.time | moment("from", "now")  }}</span></p>
          <p v-html="comment.message"></p>
        </div>
      </div>
    </li>
              </div>
          </ul>
        </div>

        <div v-on:commented="updateComment">
        <div class="comment-box" id="comment">
        <div class="loader" v-show="loading" >
          <span class="spinner"></span>  
        </div>
        
       <form action=""  @submit.prevent="addComment">
          <textarea ref="message" class="input-message" id="inp1" rows="3" placeholder="Your comment..." required></textarea>
          <input ref="name" class="input-name" type="text"  placeholder="Your Name" required>
          <input :disabled="loading" type="submit" value="Comment">
        </form>
    </div>
        </div>
    </div>
            


</div>
</template>

<script>



import StarRating from './StarRating.vue';


export default {
  name: 'about',
  components: {
    StarRating
  },
    data () {
      return {
        comments: [
          {
            name: "Baya Dhouib",
            time: "2019-01-10 12:30",
            message: "I visited Dogga and there was so much more to see here than I expected. The amphitheater is really well presserved and the view from the top is breathtaking."
          }
        ],
        name:"",
        message:"",
        avatar: "https://lh3.googleusercontent.com/xd3xpcpy_lPFcNaRrxYpxQ2fCfozTjJxW2DZ9bB568vXnNKPcsUW0KiXZhdFFw0vsw"
      }
    },

 

    methods: {
      updateComment (comment) {
        
                  this.comments.push(comment);

      },
      addComment(){
                  let nname = this.$refs.name.value;
                  let mmessage = this.$refs.message.value;
                  comment.name= nname;
                  comment.message= mmessage;
                  comment.time= new Date();
                
                  this.comments.push(comment);
                  this.$refs.name.value=" ",
                  this.$refs.message.value=" "

      }
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

  .comment {
    background-color: #17a2b8;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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
    width: 100%;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0,0,0, 0.1);
  }

  .comment-box form {
    padding: 1rem;
    margin-top:20px;
    margin-bottom:20px;
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
        margin-left: 250px
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

