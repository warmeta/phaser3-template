import Phaser from "phaser";
import Example1 from "./scenes/Example1";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [Example1],
};

const game = new Phaser.Game(config);
