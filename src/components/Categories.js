import styled from 'styled-components'
import Menu from '@material-ui/icons/Menu'

const Categories = () => {

  return (
    <Container>
      <CategoryList>
        <CategoryOption>
          <AllContainer>
            <Menu/><span>All</span>
          </AllContainer>
        </CategoryOption>
        <CategoryOption>Best Sellers</CategoryOption>
        <CategoryOption>Prime</CategoryOption>
        <CategoryOption>New Releases</CategoryOption>
        <CategoryOption>Gift Ideas</CategoryOption>
        <CategoryOption>Deals Store</CategoryOption>
        <CategoryOption>Customer Service</CategoryOption>
        <CategoryOption>Electronics</CategoryOption>
        <CategoryOption>Home</CategoryOption>
        <CategoryOption>Books</CategoryOption>
        <CategoryOption>Computers</CategoryOption>
        <CategoryOption>Gift Cards</CategoryOption>
        <CategoryOption>Coupons</CategoryOption>
        <CategoryOption>Toys &amp; Games</CategoryOption>
        <CategoryOption>Health &amp; Household</CategoryOption>
        <CategoryOption>Fashion</CategoryOption>
      </CategoryList>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`;

const CategoryList = styled.div`
  padding: 0 20px;
  height: 44px;
  background-color: #12213b;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const CategoryOption = styled.button`
  color: white;
  background-color: #12213b;
  border: 1px solid transparent;
  height: 30px;
  white-space: nowrap;
  padding: 0 10px;

  &:hover {
    border: 1px solid white;
  }

  @media (max-width: 1450px) {
    &:nth-child(16) {
      display: none;
    }
  }

  @media (max-width: 1350px) {
    &:nth-child(15) {
      display: none;
    }
  }

  @media (max-width: 1210px) {
    &:nth-child(14) {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    &:nth-child(13) {
      display: none;
    }
  }

  @media (max-width: 1020px) {
    &:nth-child(12) {
      display: none;
    }
  }

  @media (max-width: 945px) {
    &:nth-child(11) {
      display: none;
    }
  }

  @media (max-width: 855px) {
    &:nth-child(10) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    &:nth-child(9) {
      display: none;
    }
  }

  @media (max-width: 750px) {
    &:nth-child(8) {
      display: none;
    }
  }

  @media (max-width: 655px) {
    &:nth-child(7) {
      display: none;
    }
  }

  @media (max-width: 525px) {
    &:nth-child(6) {
      display: none;
    }
  }

`;

const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -12px;
  padding-left: 10px;

  span {
    padding-left: 5px;
  }
`;

export default Categories;