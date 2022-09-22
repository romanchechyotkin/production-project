import {classNames} from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("someClass", {}, [])).toBe("someClass");
    });

    test("with additional class", () => {
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe("someClass class1 class2");
    });

    test("with mods", () => {
        const expected = "someClass class1 class2 hovered scrolled";
        expect(classNames("someClass", {hovered: true, scrolled: true}, ["class1", "class2"])).toBe(expected);
    });

    test("with mods false", () => {
        const expected = "someClass class1 class2 hovered scrolled";
        expect(classNames("someClass", {hovered: false, scrolled: true}, [])).not.toBe(expected);
    });
});
