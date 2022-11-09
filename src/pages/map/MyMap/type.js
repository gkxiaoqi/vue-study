import { Feature, Map as _Map, View } from 'ol'
import { Point, LineString, MultiLineString } from 'ol/geom'
import { Vector as VectorLayer } from 'ol/layer'
import Overlay from 'ol/Overlay'
import Cluster from 'ol/source/Cluster'
import Draw from 'ol/interaction/Draw'
export class OlPoint extends Point{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlPoint'
  }
}
export class OlOverlay extends Overlay{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlOverlay'
  }
}
export class OlFeature extends Feature{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlFeature'
  }
}
export class OlMap extends _Map{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlMap'
  }
}

export class OlVectorLayer extends VectorLayer{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlVectorLayer'
  }
}
export class OlLineString extends LineString{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlLineString'
  }
}

export class OlMultiLineString extends MultiLineString{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlMultiLineString'
  }
}

export class OlView extends View{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlView'
  }
}

export class OlCluster extends Cluster{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlCluster'
    this.name = 'OlCluster'
    this.overlayIds = [] // 储存 VMarker id 集合
    this.showZoomFeatureIds = [] // 聚合图形被清空布局和情况下，子 feature  id 集合
    this.singleFeatureIds = new Set() // 不聚合情况下的的显示的单个矢量要素 id 集合（排除 VMarker id ）
  }
}

export class OlDraw extends Draw{
  constructor(arg) {
    super(arg)
    this.CTYPE = 'OlDraw'
  }
}
