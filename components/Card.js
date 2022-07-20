import { Col } from 'antd';
import Image from 'next/image';
import styles from '../styles/Home.module.css'


const Card = ({ item,id }) => {
  let { name, neighborhood, featured_image } = item;
  const handleClick = (id) => {
    window.location.href = `/parks/${id}`
  }
  return (
    <Col xs={24} sm={6}>
      <div className={styles.card} onClick={() => handleClick(id)}>
        <div className={styles.image}>
          <Image src={featured_image || 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'} className={styles.parkImage} alt={name} width={321} height={321} />
          {/* <div className={styles.actions}>
            <div className={styles.circle}><ArrowRightOutlined /></div>
          </div> */}
        </div>

        <h2 className={styles.parkTitle}>{name}</h2>
        <p>{neighborhood}</p>
      </div>
    </Col>
  )
}


export default Card;