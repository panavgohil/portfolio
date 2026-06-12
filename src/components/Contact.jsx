import { motion } from "framer-motion";
import {
FaGithub,
FaLinkedin,
FaPhone,
FaEnvelope,
} from "react-icons/fa";

function Contact() {
const contacts = [
{
icon: <FaEnvelope />,
title: "Email",
value: "panavgohil@gmail.com",
link: "mailto:panavgohil@gmail.com",
},
{
icon: <FaPhone />,
title: "Phone",
value: "+91 8988990033",
link: "tel:+918988990033",
},
{
icon: <FaLinkedin />,
title: "LinkedIn",
value: "linkedin.com/in/panavgohil",
link: "https://www.linkedin.com/in/panavgohil/",
},
{
icon: <FaGithub />,
title: "GitHub",
value: "github.com/panavgohil",
link: "https://github.com/panavgohil",
},
];

return (
<motion.section
id="contact"
className="bg-slate-900 text-white py-24 px-6"
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.8 }}
> <div className="max-w-4xl mx-auto">


    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-6">
        Let's Connect
      </h2>

      <p className="text-slate-400 text-lg">
        Open to internships, research opportunities,
        collaborations, startup discussions, and
        exciting technology projects.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-5">

      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target={
            contact.title === "Email" ||
            contact.title === "Phone"
              ? "_self"
              : "_blank"
          }
          rel="noopener noreferrer"
          className="
            bg-slate-950
            border
            border-slate-800
            rounded-2xl
            p-6
            hover:border-sky-500
            hover:-translate-y-1
            hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]
            transition-all
            duration-300
          "
        >
          <div className="flex items-center gap-5">

            <div className="text-sky-400 text-3xl flex-shrink-0">
              {contact.icon}
            </div>

            <div className="text-left">

              <h3 className="text-lg font-semibold text-sky-400">
                {contact.title}
              </h3>

              <p className="text-slate-300 mt-1 break-all">
                {contact.value}
              </p>

            </div>

          </div>
        </a>
      ))}

    </div>

  </div>
</motion.section>


);
}

export default Contact;
