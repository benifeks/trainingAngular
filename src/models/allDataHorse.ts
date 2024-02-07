export interface DataHorse {
  nameRed: string;
  nameGreen: string;
  nameBlue: string;
  mileageRed: number;
  mileageGreen: number;
  mileageBlye: number;
  totalMileage: number;
  counter: number;
}

export interface DataField {
  dice: { runRed: number; runGreen: number; runBlue: number };
  dataRun: {
    red: number;
    green: number;
    blue: number;
    reset: boolean;
    counter: number;
  };
  marginHorses: {
    marginLeftRed: string;
    marginLeftGreen: string;
    marginLeftBlue: string;
  };
}
