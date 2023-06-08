<template>

  <div class="main-container">
  <section class="product">
    <div class="product__image">
      <img
        :src="image"
        alt="Razer Kraken Kitty Edt Gaming Headset Quartz"
        class="product__img"
      />
    </div>

    <div class="product__details">
      <span class="product__tag">Free Shipping</span>

      <h2 class="product__title">
        Razer Kraken Kitty Edt Gaming Headset Quartz
      </h2>

      <div class="product__pricing">
        <p class="product__price product__price--old">$799</p>
        <p class="product__price product__price--new">$599</p>
        <p class="product__offer">
          This offer is valid until April 3rd or as long as stock lasts!
        </p>
      </div>

      <button class="product__add-btn">
        Add to cart
      </button>

      <div class="product__stock">
        <div class="product__stock-indicator"></div>
        <span class="product__stock-text">50+ pcs. in stock</span>
      </div>

      <div class="product__actions">
        <button class="product__action-btn">
          <img :src="image2" alt="Cart Icon" class="product__action-icon" />
          <span>Add to cart</span>
        </button>

        <button class="product__action-btn">
          <img :src="image3" alt="Wishlist Icon" class="product__action-icon" />
          <span>Add to wishlist</span>
        </button>
      </div>
    </div>
  </section>


    <div class="map-container">
      <GoogleMap
        ref="map"
        api-key="AIzaSyAUtnBbgrXVZy8xa1kLe0djUm0uTzKl_5I"
        style="width: 100%; height: 65vh;"
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
import {defineComponent, ref} from 'vue'
import {GoogleMap, Marker, MarkerCluster} from 'vue3-google-map'
import image from '@/components/core/board/images/headphone.png';
import image2 from '@/components/core/board/images/heart.png';
import image3 from '@/components/core/board/images/weight.png';

export default defineComponent({
  name: 'TheItem',
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
      showPopupOverlay,
      image,
      image2,
      image3
    }
  },
})
</script>


<style scoped>

.map-container {
  float: right;
  width: 20%;
  height: 65vh;
  border-radius: 18px;
  border: 10px solid #f5f5f5;
  margin-left:65px;
}

.main-container{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgb(112, 21, 203); /* purple background */
  margin: 0;
  width: 100%;
  height: 100vh;
  //max-width:5000px;
  box-sizing: border-box;

}

.product {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  max-width: 800px; /* adjust as needed */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  max-height: 100vh;

  background-color: #f8f9fa;
  padding: 2em;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.product__image {
  margin-right: 2em;
}

.product__img {
  width: 280px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

.product__img:hover {
  transform: scale(1.05);
}

.product__details {
  flex: 1;
}

.product__tag {
  display: inline-block;
  padding: 0.5em 1em;
  font-size: 0.8em;
  color: white;
  background-color: #007bff;
  border-radius: 50px;
}

.product__title {
  margin: 1em 0;
  font-size: 1.5em;
}

.product__price {
  font-size: 1em;
}

.product__price--old {
  text-decoration: line-through;
  color: #6c757d;
}

.product__price--new {
  font-size: 2em;
  color: #28a745;
  font-weight: bold;
}

.product__quote("#offer-info {\n  font-size: 14px;\n", "color: #6c757d;\n}")

quote("#add-button {\n  width: 100%;\n", "transition: all 0.15s;\n}")

quote("#add-button:hover {\n", "box-shadow: 0px 10px 15px rgba(0,0,0,0.1);\n}")

quote("#secondary-buttons{\n  flex-direction: row;\n", "justify-content: space-evenly;\n}")

quote(".secondary-button {\n  display: flex;\n", "transition: all 0.15s;\n}")

quote(".secondary-button:hover {\n", "transform: translateY(-2px);\n}")

quote("#cart-icon,\n#wishlist-icon {\n", "width: 32px;\n}")
.offer {
  font-size: 0.8em;
  color: #6c757d;
}

.product__add-btn {
  display: inline-block;
  margin: 1em 0;
  padding: 1em 2em;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.product__add-btn:hover {
  background-color: #0056b3;
}

.product__stock {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.product__stock-indicator {
  width: 10px;
  height: 10px;
  background-color: #28a745;
  border-radius: 50%;
}

.product__stock-text {
  font-size: 0.8em;
}

.product__actions {
  display: flex;
  gap: 1em;
  margin-top: 2em;
}

.product__action-btn {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 1em;
  font-size: 0.8em;
  color: #343a40;
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.product__action-btn:hover {
  background-color: #f8f9fa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.product__action-icon {
  width: 20px;
  height: 20px;
}

</style>