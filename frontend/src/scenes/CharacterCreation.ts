import Phaser from 'phaser';

export default class CharacterCreationScene extends Phaser.Scene {
    private nameInput!: HTMLInputElement;
    private personalityInput!: HTMLTextAreaElement;
    // private zodiacInput!: HTMLInputElement;
    private hobbyInput!: HTMLTextAreaElement;
    createCharacterPrompt!: Phaser.GameObjects.Text;
    submitTextButton!: Phaser.GameObjects.Text;
    // rexUI!: any;
    
    constructor() {
        super({ key: 'CharacterCreationScene' });
    }

    preload(): void {
        // Load any assets you need for this scene.
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        })
    
        this.load.plugin('rextexteditplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js', true)        
        // var textBox = this.rexUI.add.textBox(config);
    }

    create(): void {
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.createCharacterPrompt = this.add.text(centerX, centerY-100, "Create Your Character", { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);

        // Create an HTML input element for the character's name.
        this.nameInput = document.createElement('input');
        this.nameInput.type = 'text';
        this.nameInput.placeholder = 'Enter character name';
        this.nameInput.style.position = 'absolute';
        this.nameInput.style.left = '50%';
        this.nameInput.style.top = '45%';
        this.nameInput.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(this.nameInput);

        // Create an HTML input element for the character's personality.
        this.personalityInput = document.createElement('textarea');
        // this.personalityInput.type = 'text';
        this.personalityInput.placeholder = 'Enter character\'s personality';
        this.personalityInput.style.position = 'absolute';
        this.personalityInput.style.left = '50%';
        this.personalityInput.style.top = '50%';
        this.personalityInput.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(this.personalityInput);

        // Create an HTML input element for the character's hobby.
        this.hobbyInput = document.createElement('textarea');
        // this.hobbyInput.type = 'text';
        this.hobbyInput.placeholder = 'Enter character\'s hobby';
        this.hobbyInput.style.position = 'absolute';
        this.hobbyInput.style.left = '50%';
        this.hobbyInput.style.top = '55%';
        this.hobbyInput.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(this.hobbyInput);

        // Create a button to submit the character creation.
        this.submitTextButton = this.add.text(centerX, centerY+100, "Submit", { fontSize: '24px', color: '#ffffff' }).setOrigin(0.5);
        this.submitTextButton.setInteractive();
        this.submitTextButton.on('pointerdown', () => this.submitCharacter());        
    }

    submitCharacter(): void {
        const characterName = this.nameInput.value;
        const characterPersonality = this.personalityInput.value;
        const characterHobby = this.hobbyInput.value;

        if (characterName && characterPersonality && characterHobby) {
            // Save the character name and proceed to the next scene.
            console.log('Character name:', characterName);
            console.log('Character personality:', characterPersonality);
            console.log('Character hobby:', characterHobby);
            document.body.removeChild(this.nameInput);  // Remove the HTML input element.
            document.body.removeChild(this.personalityInput);  // Remove the HTML input element.
            document.body.removeChild(this.hobbyInput);  // Remove the HTML input element.
            this.scene.start('GameScene');  // Assume there's a scene called GameScene.
                        
            let characterSetting = {
                name: characterName,
                personality: characterPersonality,
                hobby: characterHobby
            };
            
            // TODO: send character creation data to backend
            // fetch('https://your-server.com/data', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(someData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            // });            
        } else {
            alert('Empty field(s) not allowed');
        }
    }
    
    resize(width: number, height: number): void {
        this.cameras.main.setSize(width, height);
        this.createCharacterPrompt.setPosition(width / 2, height / 2 - 50);
        this.submitTextButton.setPosition(width / 2, height / 2 + 50);
        // Phaser.Display.Align.In.Center(this.textPrompt1, this.cameras.main);
    }    
}


