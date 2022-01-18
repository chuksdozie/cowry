import React from "react";
import Text from "../components/atoms/Text";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "80%" }}>
        <Text
          size={"60px"}
          padding={"50px 0px 20px"}
          text={`About The Developer`}
          color={"#fff"}
        />
      </div>
      <div style={{ width: "80%" }}>
        <Text
          color={"#fff"}
          size={"17px"}
          text={`Chukwu Chiedozie has been a Fullstack Developer specialized in web based platforms since 2021 who contributes to innovative, groundbreaking software solutions that meet business demand for
          agility, flexibility, mobility and a superb cloud experience. `}
        />
      </div>
      <hr style={{ width: "60%", margin: "20px 0 -20px" }} />
      <div style={{ width: "80%" }}>
        <Text
          size={"30px"}
          padding={"50px 0px 20px"}
          text={`Development Methods & Tools`}
          color={"#fff"}
        />
      </div>
      <div style={{ width: "80%" }}>
        <Text
          color={"#fff"}
          size={"17px"}
          text={`Agile Development Methodologies | Test Driven Development (TDD) | Object-Oriented Design & Development Technologies`}
        />
      </div>
      <div style={{ width: "80%" }}>
        <Text
          color={"#fff"}
          size={"17px"}
          text={`Go, Java, JavaScript, J2EE, C++, C, C#, .NET Framework, AngularJS, jQuery, Git, PERL, Bash, Python, Smalltalk, Servlets, Struts, Eclipse, JSP, Velocity, ASP.NET, VB.NET, WebSphere, Hibernate, Mobile Development (iOS, Android, PhoneGap, Cordova, Ionic framework), AJAX, LINQ, JSON, GWT, Flex, Web Services, XML, HTML, CSS, SharePoint, Linux, Oracle, SQL Server, SAP DB, Sybase, Access, DB2, SAP SQL Anywhere, Azure`}
        />
      </div>
      <div>
        <AiOutlineGithub style={{ width: 30, height: 30, color: "#fff" }} />
        <AiFillLinkedin style={{ width: 30, height: 30, color: "#fff" }} />
        <AiOutlineGithub style={{ width: 30, height: 30, color: "#fff" }} />
        <AiOutlineGithub style={{ width: 30, height: 30, color: "#fff" }} />
      </div>
    </div>
  );
};

export default Contact;
