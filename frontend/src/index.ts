import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';
import CharacterCreationScene from './scenes/CharacterCreation';

const game = new Phaser.Game(
  Object.assign(config, {
    scene: [CharacterCreationScene, GameScene]
  })
);

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  // game.scale.resize(width, height);
  (game.scene.getScene('CharacterCreationScene') as CharacterCreationScene).resize(width, height);
});