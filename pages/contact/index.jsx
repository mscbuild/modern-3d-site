import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGDPRChecked, setIsGDPRChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate GDPR checkbox
    if (!isGDPRChecked) {
      alert("Please accept the GDPR terms to submit the form.");
      return;
    }

    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Thank you. I will get back to you ASAP.");
        setIsGDPRChecked(false); // Reset checkbox after successful submission
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const toggleGDPR = () => {
    setIsGDPRChecked(!isGDPRChecked);
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            data-netlify="true"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-gray-300"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-gray-300"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-gray-300"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-gray-300 min-h-[120px]"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            
            {/* GDPR Checkbox */}
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <input
                  type="checkbox"
                  id="gdpr"
                  checked={isGDPRChecked}
                  onChange={toggleGDPR}
                  disabled={isLoading}
                  className="w-5 h-5 rounded border-white/50 bg-white/10 accent-accent focus:ring-accent/50 cursor-pointer"
                  required
                />
              </div>
              <label htmlFor="gdpr" className="text-sm text-gray-300 leading-relaxed">
                I agree to the processing of my personal data for the purpose of responding to my inquiry, in accordance with GDPR regulations. Your information will only be used to respond to your message and will not be shared with third parties.
              </label>
            </div>

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 flex items-center">
                {isLoading ? 'Sending...' : "Let's talk"}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden="true"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
