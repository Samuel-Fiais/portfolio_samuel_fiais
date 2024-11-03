import { Button } from "./Button";
import { Card } from "./Card";

export const ProjectsPage = () => {
  return (
    <div
      className="flex flex-col gap-5 items-center justify-center lg:h-[calc(100vh-4.3rem)] bg-cyan-400 border-b-2 border-black"
      id="projects"
    >
      <h1 className="text-4xl font-bold pt-5 lg:pt-0">Projects</h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col gap-4 py-4">
        {/* <Carousel> */}
        <Card
          title="Duck Pass"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eius ducimus veniam hic ad consequatur in quod beatae illum incidunt placeat aliquam neque impedit ipsam molestiae pariatur consectetur necessitatibus! Alias! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eius ducimus veniam hic ad consequatur in quod beatae illum incidunt placeat aliquam neque impedit ipsam molestiae pariatur consectetur necessitatibus! Alias!"
          color="yellow"
          actions={[
            <Button expanded color="violet">
              View
            </Button>,
          ]}
        />
        <Card
          title="Wave Chat"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eius ducimus veniam hic ad consequatur in quod beatae illum incidunt placeat aliquam neque impedit ipsam molestiae pariatur consectetur necessitatibus! Alias! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eius ducimus veniam hic ad consequatur in quod beatae illum incidunt placeat aliquam neque impedit ipsam molestiae pariatur consectetur necessitatibus! Alias!"
          color="red"
          actions={[
            <Button expanded color="cyan">
              View
            </Button>,
          ]}
        />
        <Card
          title="Fin Hub"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eius ducimus veniam hic ad consequatur in quod beatae illum incidunt placeat aliquam neque impedit ipsam molestiae pariatur consectetur necessitatibus! Alias! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eius ducimus veniam hic ad consequatur in quod beatae illum incidunt placeat aliquam neque impedit ipsam molestiae pariatur consectetur necessitatibus! Alias!"
          color="green"
          actions={[
            <Button expanded color="orange">
              View
            </Button>,
          ]}
        />
        {/* </Carousel> */}
      </div>
    </div>
  );
};
