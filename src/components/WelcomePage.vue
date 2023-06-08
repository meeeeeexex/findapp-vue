<template>
  <body>
  <div class="container">
    <div class="main">
      <h1 id="text2">Find App</h1>
      <h2 class="desc">We are product which helps with contacting<br> someone who lost our found you thing</h2>
      <form id="form" class="user-form">
        <input type="text" class="input" id="input" placeholder="Enter thing what you found or lost" autocomplete="off">
      </form>
    </div>

  </div>
  </body>
</template>

<script>
export default {
  name: "WelcomePage",
  mounted() {
    const textEl = document.getElementById('text2')
    const speedEl = 0.6
    const text = 'Find App'
    let idx = 1
    let speed = 300 / speedEl

    writeAll()

    function writeAll() {
      setTimeout(writeText, 3000)
    }

    function writeText() {
      textEl.innerText = text.slice(0, idx)

      idx++

      if (idx > text.length) {
        console.log('logged')
        // Set a delay of 2 seconds before calling writeText() again
        setTimeout(writeText, 3000)
        idx = 1
        return
      }

      setTimeout(writeText, speed)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

}

body {
  background-color: rgb(112, 21, 203);
  /*background-color: #f5f5f5;*/
  color: #444;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}


h1 {
  color: #ffffff;
  font-size: 10rem;
  opacity: 0.55;
  margin-bottom: 30px;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.user-form {
  align-items: center;
  width: 100%;
  max-width: 700px;
}

.main {
  position: absolute;
  width: 140%;
  transform: translateX(20%) translateY(20%);
}

.user-form input {
  width: 100%;
  display: block;
  background-color: #532891;
  border: none;
  border-radius: 18px;
  height: 70px;
  color: white;
  padding: 1rem;
  margin-bottom: 2rem;
  font-family: inherit;
  font-size: 1.3rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2),
  0 15px 40px rgba(0, 0, 0, 0.3);
}

.user-form input::placeholder {
  color: #bbb;
}

.user-form input:focus {
  outline: none;
}


small {
  color: #b5b5b5;
  margin-top: 3rem;
  text-align: center;
}

.cards {
  position: absolute;
  right: 0;
  width: 17%;
  animation: moveInRight 4s ease-in-out;

}

.desc {
  color: #b7aeae;
  padding-bottom: 20px;

}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  80% {
    transform: translateX(-20px);
  }
  90% {
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.card {
  display: flex;
  max-width: 800px;
  background-color: #2a2a72;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3),
  0 15px 40px rgba(0, 0, 0, 0.3);
  padding: 3rem;
  padding-top: 20px;;
  padding-left: 2px;
  margin: 2.1rem 1.5rem;
  overflow: hidden;
  height: 200px;
}

.user-info {
  color: #eee;
  margin-left: .5rem;
}

.user-info p {
  padding-top: 3px;
  margin: 0;
  font-size: .6rem;
}

.user-info h2 {
  margin-top: 0;
  margin-bottom: 0;
}

.user-info ul {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  padding: 0;
  max-width: 400px;
}

.user-info ul li {
  display: flex;
  align-items: center;
}

.user-info ul li strong {
  font-size: 0.9rem;
  margin-left: 0.5rem;
}


@media (max-width: 500px) {
  .card {
    flex-direction: column;
    align-items: center;
  }

  .user-form {
    max-width: 400px;

  }
}

.avatar {
  margin-right: 1px;
  border-radius: 50%;
  border: 10px solid #2a2a72;
  height: 90px;
  width: 90px;

}

</style>