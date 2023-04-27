import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FAQ from './FAQ';
import PartnerOnBoard from './PartnerOnBoard';

const Help = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="FAQ'S"
        id="controlled-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="home" title="Legal" >
          <PartnerOnBoard />
        </Tab>
        <Tab eventKey="FAQ'S" title="FAQ'S">
          <FAQ />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Help
