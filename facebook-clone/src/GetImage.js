import dp0 from "./images/dp0.png";
import dp1 from "./images/dp1.png";
import dp2 from "./images/dp2.png";
import dp3 from "./images/dp3.png";
import dp4 from "./images/dp4.png";
import dp5 from "./images/dp5.png";
import dp6 from "./images/dp6.png";
import dp7 from "./images/dp7.png";
import dp8 from "./images/dp8.png";
import dp9 from "./images/dp9.png";

export const getImage = (item) => {
  switch (item) {
    case "dp0":
      return dp0;
    case "dp1":
      return dp1;
    case "dp2":
      return dp2;
    case "dp3":
      return dp3;
    case "dp4":
      return dp4;
    case "dp5":
      return dp5;
    case "dp6":
      return dp6;
    case "dp7":
      return dp7;
    case "dp8":
      return dp8;
    case "dp9":
      return dp9;
  }
};
