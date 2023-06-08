<template>
  <!--  TODO возможность удалить последний добавленый маркер-->
  <!--  TODO подготовить список с локациами для быстрого поиска-->
  <div class="main-container">
    <h2 class="desc">Choose on map place or street where did you find or lost thing</h2>
    <div class="map-container">
    <GoogleMap
        ref="map"
        api-key="AIzaSyAUtnBbgrXVZy8xa1kLe0djUm0uTzKl_5I"
        style="width: 100%;
               height: 600px;"

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
    <!--      <div v-if="showPopupOverlay"-->
    <!--           style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999;"></div>-->

    <div v-if="showInfo"
         style="position: absolute;  left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; z-index: 1000;">
      <h3>Some important info</h3>
      <button @click="hidePopup">Close</button>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {GoogleMap, Marker, MarkerCluster} from 'vue3-google-map'

export default defineComponent({
  components: {GoogleMap, Marker, MarkerCluster},
  setup() {
    const center = {lat: 52.225955, lng: 20.989853}

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

    const addMarker = (event) => {
      console.log('added marker')
      markers.value.push({position: event.latLng})
      const marker = markers.value[markers.value.length - 1];
      showPopup(marker)
    }

    const showPopup = (marker) => {
      console.log('show popup')

      selectedMarker.value = marker
      showInfo.value = true
    }

    const hidePopup = () => {
      console.log('hide popup')

      selectedMarker.value = null
      showInfo.value = false
    }

    const blockMap = () => {
      console.log('block map')

      showPopupOverlay.value = false
    }

    const unblockMap = () => {
      console.log('unblock map')

      showPopupOverlay.value = false
    }

    return {
      center,
      locations,
      markers,
      showInfo,
      selectedMarker,
      addMarker,
      showPopup,
      hidePopup,
      blockMap,
      unblockMap,
      showPopupOverlay
    }
  },
})
</script>


<style scoped>

h2{

}
.desc {
  color: #ffffff;
  /*color: rgb(179, 131, 226);*/
  font-size: 10vh;
  opacity: 0.8;
  margin-bottom: 30px;
  width: 40%;
  justify-content: center;
  text-align: center;
  color: #b7aeae;
  padding-bottom: 20px;
  margin-right: 3vh;
  margin-left: 3vh;


}
.main-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100vh;
  background: #532891;
}

.map-container {
  float: right;
  width: 60%;
  height: 600px;
  border-radius: 18px;
  border: 10px solid #f5f5f5;
}
</style>
