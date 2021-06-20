import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";


return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value=""
              placeholder="Please provide the username"
            />
            <InputGroupAddon addonType="append">
              <Button color="primary">Fetch User</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md="7"></Col>
      </Row>
    </Container>
  );