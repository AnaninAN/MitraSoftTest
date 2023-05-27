import cls from './AppNavbar.module.scss';

import Avatar from '@/shared/assets/images/avatar.jpg';

import { memo, useMemo, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { AppNavbarItemType } from '../model/types/appNavbar';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Menu } from '@/shared/types/menu';
import { AppAvatar } from '@/shared/ui/AppAvatar';

const navbarItemsList: AppNavbarItemType[] = [
  {
    path: RoutePath.main,
    text: 'MENU_MAIN',
  },
  {
    path: RoutePath.about,
    text: 'MENU_ABOUT',
  },
];

const menuTranslate: Record<Menu, string> = {
  MENU_MAIN: 'Список постов',
  MENU_ABOUT: 'Обо мне',
};

export const AppNavbar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  const itemsList = useMemo(
    () =>
      navbarItemsList.map((item) => (
        <LinkContainer onClick={onToggle} key={item.text} to={item.path}>
          <Nav.Link>{menuTranslate[item.text]}</Nav.Link>
        </LinkContainer>
      )),
    [navbarItemsList, collapsed]
  );

  return (
    <Navbar onToggle={onToggle} expanded={collapsed} bg="light" expand={false}>
      <Container>
        <Navbar.Brand>Mitra Soft Test</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className={cls.wrapper}>
              <AppAvatar src={Avatar} />
              <div className={cls.info}>
                <span>Андрей Ананьин</span>
                <span>ananinpgu@mail.ru</span>
              </div>
            </div>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {itemsList}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
});
