<template>
  <div class="container">
    <h2> Verify Your Account</h2>
    <p>We emailed you the six digit code to {{email}} <br/> Enter the code below to confirm your email address</p>
    <div class="code-container">
      <input
          v-for="(code, index) in codes"
          :key="index"
          type="number"
          class="code"
          placeholder="0"
          min="0"
          max="9"
          required
          v-model="codes[index]"
          @keydown.up.prevent="focusPrevious(index)"
          @keydown.down.prevent="focusNext(index)"
          @input="focusOnInput(index)"
          ref="codeInputs"
      />
    </div>
    <small class="info">
      This is design only. We didn't actually send you an email as we don't have your email, right?
    </small>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'

export default {
  name: "VerifyAccount",
  setup() {
      const email = ref('kek@gmai.com')
      const codes = Array(7).fill('')
      const codeInputs = ref(null)

      const focusNext = (index) => {
        console.log('focusNext')
        if (index < codes.length - 1) {
          nextTick(() => codeInputs.value[index + 1].focus())
        }
      }

      const focusPrevious = (index) => {
        if (index > 0) {
          nextTick(() => codeInputs.value[index - 1].focus())
        }
      }

      const focusOnInput = (index) => {
        if (codes[index] > 0) {
          focusNext(index);
        }
      }

      return {
        email,
        codes,
        focusNext,
        focusPrevious,
        focusOnInput,
        codeInputs
      }

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli:300,700&display=swap');

* {
    box-sizing: border-box;
}

body {
    font-family: 'Muli', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    background-color: #fbfcfe;
}

.container {
    background-color: white;
    border: 3px black solid;
    border-radius: 10px;
    padding: 30px;
    max-width: 1000px;
    text-align: center;
}

.code-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
}

.code {
    border: 1px solid #eee;
    border-radius: 5px;
    font-size: 75px;
    height: 120px;
    width: 100px;
    border: 1px solid #eee;
    margin: 1%;
    text-align: center;
    font-weight: 300;
    -moz-appearance: textfield;
}

.code::-webkit-outer-spin-button,
.code::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.code:valid {
    border-color: #3498db;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
}

.info {
    background-color: #eaeaea;
    display: inline-block;
    padding: 10px;
    line-height: 20px;
    max-width: 400px;
    color: #777;
    border-radius: 5px;
}

@media ((max-width: 600px) {
  .code-container{
    flex-wrap: wrap;
  }
  .code{
    font-size: 60px;
    height: 80px;
    max-width: 70px;
  }
}
</style>
