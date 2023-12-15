import React from "react";
import Link from "next/link";
import {Navbar} from "react-bootstrap";
import {Button} from "react-bootstrap";


const Navigationbar = () => {
  return (
    <>      
        <div className="flex justify-between items-center h-full">
            <Navbar>
                
            
              <div>
                <Button variant="info">
                <Link href="/">
                  <p>Etusivu</p>
                </Link>
                </Button>
              
              </div>
              <div>
              <Button variant="warning">
                <Link href="/huomishinta">
                  <p> Huomisen hinnat</p>
                </Link>
                </Button>
              
              </div>
              <div>
              <Button variant="warning">
                <Link href="/nykyhinta">
                  <p> Nykyiset hinnat</p>
                </Link>
                </Button>
              
              </div>
              
            
            </Navbar>
      </div>
    </>
  );
};

export default Navigationbar;