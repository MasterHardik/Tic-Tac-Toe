newTheme = [
  {
    background_image: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    background_color: "#8BC6EC",
  },
  {
    background_image: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    background_color: "#FBAB7E",
  },
  {
    background_image: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
    background_color: "#85FFBD",
  },
  {
    background_image: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
    background_color: "#D9AFD9",
  },
  {
    background_image: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
    background_color: "#0093E9",
  },
  {
    background_image: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
  {
    background_image:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    background_color: "#4158D0",
  },
  {
    background_image: "",
    background_color: "",
  },
  {
    background_image:
      "linear-gradient(119deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",
    background_color: "#FFFFFF",
  },
];

let theme_btn = document.getElementById("tab");

changeTheme = () => {
  reset_sound.play();
  let rand = Math.floor((Math.random() * 10) % 8);
  theme_btn.style.backgroundColor = newTheme[rand].background_color;
  theme_btn.style.backgroundImage = newTheme[rand].background_image;
};

var reset_sound = new Audio(
  "../click_sounds/mixkit-camera-shutter-click-1133.wav"
);
