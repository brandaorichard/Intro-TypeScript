// Crie union types que representem: a. Os estados físicos da matéria: líquido, sólido ou gasoso.
type StatesOfMatter = "liquid" | "solid" | "gaseous";

// O documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex.: “123.567.890-12” ou 123456789012.
type IdentifyingDocument = string | number;

// Sistemas operacionais: Linux, MacOS ou Windows.
type SO = "Linux" | "MacOS" | "Windows";

// Crie type aliases para: a. Representar pessoa(s) em uma reserva de restaurante.
type ReservationNames = string[] | string;

// Um objeto que represente um endereço.
type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}