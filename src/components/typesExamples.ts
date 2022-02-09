/* eslint-disable @typescript-eslint/no-unused-vars */
// TS: Can create your custom object types
export type Color = {
  id: number;
  label: string;
  tag: string;
};

// Usage
const color1: Color = {
  id: 0,
  label: '',
  tag: '',
}; 

// ------------------------------------------

// TS: Extend your custom object Type
export type ColorImproved = Color & {
  active: boolean;
}

// Usage
const color2: ColorImproved = {
  id: 0,
  label: '',
  tag: '',
  active: false
};

// ------------------------------------------

// TS: You can create partial object based on a strict object using the Generic `Partial`
const color3: Partial<ColorImproved> = {
  id: 0,
}

// ------------------------------------------

// TS: Create a short hand for list of a type
export type Colors = Color[];

// usage
const colorList1: Colors = []

// ------------------------------------------

// TS: you can have your custom types
export type ColorName = 'red' | 'blue' | 'green'

// usage
const color4: ColorName = 'red';

// ------------------------------------------

// TS: You can even extend your types
export type ColorOrNumber = ColorName | number;

// usage
const color5: ColorOrNumber = 0;

// ------------------------------------------

// TS: Create interface that can be implemented by classes or primitive objects
export interface ColorManager {
  setColor: (color: Color) => ColorName;
  name?: ColorName; // --> optional property or method
}

// Usage
const objManager: ColorManager = {
  setColor: (color) => {
    return 'blue';
  },
  name: "green"
};

class MyManager implements ColorManager {
  public setColor (color: Color): ColorName {
    return 'blue'
  }
}

// ------------------------------------------

// TS: You can create your generics in order to allow type encapsulation
// this is useful when we have a method that returns a value that can include other types
type APIResponse<T> = {
  status: string;
  data: T;
};

// usage
const responseNumbers: APIResponse<number> = {
  status: 'ok',
  data: 30,
}

const responseArrayOfString: APIResponse<string[]> = {
  status: 'ok',
  data: ['text1', 'text2'],
}

const responseOfColorList: APIResponse<Colors> = {
  status: 'ok',
  data: [],
}

const responseOfColorName: APIResponse<ColorName> = {
  status: 'ok',
  data: 'green',
}
