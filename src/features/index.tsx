import EducationCard from "../component/education-card";
import Foto from "../assets/ridwan.jpg";
import ProjectCard from "../component/project-card";

interface Project {
  name: string;
  year: string;
  description: string;
}

interface Education {
  nameschool: string;
  yearschool: string;
  descschool: string;
}

const LandingPage = () => {
  const projects: Project[] = [
    {
      name: "Implementasi Alat Disinfektan Otomatis IoT menggunakan NodeMCU dan Ultrasonic Sensor ",
      year: "2021",
      description: "Skripsi",
    },
    {
      name: "Project Prakerja at Skill Academy by Ruang Guru",
      year: "2023 - Current",
      description: "FreeLance",
    },
  ];

  const Educations: Education[] = [
    {
      nameschool: "SMKN 1 KARAWANG",
      yearschool: "2014 - 2017",
      descschool: "Teknik Komputer Jaringan",
    },
    {
      nameschool: "Universitas Buana Perjuangan Karawang",
      yearschool: "2017 - 2021",
      descschool: "Teknik Informatika",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="flex flex-row justify-around items-center m-5 bg-custom-beige p-5 rounded-none">
        <div className="flex flex-col">
          <h1>
            <b>HI !</b>
          </h1>
          <p>
            <h1>
              <b>MY NAME’S RIDWAN MAULANA</b>
            </h1>
          </p>
        </div>
        <img
          src={Foto}
          className="rounded-md"
          style={{
            width: "7.18rem",
            height: "7.81rem",
            objectFit: "cover",
            borderRadius: "0.1 rem",
          }}
          alt="Profile"
        />
      </section>

      <section className="flex flex-col px-5 py-10 bg-gray-500 gap-5">
        <label className="font-semibold text-lg">Summary</label>
        <p className="text-base text-justify">
          5 years of experience in Sales and Administrative roles. Supervised
          General Admin & Sales teams, analyzed data for decision making,
          created strategies for monthly target attainment, setup and monitored
          devices & networks, inputted admin & vendor data, and troubleshoot
          hardware & software. Achieved monthly targets in 6 months, increased
          sales by 10% in 1 year, and reduced costs by 15% in 3 years.
        </p>
      </section>
      <section className="flex flex-col px-5 py-10 gap-5">
        <label className="font-semibold text-lg">Projects</label>
        {projects.map((item: Project, index: number) => (
          <ProjectCard
            key={index}
            name={item.name}
            year={item.year}
            description={item.description}
            bgColor={`${index % 1 === 0 ? "bg-custom-gray" : ""}`}
          />
        ))}
      </section>

      <section className="flex flex-col px-5 py-10 gap-5">
        <label className="font-semibold text-lg">Educations</label>
        {Educations.map((item: Education, index: number) => (
          <EducationCard
            key={index}
            nameschool={item.nameschool}
            yearschool={item.yearschool}
            descschool={item.descschool}
            bgColor={`${index % 1 === 0 ? "bg-custom-gray" : ""}`}
          />
        ))}
      </section>
    </div>
  );
};
export default LandingPage;
