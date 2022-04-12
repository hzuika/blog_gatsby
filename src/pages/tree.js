import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const UlTree = styled.ul`
  list-style-type: none;
  margin: 0 0 0 15px;
  padding: 0;
  position: relative;
  & > li:before {
    border: none;
  }
  & > li:after {
    border: none;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0 0 0 15px;
  padding: 0;
  position: relative;
`;

const Li = styled.li`
  ul & {
    position: relative;
    margin: 0;
    padding: 7px 20px;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 18px;
    left: 0;
    width: 13px;
    height: 0;
    border-top: 1px solid #666;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-left: 1px solid #666;
  }

  &:last-child:after {
    height: 18px;
  }
`;

const TreePage = () => {
  return (
    <Layout pageTitle="Tree Layout Test">
      <UlTree>
        <Li>
          /
          <Ul>
            <Li>
              source/
              <Ul>
                <Li>
                  blender/
                  <Ul>
                    <Li>blenlib/</Li>
                  </Ul>
                </Li>
                <Li>creator/</Li>
              </Ul>
            </Li>
          </Ul>
        </Li>
      </UlTree>
    </Layout>
  );
};

export default TreePage;
