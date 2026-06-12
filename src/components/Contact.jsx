function Contact() {
return ( <section
   id="contact"
   className="bg-slate-900 text-white py-24 px-6"
 > <div className="max-w-4xl mx-auto text-center">

```
    <h2 className="text-4xl font-bold mb-6">
      Let's Connect
    </h2>

    <p className="text-slate-400 text-lg mb-12">
      Interested in collaborating, discussing ideas, research,
      internships, or innovative projects? Feel free to reach out.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="mailto:panavgohil@gmail.com"
        className="px-6 py-3 bg-sky-500 rounded-xl hover:bg-sky-600 transition"
      >
        Email
      </a>

      <a
        href="https://github.com/panavgohil"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-sky-500 rounded-xl hover:bg-sky-600 transition"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/panavgohil/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-sky-500 rounded-xl hover:bg-sky-600 transition"
      >
        LinkedIn
      </a>

      <a
        href="https://leetcode.com/panavgohil"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-sky-500 rounded-xl hover:bg-sky-600 transition"
      >
        LeetCode
      </a>

    </div>

  </div>
</section>


);
}

export default Contact;
