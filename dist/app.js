"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello typescript");
const a = 1;
const myName = "Nguyen Van Hai";
const status = true;
const myObj = {};
const numberArr = [1, 2, 3, 4];
const stringArr = ["Hai", "A"];
const objectArr = [{ id: 1, name: "Hai" }, { id: 2, name: "Hải" }];
const getProduct = (products) => {
    const result = products.map(item => `<div> ${item.name} </div>`);
};
getProduct([{ id: 1, name: "A" }, { id: 2, name: "B" }]);
//# sourceMappingURL=app.js.map