import { ScrollText } from "lucide-react";

function AboutSection() {
  return (
    <div className="h-lvh">
      <div className="grid grid-cols-4 gap-3 !p-10 !-mt-20 text-slate-905">
        <div className="!px-6 !py-14 flex flex-col gap-y-2 bg-slate-50 rounded-3xl shadow-md">
          <div>
            <img src="./fund.png" className="w-14" alt="" />
          </div>
          <h1 className="text-xl font-bold mb-2">Scholarship Facility</h1>
          <p className="text-sm text-slate-950 leading-6">
            We offer generous scholarships to support outstanding students in
            achieving their academic goals.
          </p>
        </div>

        <div className="!px-6 !py-14 flex flex-col gap-y-2 bg-slate-50 rounded-3xl shadow-md">
          <div>
            <img src="./teaching.png" className="w-14" alt="" />
          </div>
          <h1 className="text-xl font-bold mb-2">Skilled Lecturers</h1>
          <p className="text-sm text-slate-950 leading-6">
            Learn from experienced and dedicated educators committed to your
            academic success.
          </p>
        </div>

        <div className="!px-6 !py-14 flex flex-col bg-slate-50 rounded-3xl shadow-md">
          <div>
            <img src="./book-stack.png" className="w-14" alt="" />
          </div>
          <h1 className="text-xl font-bold mb-2">Book Library Facility</h1>
          <p className="text-sm text-slate-950 leading-6">
            Access a vast collection of academic books and resources to support
            your studies.
          </p>
        </div>

        <div className="!px-6 !py-14 flex flex-col bg-slate-50 rounded-3xl shadow-md">
          <div>
            <img src="./affordable.png" className="w-14" alt="" />
          </div>
          <h1 className="text-xl font-bold mb-2">Affordable Price</h1>
          <p className="text-sm text-slate-950 leading-6">
            Receive a quality education at a cost that fits your budget without
            compromising standards.
          </p>
        </div>
      </div>

      <div className="w-3/4 flex justify-between gap-3 !mx-auto">
        <div className="text-4xl font-semibold flex flex-col gap-y-2 w-[500px]">
          <h1 className="text-xl underline text-green-900">About Us</h1>
          <h1>Our Edukado System</h1>
          <h1>
            <span className="text-green-900">Inspires</span> You More.
          </h1>
          <h1 className="text-[16px] text-slate-800 leading-6">
            Edukado is dedicated to delivering quality, affordable education.
            With expert lecturers, modern facilities, scholarships, and a rich
            library, we empower students to succeed and stay inspired.
          </h1>
        </div>

        <div className="bg-gray-100 basis-lg grid grid-cols-2 gap-3 w-[1000px] h-[500px]">
          {/* Large vertical image on the left */}
          <div className="row-span-2 overflow-hidden rounded-xl">
            <img
              src="/aboutimg1.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Top-right image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="/aboutimg2.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Bottom-right section with text and image */}
          <div className="flex flex-col justify-between gap-2">
            <div className="bg-white rounded-xl p-4 text-center shadow">
              <h1 className="text-md font-semibold text-slate-800">
                Be Part of Us
              </h1>
            </div>
            <div className="overflow-hidden rounded-xl h-full">
              <img
                src="/aboutimg3.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
