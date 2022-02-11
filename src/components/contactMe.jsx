import React,{useState} from "react";
import emailjs from '@emailjs/browser';



const ContactMe = () => {
  const [sending, setSending] = useState(false);
  const year = new Date();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_06zb32j",
        "template_s02mffe",
        e.target,
        "user_kRZop11cNbFajMXLQfPDC"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    setSending(!sending);
  };


    return (
        <div id="contactMe" className="w-full h-2/3 bg-sandal">
          <div className="w-3/4 md:w-full h-full flex flex-col items-center justify-center m-auto ">
            <div className="text-white text-5xl font-Nanum mt-8 font-bold">Contact Me</div>
            {sending ? (
              <div className="w-full h-2/3 container m-auto text-center text-black text-5xl font-Nunito">
                Message successfully sent!
              </div>
            ) : (
              <form
                className="w-full h-4/5 container m-auto flex flex-col items-center justify-center"
                onSubmit={sendEmail}
              >
                <div className="m-2 md:w-3/4 w-full h-12">
                  <input
                    placeholder="Subject"
                    className="w-full h-full mx-2 rounded-lg border-sandal border-2 p-4 focus:border-blue-500 text-lg font-Nunito font-bold"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="m-2 md:w-3/4 w-full h-12 flex flex-row">
                  <input
                    placeholder="Email"
                    className="w-1/2 h-full mx-2 rounded-lg border-sandal border-2 p-4 focus:border-blue-500 text-lg font-Nunito"
                    type="email"
                    name="Email"
                    required
                  />
                  <span className="w-1/2 h-12">
                    <input
                      placeholder="Name"
                      className="w-full h-full mx-2 rounded-lg border-sandal border-2 p-4 focus:border-blue-500 text-lg font-Nunito"
                      type="text"
                      name="Name"
                      required
                    />
                  </span>
                </div>
                <div className="m-2 md:w-3/4 w-full h-52">
                  <textarea
                    placeholder="Message"
                    className="w-full h-full mx-2 rounded-lg border-sandal border-2 p-4 focus:border-blue-500 text-lg font-Nunito"
                    name="Message"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Send"
                    className="w-64 p-2 m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded border border-black shadow-md  bg-sandal cursor-pointer text-white "
                  />
                </div>
              </form>
            )}
          </div>
          <h1 className="text-white font-Nunito text-center pt-2 bg-black">
            Designed and Created by Raymond Li © {`${year.getFullYear()}`}.
          </h1>
        </div>
      );
}


export default ContactMe;