import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  // backgroundColor: '#33A5E7',
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 } } },  
  scale: {
    width: 1500,
    height: 800,
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
    // autoCenter: Phaser.Scale.CENTER_BOTH
  },
  pixelArt: true
};
