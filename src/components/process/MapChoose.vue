<template>
  <!--  TODO подготовить список с локациами для быстрого поиска-->
  <div class="main-container">
    <div class="desc">
      <h3>Choose on map place or street where did you find or lost thing and upload image if possible</h3>
      <v-card class="mt-4 overflow-auto">
        <v-card-text class="font-weight-bold">Upload your image here</v-card-text>
        <v-card-actions class="footer">
          <img v-if="computedUrl" class="custom-img" :src="computedUrl" alt="" />
          <input @change="handleImage" class="custom-input" type="file" accept="image/*" />
        </v-card-actions>
      </v-card>
    </div>
    <v-dialog
      v-model="dialog"
      width="auto"
      persistent
    >
      <v-card>
        <v-card-text>
          Are you sure ?
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="onCancelClick" variant="outlined">No</v-btn>
          <v-btn color="primary" @click="nextStep" variant="outlined">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="map-container">
      <GoogleMap
          ref="map"
          api-key="AIzaSyAUtnBbgrXVZy8xa1kLe0djUm0uTzKl_5I"
          style="
            width: 100%;
            height: 600px;

          "
          :center="center"
          :zoom="13"
          @click="addMarker"
      >
        <MarkerCluster>
          <Marker
              v-for="(location, i) in locations"
              :options="{ position: location }"
              :key="i"
          />
          <Marker
              v-for="(marker, index) in markers"
              :options="{ position: marker.position }"
              :key="'marker_' + index"
              @click="showPopup(marker)"
          />
        </MarkerCluster>
      </GoogleMap>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map'
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import { convertToUrl } from "@/helpers/convertToUrl";
// import axios from 'axios'

export default defineComponent({
  components: {GoogleMap, Marker, MarkerCluster},
  setup() {
    const center = {lat: 52.225955, lng: 20.989853}
    const store = useStore();
    const router = useRouter();
    const image = ref('');

    const locations = [
      {lat: 54.218878, lng: 24.017450},
      {lat: 52.418878, lng: 21.017450},
      {lat: 52.818878, lng: 21.017450},
      {lat: 52.118878, lng: 21.017450},
      {lat: 52.918878, lng: 21.017450},
      {lat: 53.218878, lng: 21.017450},
      {lat: 52.225955, lng: 20.989853},
      {lat: 51.298878, lng: 21.017450},
      {lat: 51.718878, lng: 21.017450},
    ]

    const markers = ref([])
    const showInfo = ref(false)
    const selectedMarker = ref(null)
    const showPopupOverlay = ref(false)
    const dialog = ref(false)

    const computedUrl = computed(() => {
      return convertToUrl(image.value)
    })

    const createBase64Image = (fileObject) => {
      const reader = new FileReader();
      reader.onload = () => {
        image.value = reader.result;
      };
      reader.readAsDataURL(fileObject)
    }

    const handleImage = (e) => {
      const selectedImage = e.target.files[0];
      createBase64Image(selectedImage)
    }

    const addMarker = (event) => {
      dialog.value = true
      markers.value.push({position: event.latLng})
    }

    const onCancelClick = () => {
      markers.value.pop()
      dialog.value = false
    }

    const nextStep = () => {
      store.dispatch('setGeolocation', markers.value[markers.value.length - 1]);
      // axios.post('url', {
      //   photo: image.value,
      //   description: store.getters.getDescription
      // }).then((res) => {
      //   store.dispatch('setThingId', res.data)
      // }).finally(() => router.push('/register'))
      router.push('/register')
    }

    const showPopup = (marker) => {
      selectedMarker.value = marker
      showInfo.value = true
    }

    const hidePopup = () => {
      selectedMarker.value = null
      showInfo.value = false
    }

    const blockMap = () => {
      showPopupOverlay.value = false
    }

    const unblockMap = () => {
      showPopupOverlay.value = false
    }

    return {
      center,
      locations,
      markers,
      showInfo,
      selectedMarker,
      image,
      handleImage,
      addMarker,
      showPopup,
      hidePopup,
      blockMap,
      unblockMap,
      onCancelClick,
      showPopupOverlay,
      nextStep,
      dialog,
      computedUrl
    }
  },
})
</script>


<style scoped>

.desc {
  color: #ffffff;
  /*color: rgb(179, 131, 226);*/
  font-size: 25px;
  margin-right: 50px;
  text-align: left;
  opacity: 0.9;
  width: 40%;
}
.main-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100vh;
  padding: 40px;
  background: #532891;
}

.map-container {
  overflow: hidden;
  float: right;
  width: 60%;
  height: 600px;
  border-radius: 18px;
  border: 10px solid #f5f5f5;
}

.custom-img {
  width: 200px;
  height: 200px;
}

.footer {
  justify-content: left;
  display: flex;
  flex-direction: column;
}
</style>
