export class Hoge {
	constructor() {
		console.log("Hoge instance created");
	}
}

export const isHoge = (arg: unknown): arg is Hoge => {
	return arg instanceof Hoge;
};
