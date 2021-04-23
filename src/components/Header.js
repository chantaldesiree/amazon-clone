import styled from 'styled-components'
import LocationOn from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import flagCAN from "../images/flagCAN.png";

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      </Logo>
      <Nav>
        <NavOption>
          <LocationContainer>
            <LocationOn/>
          </LocationContainer>
          <AddressContainer>
            <NavOptionLineOne>Hello</NavOptionLineOne>
            <NavOptionLineTwo>Select your address</NavOptionLineTwo>
          </AddressContainer>
        </NavOption>
      </Nav>
      <Search>
        <SearchInputContainer>
          <SearchInput/>
        </SearchInputContainer>
        <SearchButton>
          <SearchMUIIcon />
        </SearchButton>
      </Search>
      <Nav>
        <NavOption>
          <FlagContainer>
            <img src={flagCAN} alt=""/>
          </FlagContainer>
        </NavOption>
        <NavOption>
          <NavOptionLineOne>Hello, Sign in</NavOptionLineOne>
          <NavOptionLineTwo>Account &amp; Lists</NavOptionLineTwo>
        </NavOption>
        <NavOption>
          <NavOptionLineOne>Returns</NavOptionLineOne>
          <NavOptionLineTwo>&amp; Orders</NavOptionLineTwo>
        </NavOption>

      </Nav>
      <BasketContainer>
            <ShoppingBasketIcon/>
            <BasketCount>0</BasketCount>
          </BasketContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  justify-content: space-between;
`;

const Logo = styled.div`
  img {
    width: 100px;
    object-fit: contain;
    margin: 0 -10px 0 20px;
    margin-top: 18px;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
  @media (max-width: 600px) {
    display: none;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  flex: 1;

  @media (max-width: 750px) {
    display: none;
}
`;

const SearchInputContainer = styled.div`
  height: 35px;
  border: 0;
  padding: 0;
  border-radius: 4px 0 0 4px;
  width: 100%;
`;

const SearchInput = styled.input`
  height: 35px;
  border: 0;
  padding: 0;
  border-radius: 4px 0 0 4px;
  width: 100%;
`;

const SearchButton = styled.button`
  background-color: orange;
  border-radius: 0 4px 4px 0;
  border: none;
  bottom: 0;
  height: 35px;
  width: 35px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchMUIIcon = styled(SearchIcon)`
  && {
    height: .9em;
  }
`
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 0 15px;
  overflow: hidden;

  @media (max-width: 500px) {
      display: none;
  }
`;

const NavOption = styled.button`
  color: white;
  height: 50px;
  margin: 10px;
  white-space: nowrap;
  background-color: #131921;
  border: 1px solid transparent;
  text-align: left;

  &:hover {
    border: 1px solid white;
  }
`;

const FlagContainer = styled.div`
  padding-top: 7px;
  margin: 0 -5px;

  img {
    width: 30px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const NavOptionLineOne = styled.div`
  font-size: 11px;
`;

const NavOptionLineTwo = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

const BasketContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin-right: 20px;
  white-space: nowrap;
  background-color: #131921;
  border: 1px solid transparent;
  text-align: left;
  height: 50px;

  &:hover {
    border: 1px solid white;
  }
`;

const BasketCount = styled.div`
  padding-left: 8px;
`;

export default Header;