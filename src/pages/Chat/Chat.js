import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import userAvatar from "../../assets/images/user.png";
import CAT_A from "../../assets/images/a.png";
import CAT_B from "../../assets/images/b.jpg";
import CAT_C from "../../assets/images/c.webp";
import CatItem from "../Chat/components/CatItem";
import UserItem from "../Chat/components/UserItem";
import InputChat from "../Chat/components/InputChat";
import Select from "../Chat/components/Select";
import { doing, aboutMe } from "../../data/Actions";
import Fade from "react-reveal/Fade";
import ReactScrollableFeed from "react-scrollable-feed";

const Chat = () => {
  let idCounter = 0;

  const [msg, setMsg] = useState({});

  const [openSelect, setOpenSelect] = useState(false);

  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "Cat",
      msg: ["Hola", "Como es tu nombre?"],
    },
  ]);

  function firstResponse(name) {
    let newChat = {
      id: idCounter + 2,
      emitter: "Cat",
      msg: [
        "Mucho gusto," + name + "!",
        "Mi nombre es Aegon, soy un gatobot siamés.",
        "No entiendo tu burdo lenguaje humano. Pero elegí una opción de la lista y charlamos :)",
      ],
    };
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }

  useEffect(() => {
    if (chat.length === 2) {
      setTimeout(() => firstResponse(msg.msg), 500);
      setMsg({ ...msg, msg: "" });
      setTimeout(() => setOpenSelect(true), 600);
    }
  }, [chat]);

  function getMessage(value) {
    idCounter = idCounter + 1;
    setMsg({
      id: idCounter,
      emitter: "User",
      msg: value,
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    setChat([...chat, msg]);
  }

  let options = [
    {
      id: "doing",
      text: "¿Qué hacés?",
    },
    {
      id: "meme",
      text: "Dame un meme",
    },
    {
      id: "aboutMe",
      text: "Contame sobre vos",
    },
  ];

  let memes = [
    {
      img: ["ig", CAT_A],
    },
    {
      img: ["ig", CAT_B],
    },
    {
      img: ["ig", CAT_C],
    },
  ];

  const [interactions, setInteractions] = useState([]);

  function handleSelectedOptions(value) {
    let result;
    switch (value) {
      case "doing":
        result = doing[Math.floor(Math.random() * doing.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      case "aboutMe":
        result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      case "meme":
        result = memes[Math.floor(Math.random() * memes.length)];
        if (result) {
          setInteractions([...interactions, result.img]);
        }
        break;

      default:
        console.log("No hay valores");
    }
  }
  console.log("INTERACCIONES:", interactions);

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div id="chatbotcontainerid" className="chatbot-container-body">
            <ReactScrollableFeed>
              {chat.map((message, index) =>
                message.emitter === "Cat" ? (
                  <Fade opposite>
                    <CatItem key={index} text={message.msg} />
                  </Fade>
                ) : (
                  <Fade opposite>
                    <UserItem key={index} text={message.msg} />
                  </Fade>
                )
              )}

              {openSelect && (
                <Fade opposite>
                  <div className="chatbox-chat-selected-container">
                    <Select
                      options={options}
                      handleSelectedOptions={handleSelectedOptions}
                    />
                    <img src={userAvatar} alt="user" />
                  </div>
                </Fade>
              )}

              {interactions.length > 0 &&
                interactions.map((interaction, index) => (
                  <>
                    <Fade left>
                      <CatItem key={index} text={interaction}></CatItem>
                    </Fade>
                    <Fade right>
                      <div className="chatbox-chat-selected-container">
                        <Select
                          options={options}
                          handleSelectedOptions={handleSelectedOptions}
                        ></Select>
                        <img src={userAvatar} alt="user" />
                      </div>
                    </Fade>
                  </>
                ))}
            </ReactScrollableFeed>
          </div>

          <div className="chatbot-chat-container-input">
            <InputChat
              chat={chat}
              msg={msg}
              getMessage={getMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
