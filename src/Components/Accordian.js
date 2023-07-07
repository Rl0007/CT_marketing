import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./Accordian.css";
import Navbar from "./Navbar";
import mountain1 from "../images/mountian1.jpg";
import Footer from "./Footer";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   position: relative;
  height: 100vh;
  //   padding-left: 2rem;
  //   padding-top: 2rem;
  //   background: rgb(59, 63, 143);
  background-image: url(${mountain1});
  background-size: cover;
`;

const Container = styled.div`
  //   position: absolute;
  top: 30%;
  //   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  //   background: #272727;
  //   background: #134543;
  //   color: #pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  //   h1 {
  //     padding: 2rem;
  //     font-size: 2rem;
  //   }

  //   span {
  //     margin-right: 1.5rem;
  //   }
`;

const Dropdown = styled.div`
  //   padding-top: 6rem;
  //   background: #1c1c1c;
  //   color: #00ffb9;
  //   width: 100%;
  //   height: 100px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   border-bottom: 1px solid #00ffb9;
  //   border-top: 1px solid #00ffb9;

  //   p {
  //     font-size: 2rem;
  //   }
  //   opacity: 0.5;
  //   zindex: -2;
  //   padding-left: -2rem;
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(0);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div>
      {/* <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}> */}
      <AccordionSection className="Accordion">
        <Container>
          {/* <Wrap key={0}>
            <h1>Homepage</h1>
        </Wrap>
        <Dropdown>

        </Dropdown> */}
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1 style={{ color: "rgba(22, 45, 99, 0.8)" }}>
                    {item.question}
                  </h1>
                  {/* <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span> */}
                </Wrap>
                {clicked === index ? (
                  <Dropdown className="dropdown">
                    {/* {index === 0 ? <Navbar /> : null} */}
                    {item.answer}
                    <div></div>
                    {index === 2 ? <Footer /> : null}
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </div>
    // </IconContext.Provider>
  );
};

export default Accordion;
