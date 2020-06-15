import firebase from "~/firebase";

export default Helpers = {
  signinWithOTP: async (numbers) => {
    firebase
      .auth()
      .signInWithPhoneNumber(numbers, recaptcha)
      .then((e) => {
        let code = prompt("hello");
        if (code == null) return;
        e.confirm(code).then((result) => {
          console.log(result);
        });
      })
      .catch((e) => console.log(e));
  },
};
