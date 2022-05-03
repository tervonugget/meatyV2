import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Continue from '../../comps/Continue';
import Nav from "../../comps/Nav"
import TaskBar from "../../comps/Tasks";

import { chco2, chto } from '../../data/selection';
import { getWeapon } from '../../data/selection';

const Container = styled.div`
  width: 400px;
  height: 650px;
  margin: 0 auto;
  outline: 2px red solid;
  
  .aCont {
    position: relative;
    width: 150px;
    height: 150px;
    place-content: center;
    top: 250px;
    left: 100px;
    z-index: 9999;
  }
  .chTongsCont {
    position: relative;
    width: 250px;
    height: 250px;
    place-content: center;
    top: 150px;
    left: 50px;
  }
  .chTongsCont2 {
    position: relative;
    width: 300px;
    height: 300px;
    place-content: center;
    top: 200px;
    left: 85px;
  }

  .wCont {
    position: relative;
    width: 250px;
    height: 250px;
    left: 70px;
    top: -50px;
  }
  .tongsCont {
    position: relative;
    width: 300px;
    height: 300px;
    left: 125px;
    top: 40px;
  }
  .tongsCont2 {
    position: relative;
    width: 300px;
    height: 300px;
    left: 110px;
    top: -330px;
  }


  .hover:hover {
    filter: drop-shadow(4px 4px 8px red);
    cursor: pointer;
  }
`

export default function ChickenIndex() {

  const r = useRouter();
  let w = getWeapon();
  let {page} = r.query;

  if (page === undefined) {
    page = 0;
  } 
  
  if (page === 0) { // PAGE 0
    if (w === "Bath") {
      return <div>
        <Container>
          <Nav />
          <h1>Bath</h1>
          <TaskBar />
        </Container>
      </div>
    } else if (w === "CO2") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="aCont hover" onClick={
              () => r.push({
                query: {
                  page: Number(page) + 1
                }
            })}>
            <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
            </div>
            <div className="wCont">
              <Image src={chco2[0].weapon} layout="fill" objectFit='contain' />
            </div>
          </Container>
        </div>
    } else if (w === "Tongs") {
        return <div>
          <Container>
          <Nav />
          <TaskBar />
            <div className="chTongsCont">
              <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
            </div>
            <div className="tongsCont hover" onClick={
              () => r.push({
                query: {
                  page: Number(page) + 1
                }
              })}>
              <Image src={chto[0].weapon} layout="fill" objectFit='contain' />
            </div>
          </Container>
        </div>
    } else {
        return <div>
          <Container>
            <h1>Uhoh! line 94 chicken index</h1>
          </Container>
          </div>
      } // end of page 0 
  } else if (r.asPath === "/chicken?page=1") { // PAGE 1
      if (w === "Bath") {
        return <div>
          <Container>
            <h1>Bath 1</h1>
          </Container>
        </div>
      } else if (w === "CO2") {
          return <div>
            <Container>
              <Nav />
              <TaskBar />
              <div className="aCont">
              </div>
              <div className="wCont hover" onClick={
                () => r.push({
                  query: {
                    page: Number(page) + 1
                  }
                })}>
                <Image src={chco2[0].weapon} layout="fill" objectFit='contain' />
              </div>
            </Container>
          </div>
        } else {
            return <div>
              <Container>
                <Nav />
                <TaskBar />
                <div className="chTongsCont2 hover" onClick={
                  () => r.push({
                    query: {
                      page: Number(page) + 1
                    }
                  })}>
                  <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
                </div>
                <div className="tongsCont2 hover" onClick={
                  () => r.push({
                    query: {
                      page: Number(page) + 1
                    }
                  })}>
                  <Image src={chto[1].weapon} layout="fill" objectFit='contain' />
                </div>
              </Container>
            </div>
        }
    } else if (r.asPath === "/chicken?page=2") { // PAGE 2
        if (w === "Bath") {
          return <div>
            <Container>
            </Container>
          </div>
        } else if (w === "CO2") {
          return <div>
            <Container>
              <Nav />
              <TaskBar />
              <div className="aCont">
              </div>
              <div className="wCont">
                <Image src={chco2[0].weapon} layout="fill" objectFit='contain' />
              </div>
            </Container>
            <Continue />
          </div>
        } else {
            return <div>
              <Container>
                <Nav />
                <TaskBar />
                <div className="chTongsCont2">
                  <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
                </div>
              </Container>
              <Continue />
            </div>
        }
    }
}