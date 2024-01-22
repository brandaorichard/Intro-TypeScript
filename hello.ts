// Type Aliases
type PersonalInfo = {
  name: string;
  birthYear: number;
  idCracha: number | string; // Union Types
};

function printPersonalInfo(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear} id cracha: ${data.idCracha}`);
}

printPersonalInfo({ name: 'Rogerinho', birthYear: 1978, idCracha: 22});