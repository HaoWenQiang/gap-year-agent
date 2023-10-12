import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super('GameScene');
  }

  preload() {
    // this.load.image('logo', 'assets/phaser3-logo.png');
	  this.load.image("blocks_1", "assets/maps/the_ville/visuals/map_assets/blocks/blocks_1.png");
	  this.load.image("walls", "assets/maps/the_ville/visuals/map_assets/v1/Room_Builder_32x32.png");
	  this.load.image("interiors_pt1", "assets/maps/the_ville/visuals/map_assets/v1/interiors_pt1.png");
	  this.load.image("interiors_pt2", "assets/maps/the_ville/visuals/map_assets/v1/interiors_pt2.png");
	  this.load.image("interiors_pt3", "assets/maps/the_ville/visuals/map_assets/v1/interiors_pt3.png");
	  this.load.image("interiors_pt4", "assets/maps/the_ville/visuals/map_assets/v1/interiors_pt4.png");
	  this.load.image("interiors_pt5", "assets/maps/the_ville/visuals/map_assets/v1/interiors_pt5.png");
	  this.load.image("CuteRPG_Field_B", "assets/maps/the_ville/visuals/map_assets/cute_rpg_word_VXAce/tilesets/CuteRPG_Field_B.png");
	  this.load.image("CuteRPG_Field_C", "assets/maps/the_ville/visuals/map_assets/cute_rpg_word_VXAce/tilesets/CuteRPG_Field_C.png");
	  this.load.image("CuteRPG_Harbor_C", "assets/maps/the_ville/visuals/map_assets/cute_rpg_word_VXAce/tilesets/CuteRPG_Harbor_C.png");
	  this.load.image("CuteRPG_Village_B", "assets/maps/the_ville/visuals/map_assets/cute_rpg_word_VXAce/tilesets/CuteRPG_Village_B.png");
	  this.load.image("CuteRPG_Forest_B", "assets/maps/the_ville/visuals/map_assets/cute_rpg_word_VXAce/tilesets/CuteRPG_Forest_B.png");
	  this.load.image("CuteRPG_Desert_C", "assets/maps/the_ville/visuals/map_assets/cute_rpg_word_VXAce/tilesets/CuteRPG_Desert_C.png");
	  this.load.image("CuteRPG_Mountains_B", "assets/maps/the_ville/visuals/map_assets/cute_rpg_word_VXAce/tilesets/CuteRPG_Mountains_B.png");
	  this.load.image("CuteRPG_Desert_B", "assets/maps/the_ville/visuals/map_assets/cute_rpg_word_VXAce/tilesets/CuteRPG_Desert_B.png");
	  this.load.image("CuteRPG_Forest_C", "assets/maps/the_ville/visuals/map_assets/cute_rpg_word_VXAce/tilesets/CuteRPG_Forest_C.png");

	  // Joon: This is the export json file you get from Tiled. 
	  this.load.tilemapTiledJSON("map", "assets/maps/the_ville/visuals/the_ville_jan7.json");    
  }

  create() {

    const map = this.make.tilemap({ key: "map" });
	  const collisions = map.addTilesetImage("blocks", "blocks_1");
	  const walls = map.addTilesetImage("Room_Builder_32x32", "walls");
	  const interiors_pt1 = map.addTilesetImage("interiors_pt1", "interiors_pt1");
	  const interiors_pt2 = map.addTilesetImage("interiors_pt2", "interiors_pt2");
	  const interiors_pt3 = map.addTilesetImage("interiors_pt3", "interiors_pt3");
	  const interiors_pt4 = map.addTilesetImage("interiors_pt4", "interiors_pt4");
	  const interiors_pt5 = map.addTilesetImage("interiors_pt5", "interiors_pt5");
	  const CuteRPG_Field_B = map.addTilesetImage("CuteRPG_Field_B", "CuteRPG_Field_B");
	  const CuteRPG_Field_C = map.addTilesetImage("CuteRPG_Field_C", "CuteRPG_Field_C");
	  const CuteRPG_Harbor_C = map.addTilesetImage("CuteRPG_Harbor_C", "CuteRPG_Harbor_C");
	  const CuteRPG_Village_B = map.addTilesetImage("CuteRPG_Village_B", "CuteRPG_Village_B");
	  const CuteRPG_Forest_B = map.addTilesetImage("CuteRPG_Forest_B", "CuteRPG_Forest_B");
	  const CuteRPG_Desert_C = map.addTilesetImage("CuteRPG_Desert_C", "CuteRPG_Desert_C");
	  const CuteRPG_Mountains_B = map.addTilesetImage("CuteRPG_Mountains_B", "CuteRPG_Mountains_B");
	  const CuteRPG_Desert_B = map.addTilesetImage("CuteRPG_Desert_B", "CuteRPG_Desert_B");
	  const CuteRPG_Forest_C = map.addTilesetImage("CuteRPG_Forest_C", "CuteRPG_Forest_C");
    
	  // The first parameter is the layer name (or index) taken from Tiled, the 
	  // second parameter is the tileset you set above, and the final two 
	  // parameters are the x, y coordinate. 
	  // Joon: The "layer name" that comes as the first parameter value  
	  //       literally is taken from our Tiled layer name. So to find out what
	  //       they are; you actually need to open up tiled and see how you 
	  //       named things there. 
	  let tileset_group_1 = [CuteRPG_Field_B, CuteRPG_Field_C, CuteRPG_Harbor_C, CuteRPG_Village_B, 
      CuteRPG_Forest_B, CuteRPG_Desert_C, CuteRPG_Mountains_B, CuteRPG_Desert_B, CuteRPG_Forest_C,
      interiors_pt1, interiors_pt2, interiors_pt3, interiors_pt4, interiors_pt5, walls];
    const bottomGroundLayer = map.createLayer("Bottom Ground", tileset_group_1, 0, 0);
    const exteriorGroundLayer = map.createLayer("Exterior Ground", tileset_group_1, 0, 0);
    const exteriorDecorationL1Layer = map.createLayer("Exterior Decoration L1", tileset_group_1, 0, 0);
    const exteriorDecorationL2Layer = map.createLayer("Exterior Decoration L2", tileset_group_1, 0, 0);
    const interiorGroundLayer = map.createLayer("Interior Ground", tileset_group_1, 0, 0);
    const wallLayer = map.createLayer("Wall", [CuteRPG_Field_C, walls], 0, 0);
    const interiorFurnitureL1Layer = map.createLayer("Interior Furniture L1", tileset_group_1, 0, 0);
    const interiorFurnitureL2Layer = map.createLayer("Interior Furniture L2 ", tileset_group_1, 0, 0);
    const foregroundL1Layer = map.createLayer("Foreground L1", tileset_group_1, 0, 0);
    const foregroundL2Layer = map.createLayer("Foreground L2", tileset_group_1, 0, 0);
    foregroundL1Layer.setDepth(2);
    foregroundL2Layer.setDepth(2);

    const collisionsLayer = map.createLayer("Collisions", collisions, 0, 0);
    // const groundLayer = map.createLayer("Ground", walls, 0, 0);
    // const indoorGroundLayer = map.createLayer("Indoor Ground", walls, 0, 0);
    // const wallsLayer = map.createLayer("Walls", walls, 0, 0);
    // const interiorsLayer = map.createLayer("Furnitures", interiors, 0, 0);
    // const builtInLayer = map.createLayer("Built-ins", interiors, 0, 0);
    // const appliancesLayer = map.createLayer("Appliances", interiors, 0, 0);
    // const foregroundLayer = map.createLayer("Foreground", interiors, 0, 0);

    // Joon : This is where you want to create a custom field for the tileset
    //        in Tiled. Take a look at this guy's tutorial: 
    //        https://www.youtube.com/watch?v=MR2CvWxOEsw&ab_channel=MattWilber
    collisionsLayer.setCollisionByProperty({ collide: true });
    // By default, everything gets depth sorted on the screen in the order we 
    // created things. Here, we want the "Above Player" layer to sit on top of 
    // the player, so we explicitly give it a depth. Higher depths will sit on 
    // top of lower depth objects.
    // Collisions layer should get a negative depth since we do not want to see
    // it. 
    collisionsLayer.setDepth(-1);    

	  this.player = this.physics.add.
	                sprite(800, 288, "atlas", "misa-front").
	                setSize(30, 40).
	                setOffset(0, 0);
	  this.player.setDepth(-1);
	  // Setting up the camera. 
	  const camera = this.cameras.main;
	  camera.startFollow(this.player);
	  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
	  this.cursors = this.input.keyboard.createCursorKeys();

  }

	update(time: number, delta: number) {
		// *** SETUP PLAY AND PAUSE BUTTON *** 
		let play_context = this;
		// function game_resume() {  
		// 	play_context.scene.resume();
		// }  
		// play_button.onclick = function(){
		// 	game_resume();
		// };
		// function game_pause() {  
		// 	play_context.scene.pause();
		// }  
		// pause_button.onclick = function(){
		// 	game_pause();
		// };

	  // *** MOVE CAMERA *** 
	  // This is where we finish up the camera setting we started in the create() 
	  // function. We set the movement speed of the camera and wire up the keys to
	  // map to the actual movement.
	  const camera_speed = 50;
	  // Stop any previous movement from the last frame
	  this.player.body.setVelocity(0);
	  if (this.cursors.left.isDown) {
	    this.player.body.setVelocityX(-camera_speed*delta);
	  } 
	  if (this.cursors.right.isDown) {
	    this.player.body.setVelocityX(camera_speed*delta);
	  } 
	  if (this.cursors.up.isDown) {
	    this.player.body.setVelocityY(-camera_speed*delta);
	  } 
	  if (this.cursors.down.isDown) {
	    this.player.body.setVelocityY(camera_speed*delta);
	  }
	
	}  
}
