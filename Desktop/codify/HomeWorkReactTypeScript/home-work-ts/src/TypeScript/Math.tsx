
interface MathOperation {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
  }
  
  const add: MathOperation['add'] = (a, b) => a + b;
  const subtract: MathOperation['subtract'] = (a, b) => a - b;
  
export type { MathOperation }
export { add, subtract }
  