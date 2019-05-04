import React, { PureComponent } from 'react';
import { QrcodeWrapper, QrcodeInfo } from '../style';

class Qrcode extends PureComponent {
  render() {
    return (
      <QrcodeWrapper>
        <img
          className="qrcode"
          src="https://s2.ax1x.com/2019/05/05/EdxqrF.jpg"
          alt=""
        />
        <QrcodeInfo>
          <h3 className="title">关注作者</h3>
          <p className="text">随时随地发现和创作内容</p>
        </QrcodeInfo>
      </QrcodeWrapper>
    );
  }
}

export default Qrcode;
