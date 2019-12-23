import React from 'react';
import { connect } from 'dva';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Tile } from 'ol/layer';
import { XYZ } from 'ol/source';
import styles from './index.css'

interface DataItems {
  netValueDate: string;
  netValue: string;
  totalNetValue: string;
  dayOfGrowth: string;
}

interface IPageMainProps {
  fundDatas: DataItems[];
  funds: [string, string, string][];
  dispatch: any;
}

const mapStateToProps = ({ fundModel }) => {
  return {
    fundDatas: fundModel.fundDatas,
    funds: fundModel.funds
  };
}

/**
 * 首页
 */
@connect(mapStateToProps)
export default class PageMain extends React.Component<IPageMainProps> {
  map = {}
  componentDidMount() {
    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: fromLonLat([114.30, 30.60]),
        zoom: 8
      })
    });
  }



  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>WebGIS示例</div>
        <div id="map" className={styles.map} ></div>
      </div>
    );
  }
}
