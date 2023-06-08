<template>
  <div class="main-container">
  <div class="navbar">
      <nav>
        <ul class="left-nav">
          <li><a href="#meetings">Meetings</a></li>
          <li><a href="#chat">Chat</a></li>
        </ul>
      </nav>
      <div class="search-container">
              <input class="search-bar" type="text" v-model="searchTerm" placeholder="Search...">
              <div v-if="searchTerm" class="suggestions" v-click-outside="hideSuggestions">
                <div
                    v-for="tag in filteredTags"
                    :key="tag"
                    class="suggestion"
                    @click="addTag(tag)"
                >
                  {{ tag }}
                </div>
              </div>
      </div>

      <nav>
        <ul class="right-nav">
          <li><a href="#mycabinet">My Cabinet</a></li>
        </ul>
      </nav>
    </div>


    <div class="tag-container">
      <div
          v-for="tag in selectedTags"
          :key="tag"
          class="tag selected"
          @click="removeTag(tag)">
        {{ tag }}
      </div>
    </div>

    <div class="board-info">

    <h2>
      That's the board of things try to search something
    </h2>
    </div>


    <div class="announcement-board">
      <div class="announcement" v-for="announcement in filteredAnnouncements" :key="announcement.id">
        <div class="photo">
          <img :src="announcement.thing.photo" alt="Photo">
        </div>
        <div class="details">
          <p>{{ announcement.thing.description }}</p>
          <p>Date of Action: {{ announcement.date_of_action }}</p>
          <p>Date of Post: {{ announcement.date_of_post }}</p>
          <p>Place: {{ announcement.place }}</p>
          <p>Posted by: {{ announcement.user.nickname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
      selectedTags: [],
      searchTerm: '',
      announcements: [
        {
          "id": 3,
          "thing": {
            "id": 1,
            "photo": "photo1",
            "description": "description1",
            "best_match": null
          },
          "date_of_action": "2023-06-05T12:28:31.325119",
          "date_of_post": "2023-06-05T15:38:40.816536",
          "place": "stsqo[dm[qoring",
          "is_lost": true,
          "user": {
            "email": "email",
            "id": 1,
            "nickname": "nickname",
            "amount_of_complaints": 0,
            "amount_of_found": 0,
            "amount_of_lost": 0,
            "is_blocked": false,
            "rating": null
          }
        },
          {
          "id": 4,
          "thing": {
            "id": 1,
            "photo": "photo1",
            "description": "description1",
            "best_match": null
          },
          "date_of_action": "2023-06-05T12:28:31.325119",
          "date_of_post": "2023-06-05T15:38:40.816536",
          "place": "stsqo[dm[qoring",
          "is_lost": true,
          "user": {
            "email": "email",
            "id": 1,
            "nickname": "nickname",
            "amount_of_complaints": 0,
            "amount_of_found": 0,
            "amount_of_lost": 0,
            "is_blocked": false,
            "rating": null
          }
        },


      ]
    };
  },
  computed: {
    filteredAnnouncements() {
        return this.announcements;
      },

    filteredTags() {
      let search = this.searchTerm.toLowerCase();
      return this.tags.filter(tag => tag.toLowerCase().includes(search));
    }
  },
  methods: {
    addTag(tag) {
      if (!this.selectedTags.includes(tag)) {
        this.selectedTags.push(tag);
      }
      this.searchTerm = '';
    },
    removeTag(tag){
      let index = this.selectedTags.indexOf(tag);
      if (index > -1) {
        this.selectedTags.splice(index, 1);
      }
    },
    hideSuggestions() {
      console.log("Should be hidden")
      this.searchTerm = '';
    },
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #532891;
  padding: 10px;
  font-size:2.2vh

}

.search-container {
  padding-top: 10px;
}


nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 90%;
  margin: auto;
}

nav ul {
  display: flex;
  gap: 20px;
}

nav ul.left-nav li,
nav ul.right-nav li {
  list-style: none;
}

nav ul.left-nav li a,
nav ul.right-nav li a {
  text-decoration: none;
  color: #b4afaf;
  font-weight: 600;
}
.right-nav {
  margin-left: auto;
  margin-right: 10px
}
.announcement-board {
  display: grid;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

.announcement {
  display: grid;
  gap: 15px;
  grid-template-areas:
      'photo details';
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 0.3s ease;
}

.announcement .photo {
  grid-area: photo;
  max-width: 200px;
}

.announcement .details {
  grid-area: details;
}

.announcement img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}


.search-bar {
  padding: 10px;
  border: none;
  border-radius: 25px;
  width: 80vh;
  height: 7vh;
  outline: none;
  background-color: #2d1c4f;
  color: #b4afaf;
  font-size:3.4vh
}
.search-bar input::placeholder {
  color: #b4afaf;
;
}



.main-container{
  background-color: rgb(112, 21, 203);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.board-info{
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding-top: 20px;
}
.tag-container {
  margin-top:20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tag {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  background: #eee;
  transition: all 0.3s;
}
.tag:hover {
  background: #ddd;
}
.tag.selected {
  background: #bada55;
}
.suggestions {
  position: absolute;
  width: 80vh;
  max-height: 150px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
}
.suggestion {
  padding: 5px 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}
.suggestion:last-child {
  border-bottom: 0;
}
.suggestion:hover {
  background: #ddd;
}
</style>

