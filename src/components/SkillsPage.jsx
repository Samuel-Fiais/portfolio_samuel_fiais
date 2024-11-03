import { Card } from "./Card";

export const SkillsPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center lg:h-screen bg-amber-400 border-b-2 border-black"
      id="skills"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold pt-5 lg:pt-0">Samuel Fiais</h1>
        <p className="text-lg">Full-Stack Developer</p>
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col gap-4 py-4">
          <Card
            title="Me"
            description="I am a full-stack developer with solid skills in both BackEnd and FrontEnd, capable of tackling complex challenges across various technology domains."
          />
          <Card
            color="red"
            title="BackEnd"
            description="In the BackEnd, I have experience with cutting-edge technologies such as .NET 6 and 8, Node.js, and TypeScript using frameworks like Nest.js and Prisma."
          />
          <Card
            color="blue"
            title="FrontEnd"
            description="On the FrontEnd, I possess extensive experience in JavaScript, TypeScript, and modern frameworks such as React.js, Angular, and Next.js."
          />
          <Card
            color="pink"
            title="Mobile"
            description="In mobile development, I work with Flutter, utilizing architectural patterns such as Bloc and GetIt, and I have experience integrating payment terminals and interactive kiosks."
          />
          <Card
            color="green"
            title="CI/CD"
            description="I have significant experience in CI/CD processes, leveraging Azure DevOps and GitHub Actions for automation and continuous deployment."
          />
          <Card
            color="purple"
            title="Cloud"
            description="I am also well-versed in major cloud platforms such as Azure, AWS, and Google Cloud."
          />
        </div>
      </div>
    </div>
  );
};
