import { Menu, Dropdown, Typography, Avatar } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const MainMenu = () => {
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.pathname.substring(1))
  }, [])

  let items = [
    {
      label: 'Parks',
      key: 'parks',
    },
    {
      label: 'Pups',
      key: 'pups',
    },
    {
      label: 'Packs',
      key: 'packs',
    },
  ]
  

  const handleClick = ({key}) => {
    switch(key) {
      case 'parks':
        window.location.href = '/parks'
        break;
      case 'pups':
        window.location.href = '/pups'
        break;
      case 'packs':
        window.location.href = '/packs'
        break;
      case '1':
          window.location.href = `/signup/`
          break;
      default:
        break;
    }

    
  }
  const menu = (
    <Menu
    onClick={handleClick}
      selectable
      items={[
        {
          key: '1',
          label: 'Sign up',
        },
        {
          key: '2',
          label: 'Log in',
        }
      ]}
    />
  );
  return (
    <>
      <ul className={styles.mainMenu}>
        {items.map((item, index) => <li key={index} className={(path == item.key) ? styles.mainMenuActive : '' }><span>{item.label}</span></li>)}
        <Dropdown  overlay={menu} trigger={['click']} placement="bottomLeft">
          <Typography.Link>
            <li><span className={styles.avatar}><MenuOutlined style={{ marginRight: 12 }} /><Avatar size={32} icon={<UserOutlined />} /></span></li>
          </Typography.Link>
        </Dropdown>
      </ul>
    </>
  )
}

export default MainMenu;
