import { Button } from "./Button";
import { Card } from "./Card";

export const ContactsPage = () => {
  return (
    <div
      className="flex flex-col gap-5 items-center justify-center lg:h-[calc(100vh-10rem)] bg-green-400 border-b-2 border-black"
      id="contact"
    >
      <h1 className="text-4xl font-bold pt-5 lg:pt-0">Contact</h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col gap-4 py-4">
        <Card
          title="Email"
          description="samuelfiais.dev@gmail.com"
          color="red"
          actions={[
            <Button
              expanded
              color="cyan"
              onClick={() => window.open("mailto:samuelfiais.dev@gmail.com")}
            >
              Send
            </Button>,
          ]}
        />
        <Card
          title="Phone"
          description="+55 34 996735587"
          color="blue"
          actions={[
            <Button
              expanded
              color="yellow"
              onClick={() => window.open("tel:+5534996735587")}
            >
              Call
            </Button>,
          ]}
        />
        <Card
          title="GitHub"
          description="github.com/Samuel-Fiais"
          color="violet"
          actions={[
            <Button
              expanded
              color="red"
              onClick={() => window.open("https://github.com/Samuel-Fiais")}
            >
              Access
            </Button>,
          ]}
        />
        <Card
          title="LinkedIn"
          description="linkedin.com/in/samuel-fiais"
          color="orange"
          actions={[
            <Button
              expanded
              color="blue"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/samuel-fiais-94a60a22a/"
                )
              }
            >
              {/* https://www.linkedin.com/in/samuel-fiais-94a60a22a/ */}
              Open
            </Button>,
          ]}
        />
        <Card
          title="Location"
          description="Uberlândia, MG, Brazil"
          color="yellow"
          actions={[
            <Button
              expanded
              color="violet"
              onClick={() =>
                window.open("https://maps.app.goo.gl/g2WUCX9fJuKQoTiC9")
              }
            >
              Maps
            </Button>,
          ]}
        />
      </div>
    </div>
  );
};
