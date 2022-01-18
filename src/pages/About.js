import React from "react";
import Text from "../components/atoms/Text";

const About = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "80%" }}>
        <Text
          size={"60px"}
          padding={"50px 0px 20px"}
          text={`About Weathery`}
          color={"#fff"}
        />
      </div>
      <div style={{ width: "80%" }}>
        <Text
          color={"#fff"}
          size={"17px"}
          text={`Heroines is a platform which benefits diverse groups of women by hosting supportive events. The About Us page successfully captures the spirit of the organization, beginning with a heartwarming text about its mission and photographs of empowered women who represent their community. The website color scheme is gentle, combining purples and pinks that channel positive female vibes. Parallax scrolling helps to engage visitors even more, allowing the areas of color and photographs to shift throughout the page as they browse. By confidently placing calls-to-action on the About Us page - a sweet “Donate” button on the right hand side, and a slider at the bottom of the page - visitors are invited to become members of the organization. Parallax scrolling helps to engage visitors even more, allowing the areas of color and photographs to shift throughout the page as they browse. By confidently placing calls-to-action on the About Us page - a sweet “Donate” button on the right hand side, and a slider at the bottom of the page - visitors are invited to become members of the organization.`}
        />
      </div>
    </div>
  );
};

export default About;
