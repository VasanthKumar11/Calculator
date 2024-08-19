import React, { useState } from 'react'
import './Calculator.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Form , Card,Container} from 'react-bootstrap';
import Calbnk from'../Components/Calbnk.png';
function Calculatorasmd() {
  let [input, setInput] = useState("")
  let [output, setOutput] = useState("")

  let handleInput = (e) => {
    setInput(input + (e.target.value))
  }

  let clickresult = () => {
    let range;
    try {
      const operands = input.match(/[+\-*/]|\d+(\.\+-\d+)?/g);
      range = parseFloat(operands[0]);
      for (let i = 1; i < operands.length; i++) {
        const operator = operands[i];
        const content = parseFloat(operands[i + 1]);
        switch (operator) {
          case '+':
            range += content;
            break
          case '-':
            range -= content;
            break;
          case '*':
            range *= content;
            break;
          case '/':
            range /= content;
            break;
          case '%':
            range %= content;
            break;
          default:
            break;
        }
      }
      setOutput(range.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
  };

  const handleBack = () => {
    setInput(input.slice(0, -1));
  };



  return (
    <div className='bkimg' >
     
    <Container  >

      <Row>
        <Col md={4} ></Col>
        <Col md={4} >
          {/* <Card style={{ marginTop:"180px" , width:"200px",marginLeft:"120px" , borderRadius:"15px"}} > */}
          <Card className='cal-bdy' style={{borderRadius:"25px"}}>
            <Card.Body className='cl'>
            <Form.Control size='lg' type="text" value={output || input} placeholder="" />
          <div className='btn-row'>
            <Button variant="danger" className='btn' value="AC" onClick={clearInput}>AC</Button>
            <Button variant="dark" value="00" onClick={handleInput}>00</Button>
            <Button variant="dark" value=".0" onClick={handleInput}>.0</Button>
            <Button variant="dark" value="/" onClick={handleInput}>/</Button>
          </div>
          <div className='btn-row'>
            <Button variant="dark" value="7" onClick={handleInput}>7</Button>
            <Button variant="dark" value="8" onClick={handleInput}>8</Button>
            <Button variant="dark" value="9" onClick={handleInput}>9</Button>
            <Button variant="dark" value="*" onClick={handleInput}>*</Button>
          </div>
          <div className='btn-row'>
            <Button variant="dark" value="4" onClick={handleInput}>4</Button>
            <Button variant="dark" value="5" onClick={handleInput}>5</Button>
            <Button variant="dark" value="6" onClick={handleInput}>6</Button>
            <Button variant="dark" value="-" onClick={handleInput}>-</Button>
          </div>
          <div className='btn-row'>
            <Button variant="dark" value="1" onClick={handleInput}>1</Button>
            <Button variant="dark" value="2" onClick={handleInput}>2</Button>
            <Button variant="dark" value="3" onClick={handleInput}>3</Button>
            <Button variant="dark" value="+" onClick={handleInput}>+</Button>
          </div>
          <div className='btn-row'>
            <Button variant="dark" value="0" onClick={handleInput}>0</Button>
            <Button variant="dark" value="." onClick={handleInput}>.</Button>
            <Button variant="info" value="=" onClick={clickresult}>=</Button>
            <Button variant="danger" value='Del' onClick={handleBack}>Del</Button>
          </div>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} ></Col>
       
      </Row>





    
    </Container>
   
    </div>
  )

}

export default Calculatorasmd