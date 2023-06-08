<template>
  <div class="content">
    <div class="popup">
      <div class="popup-content">
        <h2>Did you lose or find something?</h2>
        <div class="buttons">
          <button @click="userChoice('lost')" class="popup-button">I lost something</button>
          <button @click="userChoice('found')" class="popup-button">I found something</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoundLostChoice",
  data() {
    return {
      showPopup: true
    };
  },
  methods: {
    userChoice(choice) {
      alert(`You chose: ${choice}`);
      this.showPopup = false;
    },
  }
}
</script>

<style scoped>
.buttons{
  flex-direction: row;
  justify-content: space-between;
}


.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #532891;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: #6a4d94;
  padding: 20px;
  border-radius: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 30vh;
}

.popup-content h2 {
  color: #fff;
  margin-bottom: 20px;
}

.popup-button {
  background-color: #fff;
  color: #532891;
  border: none;
  border-radius: 18px;
  height: 50px;
  margin-top: 20px;
  margin-right: 20px;
  padding: 0 20px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.popup-button:hover {
  background-color: #eeeeee;
}


</style>