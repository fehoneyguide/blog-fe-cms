import React, { FC } from "react";
import Particles from "react-tsparticles";
import "./Login.less";
interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <>
      <Particles
        params={{
          background: {},
          backgroundMask: {
            enable: false,
          },
          detectRetina: true,
          fpsLimit: 60,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "connect",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                speed: 1,
              },
              slow: {
                factor: 3,
                radius: 200,
              },
            },
          },
          particles: {
            collisions: {
              enable: false,
            },
            color: {
              value: "random",
              animation: {
                enable: false,
                speed: 1,
                sync: true,
              },
            },
            links: {
              blink: false,
              color: {
                value: "#ffffff",
              },
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: "lime",
                },
                enable: false,
              },
              triangles: {
                enable: false,
              },
              width: 1,
              warp: false,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
              noise: {
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
              },
              random: false,
              speed: 6,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "#000000",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
              limit: 500,
              value: 300,
            },
            opacity: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },

              value: 0.5,
            },
            rotate: {
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              random: false,
              value: 0,
            },
            shadow: {
              blur: 0,
              color: {
                value: "#000000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {
                character: {
                  fill: true,
                  close: true,
                },
                char: {
                  fill: true,
                  close: true,
                },
                image: {
                  fill: true,
                  close: true,
                },
                images: {
                  fill: true,
                  close: true,
                },
                polygon: {
                  fill: true,
                  close: true,
                },
                star: {
                  fill: true,
                  close: true,
                },
              },
              type: "circle",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
              },

              value: 5,
            },
            stroke: {
              color: {
                value: "#000000",
              },
              width: 0,
              opacity: 1,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          pauseOnBlur: true,
        }}
      />
    </>
  );
};

export default Login;
