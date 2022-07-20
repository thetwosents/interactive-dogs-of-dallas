import Image from 'next/image'
import {Layout, Row, Col} from 'antd' 
import styles from '../styles/Home.module.css'
import MainMenu from './MainMenu'

const {Header} = Layout

const MainHeader = () => {
  return (
    <Header className={styles.header} style={{
      background: '#ffffff',
      padding: '0px 80px',
      height: '80px'
    }}>
      <Row align="middle" justify='space-between'>
        <Col>
          <Image style={{ display: 'block' }} src={'/logo.svg'} alt={'Logo'} width={200} height={80} />
        </Col>
        <Col span={12}>
          <MainMenu />
        </Col>
      </Row>
    </Header>
  )
}

export default MainHeader;