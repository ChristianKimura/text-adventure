//NPM Inquirer
const inquirer = require("inquirer");

//Constructor function to define characters and stats.
//Stats dependent on class/role
function Character(name, role, health, dexterity, strength, magic) {
    this.name = name;
    this.role = role;
    this.health = health;
    this.dexterity = dexterity;
    this.strength = strength;
    this.magic = magic;

    //Telling user their stats.
    this.initialStats = function() {
        console.log("Welcome, " + this.name + " to your adventure!\n"
        + "You are a level 1 " + this.role + "\n" +
        "Health: " + this.health + "\n" +
        "Dexterity: " + this.dexterity + "\n" +
        "Strength: " + this.strength + "\n" +
        "Magic: " + this.magic)
    }
}

