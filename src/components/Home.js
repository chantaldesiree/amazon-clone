import styled from 'styled-components'
import madeForLove from '../images/made-for-love.jpg'
import mothersDay from '../images/mothers-day-flowers.jpg'
import mothersDayGiftGuide from '../images/mothers-day-home-gift-guide.jpg'
import womensShoes from '../images/womens-shoes.jpg'

const Home = () => {

  return (
    <Container>
      <Banner>
        <img src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/TV/BRND/BRND_MTH21_00000_GWBleedingHero_3000x1200_Final_en-CA_FT_PVD6656._CB656951988_.jpg" alt=""/>
      </Banner>
      <Features>
        <FeatureItem>
          <h2>New: "Made For Love"</h2>
          <FeatureImageLarge>
            <img src={madeForLove} alt=""/>
          </FeatureImageLarge>
          <FeatureLink>
            Watch now on Prime Video
          </FeatureLink>
        </FeatureItem>
        <FeatureItem>
          <h2>Mother's Day</h2>
          <FeatureImageLarge>
            <img src={mothersDay} alt=""/>
          </FeatureImageLarge>
          <FeatureLink>
            Shop now
          </FeatureLink>
        </FeatureItem>
        <FeatureItem>
          <h2>New release movies</h2>
        </FeatureItem>
        <Wrap>
          <FeatureItem>
            <h2>Customer Orders Update</h2>
            <span>We're working to deliver orders while keeping employees safe.</span>
            <FeatureLink>
              Questions? Contact Customer Service
          </FeatureLink>
          </FeatureItem>
          <div style={{height: "200px"}}></div>
        </Wrap>
        <FeatureItem>
          <h2>Mother's Day Home Gift Guide</h2>
          <FeatureImageLarge>
            <img src={mothersDayGiftGuide} alt=""/>
          </FeatureImageLarge>
          <FeatureLink>
            Shop now
          </FeatureLink>
        </FeatureItem>
        <FeatureItem>
          <h2>Shop gift ideas for Mom</h2>
        </FeatureItem>
        <FeatureItem>
          <h2>Women's Shoes</h2>
          <FeatureImageLarge>
            <img src={womensShoes} alt=""/>
          </FeatureImageLarge>
          <FeatureLink>
            Shop now
          </FeatureLink>
        </FeatureItem>
        <FeatureItem>
          <h2>Baby Registry: Discover all the benefits</h2>
        </FeatureItem>
      </Features>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(210,210,210)
  z-index: -10;
  margin-bottom: 300px;
`;

const Banner = styled.div`
  max-width: 1500px;
  background-color: rgb(210,210,210);

  img {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(10, 10, 10,0));
  }
`;

const Features = styled.div`
  padding-top: calc(20%);
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1450px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 725px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

`;

const FeatureItem = styled.div`
    padding: 20px;
    height: auto;
    max-height: 365px;
    width: 300px;
    background-color: white;

    h2 {
      font-size: 21px;
      padding: 0;
      margin: 0 0 10px 0;
    }

    span {
      font-size: 14px;
    }
`;

const FeatureImageLarge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing:border-box;
  margin-top: 12px;

  img {
    object-fit: cover;
    overflow: hidden;
    min-height: 280px;
    &:hover {
      cursor: pointer;
    }
  }

`;

const FeatureLink = styled.button`
  background-color: white;
  color: #1e6f84;
  border: none;
  cursor: pointer;
  padding-top: 15px;
  padding-left: 0px;

  &:hover {
    text-decoration: underline;
    color: #c25724;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;