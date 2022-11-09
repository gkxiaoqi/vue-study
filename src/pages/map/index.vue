<template>
  <div id="map"></div>
  <div class="btns">
    <el-button type="primary" @click="handleStartAnim">动画开始</el-button>
  </div>
</template>

<script setup>
import 'ol/ol.css';
import Feature from 'ol/Feature';
import { ref, onMounted } from 'vue';
import { Map, View } from 'ol';
import { Point, LineString } from 'ol/geom';
import { Style, Fill, Stroke, Circle, Icon } from 'ol/style';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import CarIcon from '@/assets/car.png';
import * as turf from '@turf/turf';
import { transform } from 'ol/proj';

let map = ref(null);
let lineLayer = ref(null);
let carLayer = ref(null);
const initMap = () => {
  map.value = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM({}),
      }),
    ],
    view: new View({
      center: [13149174.386521997, 3871944.9059128333],
      zoom: 8,
      maxZoom: 20,
      projection: 'EPSG:3857',
    }),
  });
  map.value.on('singleclick', (e) => {
    const pos = e.coordinate;
    console.log('pos: ', pos);
  });
};

const initLine = () => {
  lineLayer.value = new VectorLayer({
    source: new VectorSource({}),
  });
  const lineFeature = new Feature({});
  lineFeature.setStyle(
    new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 2,
      }),
    })
  );
  lineFeature.set('id', 'line');
  lineFeature.setGeometry(
    new LineString([[13136805.919882603, 4043063.5256720036]])
  );
  lineLayer.value.getSource().addFeature(lineFeature);
  map.value.addLayer(lineLayer.value);
};

const initCar = () => {
  carLayer.value = new VectorLayer({
    source: new VectorSource({}),
  });
  const carFeature = new Feature({});
  carFeature.setStyle(
    new Style({
      image: new Icon({
        src: CarIcon,
        scale: 0.3,
        rotation: Math.PI,
      }),
    })
  );
  carFeature.set('id', 'car');
  carFeature.setGeometry(new Point([13136805.919882603, 4043063.5256720036]));
  carLayer.value.getSource().addFeature(carFeature);
  map.value.addLayer(carLayer.value);
};

const handleStartAnim = () => {
  const carFeature = carLayer.value
    .getSource()
    .getFeatures()
    .find((item) => item.get('id') === 'car');
  const lineFeature = lineLayer.value
    .getSource()
    .getFeatures()
    .find((item) => item.get('id') === 'line');
  console.log(2222, lineFeature.getGeometry());
  const line = turf.lineString([
    transform(
      [13136805.919882603, 4043063.5256720036],
      'EPSG:3857',
      'EPSG:4326'
    ),
    transform(
      [13131159.134418035, 3749907.218612714],
      'EPSG:3857',
      'EPSG:4326'
    ),
  ]);
  const chunk = turf.lineChunk(line, 0.5);
  let i = 0;
  setInterval(() => {
    if (i < chunk.features.length) {
      const nextPos = transform(
        chunk.features[i].geometry.coordinates[1],
        'EPSG:4326',
        'EPSG:3857'
      );
      carFeature.setGeometry(new Point(nextPos));
      lineFeature.getGeometry().appendCoordinate(nextPos);
    }
    i++;
  }, 10);
};

onMounted(() => {
  initMap();
  initLine();
  initCar();
});
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: calc(100vh - 114px);
}
.btns {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
}
</style>
