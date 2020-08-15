export const styles = {
  container: {
    // https://www.dropbox.com/s/00go33oklrvq2mk/hero.jpg?raw=1
    // background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.50)), to(rgba(0, 0, 0, 0.50))), url(https://www.dropbox.com/s/00go33oklrvq2mk/hero.jpg?raw=1);
    backgroundImage:
      "url(https://www.dropbox.com/s/00go33oklrvq2mk/hero.jpg?raw=1)",
    backgroundSize: "cover",
    height: 550,
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  title: {
    paddingLeft: 55,
    paddingRight: 55,
    paddingTop: 145,
    paddingBottom: 45,
    display: "flex",
    flexDirection: "column",
  },
  title_text: {
    color: "white",
    fontSize: 35,
  },
  button: {
    paddingLeft: 55,
  },
  button_text: {
    fontSize: 15,
    color: "white",
    border: "1px solid transparent",
    width: 130,
    backgroundColor: "#7cc250",
    textDecoration: "none",
    padding: 10,
    borderRadius: 5,
  },
};
