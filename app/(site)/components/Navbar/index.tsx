"use client";
import "./styles.css";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import { StyledLink } from "../../styles/overrides";
import styled from "@emotion/styled";

const StyledNavLinks = styled(StyledLink)`
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #001219;

  &:hover {
    color: #005f73;

    .nav-indicator {
      background: #005f73;
      height: 2px;
    }
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const NavLinks = () => {
  const pathname = usePathname();
  const pathData = {
    About: "/about",
    Projects: "/projects",
    Jobs: "/jobs",
  };

  return (
    pathData &&
    Object.entries(pathData).map(([key, value], id) => {
      return (
        <div key={id} className="navigation__link--wrapper">
          <StyledNavLinks
            href={value}
            className={value === pathname ? "active" : ""}
          >
            <span className="nav-indicator"></span>
            {key}
          </StyledNavLinks>
        </div>
      );
    })
  );
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <section className="mobile-nav">
      <Box className="navigation">
        <div className="navigation__links">
          <NavLinks />
        </div>
      </Box>
    </section>
  );
}
