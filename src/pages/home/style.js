import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  width: 625px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 8px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 12px;
  padding-right: 6px;
  background: #f7f7f7;
  font-size: 13px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 38px;
    height: 32px;
    margin-right: 6px;
  }
`;

// export const ListItem = styled.div`
//   overflow: hidden;
//   padding: 20px 0;
//   border-bottom: 1px solid #dcdcdc;
//   .pic {
//     display: block;
//     width: 125px;
//     height: 100px;
//     float: right;
//     border-radius: 10px;
//   }
// `;

// export const ListInfo = styled.div`
//   width: 500px;
//   float: left;
//   .title {
//     line-height: 27px;
//     font-size: 18px;
//     font-weight: bold;
//     color: #333;
//   }
//   .desc {
//     line-height: 24px;
//     font-size: 13px;
//     color: #999;
//   }
// `;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 15px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    margin-top: 10px;
    width: 150px;
    height: 104px;
    float: left;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 455px;
  float: right;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 27px 0 15px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  margin-bottom: 5px;
`;

export const QrcodeWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
  width: 278px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  height: 80px;
  .qrcode {
    float: left;
    width: 60px;
    height: 60px;
    opacity: 0.85;
    padding: 10px 10px;
  }
`;

export const QrcodeInfo = styled.a.attrs({
  href: 'https://github.com/ChenxiiCheng'
})`
  width: 188px;
  float: right;
  .title {
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin: 15px 0 10px 10px;
  }
  .text {
    font-size: 13px;
    margin: 5px 0 10px 10px;
    color: #999;
  }
`;

export const WriterWrapper = styled.div`
  overflow: hidden;
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  text-align: center;
  .title {
    float: left;
    margin: 8px auto;
    padding-left: 10px;
    font-size: 14px;
    color: #969696;
  }
`;

export const WriteItem = styled.div`
  margin-top: 40px;
  .writer-pic {
    float: left;
    margin-left: 5px;
    padding: 11px;
    width: 40px;
    height: 40px;
    border-radius: 15px;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ccc;
  cursor: pointer;
  .iconfont {
    font-size: 30px;
  }
`;
