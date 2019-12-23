import React from 'react';
import { Empty } from 'antd'
import { connect } from 'dva';
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
  componentDidMount() {

  }

  render() {
    return (
      <div>
        webgis
      </div>
    );
  }
}
