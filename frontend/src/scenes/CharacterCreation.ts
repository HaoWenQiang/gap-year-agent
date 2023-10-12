import Phaser from 'phaser';

export default class CharacterCreationScene extends Phaser.Scene {
    private nameInput!: HTMLInputElement;
    createCharacterPrompt!: Phaser.GameObjects.Text;
    submitTextButton!: Phaser.GameObjects.Text;
    

    constructor() {
        super({ key: 'CharacterCreationScene' });
    }

    preload(): void {
        // Load any assets you need for this scene.
    }

    create(): void {
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.createCharacterPrompt = this.add.text(centerX, centerY-50, "Create Your Character", { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);

        // Create an HTML input element for the character's name.
        this.nameInput = document.createElement('input');
        this.nameInput.type = 'text';
        this.nameInput.placeholder = 'Enter character name';
        this.nameInput.style.position = 'absolute';
        this.nameInput.style.left = '50%';
        this.nameInput.style.top = '50%';
        this.nameInput.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(this.nameInput);

        // Create a button to submit the character creation.
        this.submitTextButton = this.add.text(centerX, centerY+50, "Submit", { fontSize: '24px', color: '#ffffff' }).setOrigin(0.5);
        this.submitTextButton.setInteractive();
        this.submitTextButton.on('pointerdown', () => this.submitCharacter());
    }

    submitCharacter(): void {
        const characterName = this.nameInput.value;
        if (characterName) {
            // Save the character name and proceed to the next scene.
            console.log('Character name:', characterName);
            document.body.removeChild(this.nameInput);  // Remove the HTML input element.
            this.scene.start('GameScene');  // Assume there's a scene called GameScene.
        } else {
            alert('Please enter a character name.');
        }
    }

    resize(width: number, height: number): void {
        this.cameras.main.setSize(width, height);
        this.createCharacterPrompt.setPosition(width / 2, height / 2 - 50);
        this.submitTextButton.setPosition(width / 2, height / 2 + 50);
        // Phaser.Display.Align.In.Center(this.textPrompt1, this.cameras.main);
    }    
}

