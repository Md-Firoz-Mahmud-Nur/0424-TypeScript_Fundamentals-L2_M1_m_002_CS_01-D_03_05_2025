const str: string = "Abrar";
// ss bb nn u -> string, symbol, bigint, boolean, undefined, number, null.
// non-primitive array, object.

let anyVar: number = 1;

let arr: number[] = [1, 2, 3];

export type Object = {
  name: string;
  age: number;
  education?: {
    institution: "University" | "COllege" | "Diploma" | "School";
    level: string;
  };
};

export const object1: Object = {
  name: "Mansur",
  age: 22,
  education: {
    institution: "COllege",
    level: "Undergrad",
  },
};
