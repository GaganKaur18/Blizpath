import CarouselSlider from "react-carousel-slider";
const AboutUsCrousel = () => {
  let data = [
    {
      des: "laurem ipsum 1",
      imgSrc: "https://i.imgur.com/d5aiXJP.jpg",
    },
    {
      des: "laurem ipsum 2 afasdf ",
      imgSrc: "https://i.imgur.com/pgCzueK.jpg",
    },
    {
      des: "3 laurem ipsum 2 afasdf",
      imgSrc: "https://i.imgur.com/7nbAJ0C.jpg",
    },
    {
      des: "4 laurem ipsum 2 afasdf",
      imgSrc: "https://i.imgur.com/L75otV6.jpg",
    },
    {
      des: "5 laurem ipsum 2 afasdf",
      imgSrc: "https://i.imgur.com/qkPMr9D.jpg",
    },
  ];

  /* Percantage to set height does not work well 
in prop sliderBoxStyle here because we could 
not init the height of parent element */

  let sliderBoxStyle = {
    height: "auto",
    width: "80vw",
    overflowY: "hidden",
    // , background: "tranparent"
  };

  let itemsStyle = {
    height: "60vh",
    width: "80vw",
    // , padding: "15px"
    // background: "#FFCA28",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    // , borderRadius: "4px"
    // , margin: "0px 0px", padding: "0px"
  };

  let textBoxStyle = {
    // textAlign: "left"
    width: "30%",
    // , background: "transparent"
    // , fontSize: "36px"
    // , fontWeight: 300
  };

  let buttonSetting = {
    placeOn: "middle-inside",
    // ,hoverEvent: true,
    // , style: {
    //   left: {
    //     margin: "0px 0px 0px 10px"
    //   },
    //   right: {
    //     margin: "0px 10px 0px 0px"
    //   }
    // }
  };

  let manner = {
    // autoSliding: {interval: "4s"}
    //, duration: "0.3s"
  };
  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        sliderBoxStyle={sliderBoxStyle}
        itemsStyle={itemsStyle}
        textBoxStyle={textBoxStyle}
      />
    </div>
  );
};

export default AboutUsCrousel;
