import fs from "node:fs";

const filePath = "./dist/package.json";

// package.jsonを読み込む
const packageJson = JSON.parse(fs.readFileSync(filePath, "utf8"));

// exportsセクションを更新
if (packageJson.exports) {
	for (const key in packageJson.exports) {
		const entry = packageJson.exports[key];

		// 各エントリのパスからdist/を削除
		for (const subKey in entry) {
			if (typeof entry[subKey] === "string") {
				entry[subKey] = entry[subKey].replace(/^\.\/dist\//, "./");
			}
		}
	}
}

// 更新されたpackage.jsonを書き込む
fs.writeFileSync("dist/package.json", JSON.stringify(packageJson, null, 2), "utf8");

// biome-ignore lint/suspicious/noConsoleLog:
console.log("`dist/` has been removed from the exports paths in package.json.");
