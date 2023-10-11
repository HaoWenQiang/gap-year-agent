import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';
import CharacterCreationScene from './scenes/CharacterCreation';

new Phaser.Game(
  Object.assign(config, {
    scene: [CharacterCreationScene, GameScene]
  })
);
