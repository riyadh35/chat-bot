import "./App.css";
import Chatbot from "react-chatbot-kit";
import { Segment } from "semantic-ui-react";
import ActionProvider from "./chatbot/ActionProvider";
import config from "./bot/config";
import ActionProvider from "./bot/ActionProvider";
import MessageParser from "./bot/MessageParser";

function App() {
  const steps = [
    {
      id: "welcome",
      message: "Hello! How can I help you today?",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "What is your name?",
      trigger: "Ask Age",
    },
    {
      id: "waiting",
      user: true,
      trigger: "Name",
    },
    {
      id: "name",
      message: "Hi {previousvalue} , please select your issue",
      trigger: "issues",
    },
    {
      name: "issues",
      options: [
        {
          value: "React",
          label: "React",
          trigger: "React",
        },
        {
          value: "Angular",
          label: "Angular",
          trigger: "Angular",
        },
      ],
    },
    {
      id: "React",
      message: "Thanks for telling your issues.",
      end: true,
    },
    {
      id: "Angular",
      message: "Thanks for telling your issues.",
      end: true,
    },
  ];
  return (
    <>
      <Segment floated="right">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          steps={steps}
        />
      </Segment>
    </>
  );
}

export default App;
