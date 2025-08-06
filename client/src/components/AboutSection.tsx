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

      <div>{/* Additional content or section can go here */}</div>
    </div>
  );
}

export default AboutSection;
