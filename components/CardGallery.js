import {Row,Col,Skeleton} from 'antd'
import Card from './Card'
import styles from '../styles/Home.module.css'


const CardGallery = ({ items }) => {
  if (items.length === 0) {
    return (
      <>
      <Row>
      {
        Array.from({ length: 4 }).map((item, index) => (
          <Col key={index} span={6}>
            <Skeleton active />
          </Col>
        ))
      }
      </Row>
      </>
    )
  }
  return (
    <div className={styles.cardGallery}>
      <Row gutter={[16, 36]}>
        {items.map((item, index) => <Card key={index} id={index} item={item} />)}
      </Row>
    </div>
  )
}

export default CardGallery;