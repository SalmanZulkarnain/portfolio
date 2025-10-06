import DataImage, { listProyek, listTools } from "./data";

function App() {
  return (
    <>
      {/* HERO */}
      <div
        className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1"
        id="beranda"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              loading="lazy"
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Clean code today saves chaos tomorrow.</q>
          </div>
          <h2 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Salman Zulkarnain
          </h2>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programming, terutama pada
            pembuatan Website, ketertarikan pada bidang ini sudah berlangsung
            lebih dari 1 tahun pada Bidang ini.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/Salman_Zulkarnain_Web_Developer_CV.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-yellow-500 text-zinc-800 p-4 rounded-2xl hover:bg-yellow-600"
            >
              View CV <i className="ri-eye-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              See Projects <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          loading="lazy"
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
        />
      </div>
      {/* HERO */}

      {/* TENTANG */}
      <div className="mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <img
            loading="lazy"
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Salman Zulkarnain, seorang Full Stack Web
            Developer dengan pengalaman membangun aplikasi web
            production-ready. Mahir menggunakan Laravel dan Next.js untuk
            pengembangan full-stack web application. Saya percaya bahwa desain
            dan fungsionalitas harus berjalan beriringan, sehingga setiap proyek
            yang saya kembangkan tidak hanya terlihat menarik tetapi juga
            memberikan pengalaman pengguna yang optimal. Memiliki antusiasme
            tinggi dalam pemecahan masalah teknis dan berkontribusi dalam tim
            pengembangan perangkat lunak yang dinamis dan kolaboratif.
          </p>
          <div className="flex items-center justify-between">
            <img
              loading="lazy"
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 sm:block hidden rounded-md"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-yellow-500"></span>
                </h1>
                <p>Proyek selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-yellow-500"></span>
                </h1>
                <p>Tahun pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2
            className="text-4xl/snug font-bold mb-4 text-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Tools
          </h2>
          <p
            className="text-base/loose opacity-50 text-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Here are some tools that I use.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={tool.id}
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  loading="lazy"
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* TENTANG */}

      {/* PROYEK */}
      <div className="mt-32 py-10" id="proyek">
        <h2
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Projects
        </h2>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Here are some of my recent projects.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img loading="lazy" src={proyek.gambar} alt="Proyek Image" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    key={index}
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href={proyek.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-yellow-500 text-zinc-800 hover:text-yellow-500 hover:bg-zinc-800 transition-all duration-300 p-3 rounded-lg border border-zinc-600 space-x-1"
                >
                  <i className="ri-github-line"></i>
                  <span>Code</span>
                </a>
                <a
                  href={proyek.demo}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-zinc-800 text-yellow-500 hover:bg-yellow-500 hover:text-zinc-800 transition-all duration-300 p-3 rounded-lg border border-zinc-600 space-x-1"
                >
                  <i className="ri-external-link-line"></i>
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* PROYEK */}

      {/* KONTAK */}
      <div className="mt-32 sm:py-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Let's get in touch.
        </p>
        <form
          action="https://formsubmit.co/a3ae187081ecf296fc448b0f018b4c77"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="nama"
                placeholder="Input name"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Input email"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                cols="45"
                rows="7"
                placeholder="Messages..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 text-zinc-800 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-yellow-600"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* KONTAK */}
    </>
  );
}

export default App;
