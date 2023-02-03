import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './SharedLayout.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: rgb(105, 69, 2);
    text-decoration: underline;
  }
`;

const SharedLayout = () => {
  return (
    <div className={css.app}>
      <nav className={css.nav}>
        <StyledLink className={css.nav__link} to="./">
          Home
        </StyledLink>
        <StyledLink className={css.nav__link} to="./Movies">
          Movies
        </StyledLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
