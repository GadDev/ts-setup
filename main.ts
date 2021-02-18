class Hero {
	name: string;
	constructor(name: string) {
		console.log('Class hero Thor Captain America' + name);
		console.log('hello world');
		console.log('hello baobab');
		this.name = name;
	}
	fly() {
		console.log(`${this.name} fly`);
		console.log(`${this.name} flddy`);
	}
	getName() {
		return this.name;
	}
}

let Thor = new Hero('thor');

console.log(Thor.getName());

class Superman extends Hero {
	constructor(name: string) {
		super(name);
	}
}

let ClarkKent = new Superman('Clark');
console.log(ClarkKent.getName());
