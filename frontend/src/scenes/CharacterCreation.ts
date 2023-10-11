import Phaser from 'phaser';

export default class CharacterCreationScene extends Phaser.Scene {
    private nameInput!: HTMLInputElement;

    constructor() {
        super({ key: 'CharacterCreationScene' });
    }

    preload(): void {
        // Load any assets you need for this scene.
    }

    create(): void {
        this.add.text(400, 300, "Create Your Character", { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);

        // Create an HTML input element for the character's name.
        this.nameInput = document.createElement('input');
        this.nameInput.type = 'text';
        this.nameInput.placeholder = 'Enter character name';
        this.nameInput.style.position = 'absolute';
        this.nameInput.style.top = '350px';
        this.nameInput.style.left = '350px';
        document.body.appendChild(this.nameInput);

        // Create a button to submit the character creation.
        const submitButton = this.add.text(400, 400, "Submit", { fontSize: '24px', color: '#ffffff' }).setOrigin(0.5);
        submitButton.setInteractive();
        submitButton.on('pointerdown', () => this.submitCharacter());
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
}

